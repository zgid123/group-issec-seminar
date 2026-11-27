import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const audit=JSON.parse(fs.readFileSync(path.join(root,'references/citation-audit.json')));
const refs=[audit.survey,...audit.papers.filter(p=>p.includeInReferences!==false)];
for(const ref of refs){if(!ref.url)throw Error(`Missing source URL: ${ref.title}`);new URL(ref.url);}
const pages=Math.ceil(refs.length/8),base=Math.floor(refs.length/pages),extra=refs.length%pages;let offset=0;
const blocks=Array.from({length:pages},(_,i)=>{
 const chunk=refs.slice(offset,offset+=base+(i<extra?1:0));
 return '---\nlayout: references\nhideInToc: true\nclass: complete-references\ncolumns: 2\nreferences:\n'+chunk.map(r=>`  - authors: ${JSON.stringify(r.authors)}\n    year: ${r.year}\n    title: ${JSON.stringify(r.title)}\n    url: ${JSON.stringify(r.url)}\n`).join('')+`---\n\n# References (${i+1}/${pages})\n`;
});
const file=path.join(root,'slides.md');let s=fs.readFileSync(file,'utf8');
const start=s.indexOf('---\nlayout: references'),end=s.indexOf('---\nlayout: thanks',start);
if(start<0||end<0)throw Error('Reference boundaries not found');
fs.writeFileSync(file,s.slice(0,start)+blocks.join('\n')+'\n'+s.slice(end));
console.log(`Rendered ${refs.length} linked references across ${pages} slides.`);
