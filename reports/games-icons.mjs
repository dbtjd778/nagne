import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'
import {execFile} from 'node:child_process'
import {promisify} from 'node:util'
const run=promisify(execFile)
const root=path.resolve(import.meta.dirname,'..')
const reportPath=path.join(root,'reports/games-audit.json')
const report=JSON.parse(await fs.readFile(reportPath,'utf8'))
const failures=[]
for(const row of report.results){
 if(!row.icon)continue
 const original=row.icon
 const source=path.join(root,'public',original)
 const target=source.replace(/\.[^.]+$/,'.webp')
 let input=source,temporary
 try{
  if(source.endsWith('.svg')){
   const svg=await fs.readFile(source,'utf8')
   if(/<script|<foreignObject|<!ENTITY|<!DOCTYPE|\son\w+\s*=|(?:xlink:)?href\s*=\s*["'](?!#|data:image\/)/i.test(svg))throw new Error('Unsafe active/external SVG rejected')
  }
  if(source.endsWith('.ico')){
   temporary=path.join(root,'reports',`games-icon-tmp-${row.id}.png`)
   await run('sips',['-s','format','png',source,'--out',temporary])
   input=temporary
  }
  const buffer=await sharp(input,{limitInputPixels:4000000}).resize(64,64,{fit:'inside',withoutEnlargement:true}).webp({quality:90,alphaQuality:100}).toBuffer()
  await fs.writeFile(target,buffer)
  const meta=await sharp(target).metadata()
  if(!meta.width||!meta.height||meta.width>64||meta.height>64)throw new Error('Invalid raster dimensions')
  row.icon=original.replace(/\.[^.]+$/,'.webp')
  row.iconWidth=meta.width
  row.iconHeight=meta.height
 }catch(error){failures.push({name:row.name,error:error.message});delete row.icon}
 finally{
  if(source!==target)await fs.unlink(source).catch(()=>{})
  if(temporary)await fs.unlink(temporary).catch(()=>{})
 }
}
report.icons=report.results.filter(r=>r.icon).length
report.iconConversion={format:'webp',maxDimension:64,failures}
await fs.writeFile(reportPath,JSON.stringify(report,null,2)+'\n')
console.log(JSON.stringify({icons:report.icons,failures}))
