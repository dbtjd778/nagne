'use client';

import { useLocale } from "./LocaleProvider";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import boundaryCodes from "../data/earth-boundaries.json";
import { coast, createFrameLoop, damp } from "../lib/globe-motion";
const RAD = Math.PI / 180;
const vector = (lat, lng) => new THREE.Vector3(1.46 * Math.cos(lat * RAD) * Math.cos(lng * RAD), 1.46 * Math.sin(lat * RAD), -1.46 * Math.cos(lat * RAD) * Math.sin(lng * RAD));
export default function EarthCanvas(props) {
  const {
    t,
    path,
    locale
  } = useLocale();
  const host = useRef(null);
  const labels = useRef(new Map());
  const latest = useRef(props);
  latest.current = props;
  const engine = useRef(null);
  useEffect(() => {
    let cancelled = false,
      renderer,
      observer,
      intersection,
      scene,
      loop,
      camera,
      root,
      selection;
    let visible = true,
      pageVisible = !document.hidden,
      width = 1,
      height = 1,
      normalDistance = 4.9;
    let selectedTexture = null,
      selectionVersion = 0,
      priorSelected;
    const textures = [],
      points = new Map();
    const container = host.current;
    const target = {
      x: 24 * RAD,
      y: -Math.PI / 2 - 113 * RAD
    };
    const velocity = {
      x: 0,
      y: 0
    };
    const drag = {
      active: false,
      id: null,
      x: 0,
      y: 0,
      time: 0
    };
    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
    const smallScreen = matchMedia("(max-width: 700px)").matches;
    const stopMomentum = () => {
      velocity.x = 0;
      velocity.y = 0;
    };
    const updateVisibility = () => {
      pageVisible = !document.hidden;
      loop?.setVisible(visible && pageVisible);
    };
    const contextLost = event => {
      event.preventDefault();
      loop?.dispose();
      latest.current.onError();
    };
    const motionChanged = () => {
      stopMomentum();
      loop?.invalidate();
    };
    async function initialize() {
      try {
        renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
          powerPreference: "low-power"
        });
        renderer.setPixelRatio(Math.min(devicePixelRatio, smallScreen ? 1.25 : 1.5));
        renderer.setClearColor(0x000000, 0);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.28;
        renderer.domElement.setAttribute("aria-hidden", "true");
        container.appendChild(renderer.domElement);
        renderer.domElement.addEventListener("webglcontextlost", contextLost);
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(40, 1, .1, 100);
        scene.add(new THREE.AmbientLight(0x8eb9e5, .32));
        const sun = new THREE.DirectionalLight(0xfff4df, 3.15);
        sun.position.set(-3.3, 3, 5);
        scene.add(sun);
        const fill = new THREE.DirectionalLight(0x347cdc, .3);
        fill.position.set(3, -1, -3);
        scene.add(fill);
        root = new THREE.Group();
        root.rotation.set(target.x, target.y, 0, "XYZ");
        scene.add(root);
        const loader = new THREE.TextureLoader();
        const names = [smallScreen ? "day-small" : "day", "night", "clouds-small", "water", "boundaries"];
        const [day, night, cloudMap, water, boundaries] = await Promise.all(names.map(name => loader.loadAsync(`/earth/${name}.webp`).then(texture => {
          if (cancelled) texture.dispose();else textures.push(texture);
          return texture;
        })));
        if (cancelled) return;
        day.colorSpace = THREE.SRGBColorSpace;
        night.colorSpace = THREE.SRGBColorSpace;
        textures.forEach(texture => {
          texture.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
        });
        // All shells share the same geometry; scale changes only their radius.
        const geometry = new THREE.SphereGeometry(1, smallScreen ? 64 : 96, smallScreen ? 48 : 64);
        function shell(radius, material, parent = root) {
          const mesh = new THREE.Mesh(geometry, material);
          mesh.scale.setScalar(radius);
          parent.add(mesh);
          return mesh;
        }
        shell(1.45, new THREE.MeshPhongMaterial({
          map: day,
          specularMap: water,
          specular: new THREE.Color(0x334965),
          shininess: 22
        }));
        shell(1.452, new THREE.ShaderMaterial({
          uniforms: {
            nightMap: {
              value: night
            },
            sunDirection: {
              value: new THREE.Vector3(-3.3, 3, 5).normalize()
            }
          },
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          vertexShader: "varying vec2 vUv; varying vec3 vN; void main(){ vUv=uv; vN=normalize(mat3(modelMatrix)*normal); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",
          fragmentShader: "uniform sampler2D nightMap; uniform vec3 sunDirection; varying vec2 vUv; varying vec3 vN; void main(){float darkness=1.0-smoothstep(-.22,.32,dot(normalize(vN),sunDirection)); vec3 cities=texture2D(nightMap,vUv).rgb; gl_FragColor=vec4(cities*darkness*1.25,darkness*.9);}"
        }));
        shell(1.465, new THREE.MeshPhongMaterial({
          color: 0xffffff,
          alphaMap: cloudMap,
          transparent: true,
          opacity: .58,
          depthWrite: false,
          shininess: 0
        }));
        shell(1.49, new THREE.ShaderMaterial({
          uniforms: {
            glowColor: {
              value: new THREE.Color(0x5cafff)
            }
          },
          side: THREE.BackSide,
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          vertexShader: "varying vec3 vN; varying vec3 vPosition; void main(){vec4 p=modelViewMatrix*vec4(position,1.);vPosition=p.xyz;vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*p;}",
          fragmentShader: "uniform vec3 glowColor;varying vec3 vN;varying vec3 vPosition;void main(){float rim=pow(1.0-abs(dot(normalize(vN),normalize(-vPosition))),3.7);gl_FragColor=vec4(glowColor,rim*.42);}"
        }), scene);
        shell(1.47, new THREE.MeshBasicMaterial({
          map: boundaries,
          transparent: true,
          opacity: .7,
          depthWrite: false
        }));
        selection = shell(1.472, new THREE.MeshBasicMaterial({
          transparent: true,
          opacity: .7,
          depthWrite: false
        }));
        selection.visible = false;
        function updateSelection() {
          const code = latest.current.selected;
          if (priorSelected === code) return;
          priorSelected = code;
          const version = ++selectionVersion;
          selection.visible = false;
          selectedTexture?.dispose();
          selectedTexture = null;
          selection.material.map = null;
          if (!boundaryCodes.includes(code)) return;
          loader.load(`/earth/countries/${code}.webp`, texture => {
            if (cancelled || version !== selectionVersion) {
              texture.dispose();
              return;
            }
            selectedTexture = texture;
            selection.material.map = texture;
            selection.material.needsUpdate = true;
            selection.visible = true;
            loop?.invalidate();
          }, undefined, () => {/* Country lists remain usable without the optional highlight. */});
        }
        const worldPoint = new THREE.Vector3(),
          projected = new THREE.Vector3();
        function render(dt) {
          updateSelection();
          const automatic = latest.current.rotating && !drag.active && !reduceMotion.matches;
          if (automatic) {
            stopMomentum();
            target.y += dt * .045;
          } else if (!drag.active && !reduceMotion.matches) {
            const x = coast(velocity.x, dt),
              y = coast(velocity.y, dt);
            target.x = THREE.MathUtils.clamp(target.x + x.distance, -1.35, 1.35);
            target.y += y.distance;
            velocity.x = x.velocity;
            velocity.y = y.velocity;
          }
          const distance = normalDistance / latest.current.zoom;
          const rate = drag.active ? 24 : 12;
          root.rotation.x = reduceMotion.matches ? target.x : damp(root.rotation.x, target.x, rate, dt);
          root.rotation.y = reduceMotion.matches ? target.y : damp(root.rotation.y, target.y, rate, dt);
          camera.position.z = reduceMotion.matches ? distance : damp(camera.position.z, distance, 12, dt);
          root.updateMatrixWorld(true);
          camera.updateMatrixWorld(true);
          const occupied = [];
          for (const country of latest.current.countries) {
            const label = labels.current.get(country.code);
            if (!label) continue;
            if (!points.has(country.code)) points.set(country.code, vector(country.lat, country.lng));
            worldPoint.copy(points.get(country.code)).applyMatrix4(root.matrixWorld);
            const front = worldPoint.z * camera.position.z - worldPoint.lengthSq() > .2;
            projected.copy(worldPoint).project(camera);
            const x = (projected.x * .5 + .5) * width,
              y = (-projected.y * .5 + .5) * height;
            const collision = occupied.some(p => Math.abs(p.x - x) < 39 && Math.abs(p.y - y) < 38);
            const show = front && x > 22 && x < width - 22 && y > 22 && y < height - 22 && (!collision || country.code === latest.current.selected);
            const display = show ? "flex" : "none";
            if (label.style.display !== display) label.style.display = display;
            if (show) {
              label.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) translate(-50%,-50%)`;
              occupied.push({
                x,
                y
              });
            }
          }
          renderer.render(scene, camera);
          return automatic || root.rotation.x !== target.x || root.rotation.y !== target.y || camera.position.z !== distance || !drag.active && !reduceMotion.matches && (velocity.x !== 0 || velocity.y !== 0);
        }
        loop = createFrameLoop({
          requestFrame: requestAnimationFrame,
          cancelFrame: cancelAnimationFrame,
          render
        });
        function resize() {
          width = Math.max(1, container.clientWidth);
          height = Math.max(1, container.clientHeight);
          renderer.setSize(width, height);
          camera.aspect = width / height;
          normalDistance = Math.max(4.9, 4.1 / camera.aspect);
          camera.position.z = normalDistance / latest.current.zoom;
          camera.updateProjectionMatrix();
          loop.invalidate();
        }
        engine.current = {
          invalidate: loop.invalidate,
          focus: point => {
            stopMomentum();
            target.x = point.lat * RAD;
            let y = -Math.PI / 2 - point.lng * RAD;
            y += Math.round((root.rotation.y - y) / (Math.PI * 2)) * Math.PI * 2;
            target.y = y;
            loop.invalidate();
          },
          key: (dx, dy) => {
            stopMomentum();
            target.y += dx;
            target.x = THREE.MathUtils.clamp(target.x + dy, -1.35, 1.35);
            loop.invalidate();
          },
          drag: (dx, dy, dt) => {
            target.y += dx * .004;
            target.x = THREE.MathUtils.clamp(target.x + dy * .004, -1.35, 1.35);
            velocity.x = THREE.MathUtils.clamp(dy * .004 / dt, -1.5, 1.5);
            velocity.y = THREE.MathUtils.clamp(dx * .004 / dt, -1.5, 1.5);
            loop.invalidate();
          }
        };
        engine.current.focus(latest.current.focusPoint);
        observer = new ResizeObserver(resize);
        observer.observe(container);
        resize();
        intersection = new IntersectionObserver(entries => {
          visible = entries[0].isIntersecting;
          updateVisibility();
        });
        intersection.observe(container);
        document.addEventListener("visibilitychange", updateVisibility);
        reduceMotion.addEventListener("change", motionChanged);
        updateVisibility();
        latest.current.onReady();
      } catch (error) {
        if (!cancelled) {
          loop?.dispose();
          console.warn("Globe unavailable:", error.message);
          latest.current.onError();
        }
      }
    }
    initialize();
    const down = event => {
      if (!event.isPrimary || event.button !== 0 || event.target.closest("button")) return;
      stopMomentum();
      drag.active = true;
      drag.id = event.pointerId;
      drag.x = event.clientX;
      drag.y = event.clientY;
      drag.time = event.timeStamp;
      container.setPointerCapture(event.pointerId);
      latest.current.onInteract();
    };
    const move = event => {
      if (!drag.active || event.pointerId !== drag.id) return;
      engine.current?.drag(event.clientX - drag.x, event.clientY - drag.y, Math.max(.008, (event.timeStamp - drag.time) / 1000));
      drag.x = event.clientX;
      drag.y = event.clientY;
      drag.time = event.timeStamp;
    };
    const up = event => {
      if (!drag.active || event.pointerId !== drag.id) return;
      if (event.type === "pointercancel" || event.timeStamp - drag.time > 100 || reduceMotion.matches) stopMomentum();
      drag.active = false;
      drag.id = null;
      loop?.invalidate();
    };
    container.addEventListener("pointerdown", down);
    container.addEventListener("pointermove", move);
    container.addEventListener("pointerup", up);
    container.addEventListener("pointercancel", up);
    container.addEventListener("lostpointercapture", up);
    return () => {
      cancelled = true;
      loop?.dispose();
      observer?.disconnect();
      intersection?.disconnect();
      document.removeEventListener("visibilitychange", updateVisibility);
      reduceMotion.removeEventListener("change", motionChanged);
      container.removeEventListener("pointerdown", down);
      container.removeEventListener("pointermove", move);
      container.removeEventListener("pointerup", up);
      container.removeEventListener("pointercancel", up);
      container.removeEventListener("lostpointercapture", up);
      renderer?.domElement.removeEventListener("webglcontextlost", contextLost);
      const geometries = new Set();
      scene?.traverse(node => {
        if (node.geometry) geometries.add(node.geometry);
        if (node.material) for (const mat of Array.isArray(node.material) ? node.material : [node.material]) mat.dispose();
      });
      geometries.forEach(geometry => geometry.dispose());
      textures.forEach(texture => texture.dispose());
      selectedTexture?.dispose();
      renderer?.dispose();
      renderer?.domElement.remove();
      engine.current = null;
    };
  }, []);
  useEffect(() => {
    engine.current?.focus(props.focusPoint);
  }, [props.focusPoint]);
  useEffect(() => {
    engine.current?.invalidate();
  }, [props.countries, props.selected, props.rotating, props.zoom]);
  return <div ref={host} className="earth-canvas" tabIndex={0} role="group" aria-label={t("회전 가능한 지구본. 방향키로 회전하고 나라 검색으로 선택하세요.")} onKeyDown={event => {
    const keys = {
      ArrowLeft: [-.14, 0],
      ArrowRight: [.14, 0],
      ArrowUp: [0, -.12],
      ArrowDown: [0, .12]
    };
    if (keys[event.key]) {
      event.preventDefault();
      props.onInteract();
      engine.current?.key(...keys[event.key]);
    }
  }}><div className="earth-labels">{props.countries.map(country => <button key={country.code} ref={node => {
        if (node) labels.current.set(country.code, node);else labels.current.delete(country.code);
      }} data-country={country.code} className={`earth-marker ${props.selected === country.code ? "is-selected" : ""}`} aria-label={t("{0} 사이트 {1}개 보기", {
        "0": country.name,
        "1": country.count
      })} title={t("{0} · {1}개", {
        "0": country.name,
        "1": country.count
      })} style={{
        display: "none"
      }} onClick={() => props.onChoose(country.code)}><span>{country.count}</span><small>{country.name}</small></button>)}</div></div>;
}
