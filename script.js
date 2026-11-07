/* Page logic. You do not need to edit this file. Edit content.js instead. */
(function(){
'use strict';
const $=id=>document.getElementById(id);
function el(tag,cls,text){const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e}
function get(path){return path.split('.').reduce((o,k)=>o&&o[k],SITE)}
const isHttps=u=>typeof u==='string'&&u.startsWith('https://');
const isLive=p=>isHttps(p.embed);

/* ---- Text, pictures, links ---- */
document.querySelectorAll('[data-text]').forEach(n=>{const v=get(n.dataset.text);if(v!==undefined)n.textContent=v});
$('footer-text').textContent='© '+new Date().getFullYear()+' '+SITE.footer;
$('profile').src=SITE.profileImage;$('profile').alt=SITE.profileAlt||'';
if(SITE.backgroundImage)document.documentElement.style.setProperty('--hero-img','url("'+SITE.backgroundImage+'")');
const about=$('about-text');SITE.about.forEach(t=>about.appendChild(el('p','',t)));

/* ---- Social icons + contact buttons ---- */
const icons={
 linkedin:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11.5H3zM9.5 9.75h3.8v1.6h.05c.55-1 1.9-1.95 3.9-1.95 4.1 0 4.75 2.65 4.75 6.1v5.75h-4v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.35-2 2.7v5.2h-4z"/></svg>',
 mail:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.2L4.5 7v.1L12 13l7.5-5.9V7z"/></svg>'};
const social=$('social');
function addIcon(href,label,svg){const a=document.createElement('a');a.href=href;a.setAttribute('aria-label',label);a.innerHTML=svg;if(href.startsWith('http')){a.target='_blank';a.rel='noopener noreferrer'}social.appendChild(a)}
if(SITE.linkedin){addIcon(SITE.linkedin,'LinkedIn',icons.linkedin);$('btn-linkedin').href=SITE.linkedin}else $('btn-linkedin').hidden=true;
if(SITE.email)addIcon('mailto:'+SITE.email,'Email',icons.mail);
$('mail').addEventListener('click',()=>{
 const st=$('status');
 if(!SITE.email){st.textContent=SITE.contact.noEmailMessage;return}
 window.location.href='mailto:'+SITE.email+'?subject='+encodeURIComponent(SITE.contact.emailSubject);
});

/* ---- Work: filters, cards, pop-up ---- */
const grid=$('projects'),filters=$('filters'),dlg=$('dlg');
let current='__all';
function media(p,box){
 box.textContent='';
 if(isLive(p)){
  const f=document.createElement('iframe');
  f.setAttribute('sandbox','allow-scripts allow-same-origin allow-popups allow-forms');
  f.referrerPolicy='no-referrer';f.title=p.title+' (interactive)';f.allowFullscreen=true;f.loading='lazy';f.src=p.embed;box.appendChild(f);
 }else if(p.image){
  const i=document.createElement('img');i.src=p.image;i.alt=p.title+' screenshot';i.loading='lazy';box.appendChild(i);
 }else box.appendChild(el('div','thumb',SITE.work.noImageText));
}
function renderCards(){
 grid.textContent='';
 PROJECTS.filter(p=>current==='__all'||(current==='__live'?isLive(p):p.type===current)).forEach(p=>{
  const b=el('button','proj');b.type='button';
  const th=el('div','thumb');
  if(p.image){const i=document.createElement('img');i.src=p.image;i.alt='';i.loading='lazy';th.appendChild(i)}
  else th.textContent=isLive(p)?SITE.work.interactiveCardText:SITE.work.noImageText;
  const body=el('div','pbody'),tg=el('span','tag',p.type);
  if(isLive(p))tg.appendChild(el('span','badge',SITE.work.interactiveLabel.toUpperCase()));
  body.appendChild(tg);body.appendChild(el('h3','',p.title));body.appendChild(el('p','',p.desc));
  if(p.tools&&p.tools.length)body.appendChild(el('div','tools',p.tools.join(' · ')));
  b.appendChild(th);b.appendChild(body);b.addEventListener('click',()=>openProject(p));grid.appendChild(b);
 });
}
function renderFilters(){
 const types=[...new Set(PROJECTS.map(p=>p.type).filter(Boolean))];
 const list=[['__all',SITE.work.allLabel]].concat(types.map(t=>[t,t]));
 if(PROJECTS.some(isLive))list.push(['__live',SITE.work.interactiveLabel]);
 list.forEach(([key,label])=>{
  const b=el('button','',label);b.type='button';b.setAttribute('aria-pressed',String(key===current));
  b.addEventListener('click',()=>{current=key;filters.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));renderCards()});
  filters.appendChild(b);
 });
}
function openProject(p){
 $('dtitle').textContent=p.title;$('dtag').textContent=p.type;$('ddesc').textContent=p.desc;
 media(p,$('dmedia'));
 const live=isLive(p),l=$('dlink');
 $('dhint').hidden=!live;$('dfull').hidden=!live;
 if(p.link&&p.link.startsWith('http')){l.href=p.link;l.textContent=SITE.work.openProjectButton;l.style.display=''}
 else if(live){l.href=p.embed;l.textContent=SITE.work.openNewTabButton;l.style.display=''}
 else l.style.display='none';
 if(typeof dlg.showModal==='function')dlg.showModal();else dlg.setAttribute('open','');
}
function closeDialog(){$('dmedia').textContent='';if(dlg.close)dlg.close();else dlg.removeAttribute('open')}
$('dclose').addEventListener('click',closeDialog);
$('dfull').addEventListener('click',()=>{const f=document.querySelector('#dmedia iframe');if(f&&f.requestFullscreen)f.requestFullscreen()});
dlg.addEventListener('click',e=>{if(e.target===dlg)closeDialog()});
dlg.addEventListener('close',()=>{$('dmedia').textContent=''});
renderFilters();renderCards();

/* ---- Career timeline ---- */
(function(){
 const tl=$('timeline'),lg=$('legend');
 const used=[...new Set(CAREER.map(c=>c.kind))];
 used.forEach(k=>{const kind=CAREER_KINDS[k];if(!kind)return;const s=el('span'),i=el('i');i.style.background=kind.color;s.appendChild(i);s.appendChild(document.createTextNode(kind.label));lg.appendChild(s)});
 CAREER.forEach(c=>{
  const kind=CAREER_KINDS[c.kind]||CAREER_KINDS.work;
  const li=el('li','tl');li.style.setProperty('--c',kind.color);
  const d=el('div','tl-date',c.date);if(c.now)d.appendChild(el('span','tl-now',SITE.career.nowLabel));
  const card=el('div','tl-card');
  card.appendChild(el('h3','',c.title));card.appendChild(el('div','tl-org',c.org));card.appendChild(el('p','',c.desc));
  if(c.points&&c.points.length){const ul=el('ul');c.points.forEach(t=>ul.appendChild(el('li','',t)));card.appendChild(ul)}
  li.appendChild(d);li.appendChild(card);tl.appendChild(li);
 });
})();
})();
