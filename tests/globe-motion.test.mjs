import test from 'node:test'
import assert from 'node:assert/strict'
import { coast, createFrameLoop, damp } from '../src/lib/globe-motion.js'

test('rotation easing and momentum are consistent across display refresh rates', () => {
  const simulate = fps => {
    let angle = 0, velocity = 1.2, distance = 0
    for (let i = 0; i < fps / 2; i++) {
      angle = damp(angle, 2, 12, 1 / fps)
      const next = coast(velocity, 1 / fps)
      distance += next.distance; velocity = next.velocity
    }
    return { angle, distance, velocity }
  }
  const reference = simulate(60)
  for (const fps of [30, 120, 144]) {
    const result = simulate(fps)
    for (const key of Object.keys(result)) assert.ok(Math.abs(result[key] - reference[key]) < .000001, `${fps}Hz ${key}`)
  }
  assert.ok(reference.angle > 0 && reference.angle < 2)
  let position = 0, velocity = 1.2
  for (let i = 0; i < 600; i++) { position = damp(position, 2, 12, 1 / 60); velocity = coast(velocity, 1 / 60).velocity }
  assert.equal(position, 2); assert.equal(velocity, 0)
})

test('the globe schedules nothing while settled, hidden, or disposed and wakes on input', () => {
  let sequence = 0, renders = 0, moving = false
  const pending = new Map()
  const loop = createFrameLoop({
    requestFrame(callback) { pending.set(++sequence, callback); return sequence },
    cancelFrame(id) { pending.delete(id) },
    render() { renders++; return moving },
  })
  function tick(time) { const [id, callback] = pending.entries().next().value; pending.delete(id); callback(time) }
  for (let i = 0; i < 100; i++) loop.invalidate()
  assert.equal(pending.size, 1)
  tick(0)
  assert.equal(renders, 1); assert.equal(pending.size, 0)
  moving = true; loop.invalidate(); tick(100)
  assert.equal(pending.size, 1)
  loop.setVisible(false); loop.invalidate()
  assert.equal(pending.size, 0)
  loop.setVisible(true); tick(5000)
  assert.equal(renders, 3); assert.equal(pending.size, 1)
  moving = false; tick(5016)
  assert.equal(pending.size, 0)
  loop.invalidate(); loop.dispose(); loop.invalidate(); loop.setVisible(true)
  assert.equal(pending.size, 0)
})
