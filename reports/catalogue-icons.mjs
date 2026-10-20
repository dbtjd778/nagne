// Normalize only the catalogue's downloaded public icons to inert 64px WebP.
import fs from 'node:fs/promises'
import path from 'node:path'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import sharp from 'sharp'
const run = promisify(execFile)
const root = path.resolve(import.meta.dirname, '..')
const iconDir = path.join(root, 'public/icons')
const names = (await fs.readdir(iconDir)).filter(n => !n.endsWith('.webp'))
const converted = {}
const failures = []
let next = 0
async function worker() {
  while (next < names.length) {
    const name = names[next++]
    const source = path.join(iconDir, name)
    const stem = path.parse(name).name
    const dest = path.join(iconDir, `${stem}.webp`)
    let input = source
    let temporary = null
    try {
      if (name.endsWith('.svg')) {
        const svg = await fs.readFile(source, 'utf8')
        if (/<script|<foreignObject|<!ENTITY|<!DOCTYPE|\son\w+\s*=|(?:xlink:)?href\s*=\s*["'](?!#|data:image\/)/i.test(svg)) {
          throw new Error('SVG active or external content rejected')
        }
      }
      if (name.endsWith('.ico')) {
        temporary = path.join(root, 'reports', `catalogue-icon-tmp-${stem}.png`)
        await run('sips', ['-s', 'format', 'png', source, '--out', temporary])
        input = temporary
      }
      await sharp(input, { limitInputPixels: 4000000 })
        .resize(64, 64, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 90, alphaQuality: 100 })
        .toFile(dest)
      const meta = await sharp(dest).metadata()
      if (!meta.width || !meta.height || meta.width > 64 || meta.height > 64) throw new Error('Invalid raster dimensions')
      converted[`/icons/${name}`] = `/icons/${stem}.webp`
      await fs.unlink(source)
    } catch (error) {
      failures.push({ file: name, error: error.message })
      await fs.unlink(source).catch(() => {})
    } finally {
      if (temporary) await fs.unlink(temporary).catch(() => {})
    }
  }
}
await Promise.all(Array.from({ length: 6 }, worker))
// A publisher may already serve WebP; those still need the same size limit.
for (const name of (await fs.readdir(iconDir)).filter(n => n.endsWith('.webp'))) {
  const file = path.join(iconDir, name)
  const meta = await sharp(file).metadata()
  if (meta.width > 64 || meta.height > 64 || meta.pages > 1) {
    const buffer = await sharp(file)
      .resize(64, 64, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 90, alphaQuality: 100 })
      .toBuffer()
    await fs.writeFile(file, buffer)
  }
}
for (const auditName of ['catalogue-candidate-audit.json', 'catalogue-retry-audit.json']) {
  const file = path.join(root, 'reports', auditName)
  const data = JSON.parse(await fs.readFile(file, 'utf8'))
  for (const row of data.results) {
    if (row.icon && converted[row.icon]) row.icon = converted[row.icon]
    else if (row.icon && !row.icon.endsWith('.webp')) delete row.icon
  }
  data.icons = data.results.filter(s => s.icon).length
  await fs.writeFile(file, JSON.stringify(data, null, 2) + '\n')
}
await fs.writeFile(path.join(root, 'reports/catalogue-icon-conversion.json'), JSON.stringify({ converted: Object.keys(converted).length, failures }, null, 2) + '\n')
console.log(JSON.stringify({ converted: Object.keys(converted).length, failures }))
