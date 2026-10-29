export function damp(current, target, rate, dt) {
  const next = current + (target - current) * -Math.expm1(-rate * dt)
  return Math.abs(target - next) < .00005 ? target : next
}

export function coast(velocity, dt) {
  const decay = Math.exp(-5 * dt)
  return { distance: velocity * (1 - decay) / 5, velocity: Math.abs(velocity * decay) < .002 ? 0 : velocity * decay }
}

// One pending frame at most. A settled or hidden scene has no RAF callback.
export function createFrameLoop({ requestFrame, cancelFrame, render }) {
  let frame = null, last = null, visible = true, disposed = false
  function invalidate() {
    if (!disposed && visible && frame === null) frame = requestFrame(tick)
  }
  function tick(time) {
    frame = null
    if (disposed || !visible) return
    const dt = last === null ? 1 / 60 : Math.min((time - last) / 1000, .05)
    last = time
    if (render(dt)) invalidate()
    else last = null
  }
  function stop() {
    if (frame !== null) cancelFrame(frame)
    frame = null; last = null
  }
  return {
    invalidate,
    setVisible(value) { visible = value; if (visible) invalidate(); else stop() },
    dispose() { disposed = true; stop() },
  }
}
