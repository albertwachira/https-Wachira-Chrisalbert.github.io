// jungle: swaying leaves + fireflies
(function(){var c=document.getElementById('sky'),x=c.getContext('2d'),W,H,L=[],F=[],m=matchMedia('(prefers-reduced-motion:reduce)').matches;
function rs(){W=c.width=innerWidth;H=c.height=innerHeight}rs();addEventListener('resize',rs);
var lc=['#1f8f6a','#29ab87','#3ddc97','#177a52','#6fcf7a'];
for(var i=0;i<26;i++)L.push({x:Math.random()*W,y:Math.random()*H,s:Math.random()*14+8,v:Math.random()*.5+.25,ph:Math.random()*6.3,a:Math.random()*6.3,w:Math.random()*.02+.005,c:lc[i%5]});
for(var j=0;j<45;j++)F.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*2+1,ph:Math.random()*6.3,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3});
function leaf(l){x.save();x.translate(l.x,l.y);x.rotate(l.a);x.globalAlpha=.5;x.fillStyle=l.c;x.beginPath();x.moveTo(0,-l.s);x.quadraticCurveTo(l.s*.8,0,0,l.s);x.quadraticCurveTo(-l.s*.8,0,0,-l.s);x.fill();x.strokeStyle='rgba(255,255,255,.25)';x.lineWidth=1;x.beginPath();x.moveTo(0,-l.s);x.lineTo(0,l.s);x.stroke();x.restore()}
var t=0;function f(){t+=.016;x.clearRect(0,0,W,H);
L.forEach(function(l){if(!m){l.y+=l.v;l.x+=Math.sin(t+l.ph)*.6;l.a+=l.w;if(l.y>H+30){l.y=-30;l.x=Math.random()*W}}leaf(l)});
F.forEach(function(p){if(!m){p.x+=p.vx+Math.sin(t+p.ph)*.2;p.y+=p.vy;if(p.x<0)p.x=W;if(p.x>W)p.x=0;if(p.y<0)p.y=H;if(p.y>H)p.y=0}var a=.35+.65*Math.abs(Math.sin(t*1.3+p.ph));var g=x.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*7);g.addColorStop(0,'rgba(200,255,140,'+a+')');g.addColorStop(1,'rgba(200,255,140,0)');x.fillStyle=g;x.beginPath();x.arc(p.x,p.y,p.r*7,0,6.3);x.fill()});
requestAnimationFrame(f)}f()})();
// typed
var roles=['Full-Stack Developer','Graphic & UI/UX Designer','React.js & Node.js Builder','Clean, Responsive Interfaces'],ri=0,ci=0,del=false,t=document.getElementById('typed');
(function tick(){var w=roles[ri];ci+=del?-1:1;t.textContent='>'+w.slice(0,ci);var d=del?30:70;if(!del&&ci===w.length){del=true;d=1400}else if(del&&ci===0){del=false;ri=(ri+1)%roles.length;d=300}setTimeout(tick,d)})();
// hero mode toggle
document.querySelectorAll('.modes button').forEach(function(b){b.onclick=function(){document.querySelectorAll('.modes button').forEach(function(o){o.classList.remove('on')});b.classList.add('on');var id=b.dataset.m==='id';document.getElementById('idV').classList.toggle('show',id);document.getElementById('coreV').style.display=id?'none':'block'}});
// projects
var P=[
{t:'Project One',c:'web',d:'An E-commerce web app maent for the music department where one can purchase musical Instruments with ease and at an affordable price.',tags:['React.js','Node.js','MySQL'],ov:'An online music store  where shoppers buy instruments through M-pesa,Airtel money and KCB bank',role:'Browse and search instruments by typing or speaking,like items,add to cart and the modes of payment',out:'A routine security update at the apps package'},
{t:'Project Two',c:'web',d:'A restaurant app where one can brose dishes, order or add to cart,pay and an AI chatbot assistant',tags:['JavaScript','Node.js','MongoDB'],ov:'A Full online restaurant with all it takes to become one',role:'shows added dishes,adjust quantites,live total.',out:'complete to browse and check-out in the live preview'},
{t:'Brand & UI Design',c:'design',d:'Product Designer & Full-Stack building',tags:['UI/UX Design','Brand Assets','Icons'],ov:'An evironment where top-notch front-end is valued',role:'Ensuring a conducive and clean user-experience is felt.',out:'Resonable and friendly UI to the user'}];
var pg=document.getElementById('pgrid'),dlg=document.getElementById('dlg');
function render(f){pg.innerHTML='';P.forEach(function(p,i){if(f!=='all'&&p.c!==f)return;var e=document.createElement('div');e.className='card';e.innerHTML='<h3>'+p.t+'</h3><p>'+p.d+'</p><div class="tags">'+p.tags.map(function(g){return'<span>'+g+'</span>'}).join('')+'</div><button class="arch" data-i="'+i+'">System Architecture ›</button>';pg.appendChild(e)})}
render('all');
pg.onclick=function(e){var i=e.target.dataset.i;if(i==null)return;var p=P[i];dlg.innerHTML='<h3 style="margin:0">'+p.t+'</h3><h4>System Overview &amp; Implementation</h4><p style="color:var(--mute)">'+p.ov+'</p><h4>Engineering Role &amp; Contributions</h4><p style="color:var(--mute)">'+p.role+'</p><h4>Performance Outcomes &amp; Engineering Value</h4><p style="color:var(--mute)">'+p.out+'</p><div class="btns"><button class="btn" onclick="dlg.close()">Close Blueprint</button></div>';dlg.showModal()};
document.getElementById('filters').onclick=function(e){var f=e.target.dataset.f;if(!f)return;this.querySelectorAll('button').forEach(function(b){b.classList.toggle('on',b===e.target)});render(f)};
// skills
var K={'Languages':[['C',70],['Python',75],['JavaScript',82],['SQL',78]],'Frameworks & Libs':[['React.js',82],['Node.js',75]],'Databases & Storage':[['MySQL',78],['MongoDB',72],['PostgreSQL',72]],'Design & Tools':[['UI/UX Design',80],['Graphic Design',80],['Git & Version Control',75]]};
var tb=document.getElementById('stabs'),bs=document.getElementById('sbars');
function sk(n){tb.querySelectorAll('button').forEach(function(b){b.classList.toggle('on',b.textContent===n)});bs.innerHTML=K[n].map(function(s){return'<div class="bar"><div class="r">'+s[0]+'<span>'+s[1]+'%</span></div><i style="--w:'+s[1]+'%"></i></div>'}).join('')}
Object.keys(K).forEach(function(n){var b=document.createElement('button');b.textContent=n;b.onclick=function(){sk(n)};tb.appendChild(b)});sk('Databases & Storage');
// nav highlight
var links=[].slice.call(document.querySelectorAll('#nav a'));
addEventListener('scroll',function(){var cur=links[0];links.forEach(function(a){var s=document.querySelector(a.getAttribute('href'));if(s&&s.getBoundingClientRect().top<200)cur=a});links.forEach(function(a){a.classList.toggle('on',a===cur)})},{passive:true});
// hamburger menu
// var burger=document.getElementById('burger'),navEl=document.getElementById('nav');
// burger.onclick=function(){
//   var open=navEl.classList.toggle('open');
//   burger.classList.toggle('open',open);
//   burger.setAttribute('aria-expanded',open);
// };

// hamburger menu
var burger=document.getElementById('burger'),navEl=document.getElementById('nav');
if(burger&&navEl){
  burger.onclick=function(){
    var open=navEl.classList.toggle('open');
    burger.classList.toggle('open',open);
    burger.setAttribute('aria-expanded',open);
  };
  navEl.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click',function(){
      navEl.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded','false');
    });
  });
}
// close the menu after tapping a link
navEl.querySelectorAll('a').forEach(function(a){
  a.addEventListener('click',function(){
    navEl.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded','false');
  });
});
// contact form
var form=document.getElementById('contactForm'),btn=document.getElementById('sendBtn'),msg=document.getElementById('formMsg');
form.addEventListener('submit',function(e){
  e.preventDefault();
  btn.disabled=true; btn.textContent='Sending...';
  fetch('https://formspree.io/f/mqpewjvj',{
    method:'POST',
    body:new FormData(form),
    headers:{'Accept':'application/json'}
  }).then(function(r){
    if(r.ok){ msg.textContent='Thank you! Your message has been sent.'; msg.style.color='var(--cy)'; form.reset(); }
    else { throw new Error(); }
  }).catch(function(){
    msg.textContent='Something went wrong. Please try again or email me directly.'; msg.style.color='#ff8a8a';
  }).finally(function(){ btn.disabled=false; btn.textContent='Send Message ➤'; });
});