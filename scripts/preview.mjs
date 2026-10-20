import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { resolve, extname, sep } from 'node:path'
const root=resolve('out')
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.json':'application/json','.txt':'text/plain; charset=utf-8','.xml':'application/xml','.svg':'image/svg+xml','.png':'image/png','.ico':'image/x-icon','.webp':'image/webp','.jpg':'image/jpeg','.woff2':'font/woff2'}
createServer(async(req,res)=>{
  try{
    const path=decodeURIComponent(new URL(req.url,'http://localhost').pathname)
    let file=resolve(root,`.${path}`)
    if(file!==root && !file.startsWith(root+sep)){res.writeHead(403).end();return}
    try{if((await stat(file)).isDirectory())file=resolve(file,'index.html')}catch{file=resolve(root,'404.html');res.statusCode=404}
    const body=await readFile(file)
    res.setHeader('Content-Type',types[extname(file)]||'application/octet-stream')
    res.setHeader('X-Robots-Tag','noindex, nofollow')
    res.setHeader('Cache-Control','no-store')
    res.setHeader('X-Content-Type-Options','nosniff')
    res.end(body)
  }catch{res.writeHead(404).end('Not found')}
}).listen(5173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:5173'))
