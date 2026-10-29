// Geography is rasterized once here, never on a visitor's main thread.
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { geoEquirectangular, geoPath } from 'd3-geo'
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'

const root = new URL('../public/earth/', import.meta.url)
const world = JSON.parse(await readFile(new URL('../public/geo/countries.json', import.meta.url)))
const width = 2048, height = 1024
const path = geoPath(geoEquirectangular().scale(width / (2 * Math.PI)).translate([width / 2, height / 2]))
const svg = body => Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${body}</svg>`)
const outline = world.features.map(f => `<path d="${path(f)}"/>`).join('')
await mkdir(new URL('countries/', root), { recursive: true })
await sharp(svg(`<g fill="none" stroke="#c1e3f8" stroke-opacity=".28" stroke-width=".45">${outline}</g>`)).webp({ lossless: true }).toFile(fileURLToPath(new URL('boundaries.webp', root)))
await sharp(svg(`<rect width="100%" height="100%" fill="#bbb"/><g fill="#101010">${outline}</g>`)).webp({ quality: 85 }).toFile(fileURLToPath(new URL('water.webp', root)))
const codes = []
for (const feature of world.features) {
  const code = feature.properties.code
  if (!/^[A-Z]{2}$/.test(code)) continue
  codes.push(code)
  await sharp(svg(`<path d="${path(feature)}" fill="#8bdbf4" fill-opacity=".32" stroke="#d1f5ff" stroke-opacity=".95" stroke-width="1.25"/>`)).webp({ lossless: true }).toFile(fileURLToPath(new URL(`countries/${code}.webp`, root)))
}
await writeFile(new URL('../src/data/earth-boundaries.json', import.meta.url), JSON.stringify([...new Set(codes)]))
await sharp(await readFile(new URL('day.webp', root))).resize(2048).webp({ quality: 82 }).toFile(fileURLToPath(new URL('day-small.webp', root)))
await sharp(await readFile(new URL('clouds.webp', root))).resize(1024).greyscale().webp({ quality: 76 }).toFile(fileURLToPath(new URL('clouds-small.webp', root)))
console.log(`Prepared globe textures and ${codes.length} country highlights.`)
