import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=f=>JSON.parse(fs.readFileSync(path.join(root,f),'utf8'));
const audit=read('references/citation-audit.json'), mapping=read('references/slide-sources.json'), evidence=read('references/claim-evidence.json');
const byId=new Map(audit.papers.map(p=>[p.surveyReference,p]));
const sourceLink=(page)=>`https://dl.acm.org/doi/pdf/10.1145/3716628#page=${page}`;
const surveyCitation=`${audit.survey.fullAuthors} (2025). ${audit.survey.title} ${audit.survey.publication}. ${audit.survey.url}`;
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const used=new Map();const outputs=[];let rowCount=0;
for(const slide of mapping.slides){
 const rows=evidence.rows.filter(r=>r.file===slide.file);rowCount+=rows.length;
 const ids=[...new Set([...slide.claims.flatMap(c=>c.refs),...rows.map(r=>r.surveyReference)])];
 for(const id of ids){if(!byId.has(id))throw Error('Unknown source '+id);if(!used.has(id))used.set(id,[]);used.get(id).push(slide.file);}
 const original=fs.readFileSync(path.join(root,slide.file),'utf8');
 const noteBlock=[...original.matchAll(/<!--([\s\S]*?)-->/g)].at(-1);
 // Only the audit suffix is generated. Preserve the presenter's editable script.
 const speaking=noteBlock ? noteBlock[1].split('KIỂM CHỨNG NGUỒN —')[0].trim().replace(/\s*---\s*$/,'').trim() : '';
 const s=noteBlock ? (original.slice(0,noteBlock.index)+original.slice(noteBlock.index+noteBlock[0].length)).trim() : original.trim();
 const title=s.match(/^# (.+)$/m)?.[1];
 let notes=`KIỂM CHỨNG NGUỒN — ${title}\nCập nhật: ${mapping.checkedOn}. Số trang dưới đây là trang PDF của survey, tương ứng 182:n; không phải số slide.\n\nNGUỒN TỔNG QUAN\n${surveyCitation}\nVị trí: ${slide.survey.section}, trang ${slide.survey.pages.join(', ')}.\nMở PDF: ${sourceLink(slide.survey.pages[0])}\n\nNỘI DUNG / VÍ DỤ / SƠ ĐỒ\n`;
 for(const c of slide.claims){notes+=`• ${c.text}\n  Nguồn: ${c.refs.length?c.refs.map(id=>`${byId.get(id).authors} (${byId.get(id).year}), mục tài liệu số ${id} trong survey`).join('; '):`Survey ${slide.survey.section}, tr. ${slide.survey.pages.join(', ')}`}.\n`;if(c.locator)notes+=`  Vị trí kiểm tra: ${c.locator}.\n`;}
 if(rows.length){notes+='\nPHƯƠNG PHÁP — ĐIỂM MẠNH — ĐIỂM YẾU / GIỚI HẠN\n';for(const r of rows){const p=byId.get(r.surveyReference);notes+=`\n${r.method} — ${p.authors} (${p.year}), mục tài liệu số ${p.surveyReference}.\nPhương pháp: ${r.claims.method}\nĐiểm mạnh: ${r.claims.finding}\nĐiểm yếu / giới hạn: ${r.claims.scope}\nPhần đã đối chiếu: ${r.checkedMaterial}\nNguồn đã dùng kiểm tra: ${r.checkedSource||r.source}\n`;}
 notes+='\nCách diễn giải giới hạn: phạm vi dữ liệu/mô hình được thử không chứng minh phương pháp thất bại ở nơi khác. Giới hạn phạm vi và thiếu bảo đảm toàn hệ là nhận xét về bằng chứng, không phải số đo mới.\n';}
 notes+='\nTHÔNG TIN ĐẦY ĐỦ CỦA TỪNG NGUỒN DÙNG TRÊN SLIDE\n';
 for(const id of ids){const p=byId.get(id),rs=rows.filter(r=>r.surveyReference===id);notes+=`\n${p.bibliographyEntry.authors} (${p.year}). ${p.title}\nBản gốc: ${p.url}\nTruy ngược survey: mục tài liệu số ${id}, bibliography tr. ${p.surveyBibliographyPage}; xuất hiện trong nội dung survey tr. ${p.surveyBodyPages.join(', ')||'xem bibliography'}. ${sourceLink(p.surveyBibliographyPage)}\nMục ghi trong survey: ${p.bibliographyEntry.authors} (${p.bibliographyEntry.year}). ${p.bibliographyEntry.rest}\nMức kiểm chứng: ${rs.length?rs.map(r=>r.checkedMaterial).join(' | '):p.originalCheck}\n`;if(p.versionNote)notes+=`Khác biệt phiên bản/định danh: ${p.versionNote}\n`;}
 if(!ids.length)notes+='Slide này tổng hợp trực tiếp survey; không sử dụng paper gốc riêng để minh chứng kết quả.\n';
 notes=(speaking ? speaking+'\n\n---\n\n' : '')+notes.trim();
 fs.writeFileSync(path.join(root,slide.file),s+'\n\n<!--\n'+notes+'\n-->\n');
 outputs.push({title,...slide,rows,ids,notes});
}
if(rowCount!==evidence.rows.length)throw Error('Unmapped table rows');
for(const p of audit.papers){p.usedIn=used.get(p.surveyReference)||[];p.includeInReferences=p.usedIn.length>0;p.verification=p.includeInReferences?'See explicit claim mapping, slide notes and checked material':'Excluded: no current slide claim uses this source';}
fs.writeFileSync(path.join(root,'references/citation-audit.json'),JSON.stringify(audit,null,2)+'\n');
const html=`<!doctype html><html lang="vi"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Kiểm chứng nguồn — AI Agent Security</title><style>body{font:17px/1.65 system-ui,sans-serif;color:#12213b;background:#f5f7fa;max-width:1100px;margin:40px auto;padding:0 24px}h1{font-size:32px}article{background:white;padding:28px;margin:24px 0;border:1px solid #d5deea;border-radius:14px}a{color:#006ca8}input{box-sizing:border-box;width:100%;padding:14px;font:inherit;border:1px solid #9bacbf;border-radius:8px}pre{white-space:pre-wrap;overflow-wrap:anywhere;font:inherit}summary{cursor:pointer;font-weight:700}.muted{color:#52647b}nav a{display:inline-block;margin:4px 10px 4px 0} @media print{input,nav{display:none}article{break-before:page}details{display:block}}</style><h1>Kiểm chứng nội dung và tài liệu</h1><p>${esc(surveyCitation)}</p><p><a href="${audit.survey.url}">Survey</a> · <a href="${sourceLink(1)}">PDF survey</a> · ${outputs.length} slide nội dung · ${used.size} nguồn bổ trợ · ${rowCount} hàng so sánh.</p><p class="muted">Đối chiếu ngày ${mapping.checkedOn}. Phân biệt nguồn gốc đã đọc, abstract, README tác giả và nội dung chỉ dẫn qua survey. Không tuyên bố đã đọc toàn văn mọi bài hoặc tái lập thí nghiệm. Các trang references chỉ chứa nguồn thực sự dùng ở nội dung bên dưới. Hai nguồn là báo cáo demo kỹ thuật, được ghi rõ trong notes.</p><input id="search" placeholder="Tìm tên slide, paper, tác giả hoặc phương pháp…" aria-label="Tìm nguồn"><nav>${outputs.map((o,i)=>`<a href="#s${i}">${esc(o.title)}</a>`).join('')}</nav>${outputs.map((o,i)=>`<article id="s${i}"><h2>${esc(o.title)}</h2><p class="muted">${esc(o.file)}</p><details open><summary>Nội dung, điểm mạnh/giới hạn và nguồn chi tiết</summary><pre>${esc(o.notes).replace(/https?:\/\/[^\s<>]+/g,u=>`<a href="${u}">${u}</a>`)}</pre></details></article>`).join('')}<script>document.getElementById('search').addEventListener('input',e=>{const q=e.target.value.toLocaleLowerCase();document.querySelectorAll('article').forEach(a=>a.hidden=!a.textContent.toLocaleLowerCase().includes(q));});</script></html>`;
fs.mkdirSync(path.join(root,'exports'),{recursive:true});fs.writeFileSync(path.join(root,'exports/source-audit.html'),html);
console.log(`Wrote detailed notes for ${outputs.length} slides; ${used.size} used supporting sources; ${rowCount} comparison rows.`);
