// starfield
(function(){var c=document.getElementById('sky'),x=c.getContext('2d'),S=[],W,H;
function rs(){W=c.width=innerWidth;H=c.height=innerHeight}rs();addEventListener('resize',rs);
var cols=['#9fe9ff','#7a5cff','#2fe0d0','#ffffff','#ff4d8d'];
for(var i=0;i<140;i++)S.push({x:Math.random(),y:Math.random(),r:Math.random()*1.8+.3,v:Math.random()*.00006+.00002,c:cols[i%5]});
function f(){x.clearRect(0,0,W,H);S.forEach(function(s){s.y-=s.v;if(s.y<0)s.y=1;x.globalAlpha=.7;x.fillStyle=s.c;x.beginPath();x.arc(s.x*W,s.y*H,s.r,0,6.3);x.fill()});requestAnimationFrame(f)}f()})();
// typed
var roles=['Next.js & React Specialist','Mobile App Developer (Flutter)','NestJS & PostgreSQL Backends','Three.js Interactive Experiences'],ri=0,ci=0,del=false,t=document.getElementById('typed');
(function tick(){var w=roles[ri];ci+=del?-1:1;t.textContent='>'+w.slice(0,ci);var d=del?30:70;if(!del&&ci===w.length){del=true;d=1400}else if(del&&ci===0){del=false;ri=(ri+1)%roles.length;d=300}setTimeout(tick,d)})();
// hero mode toggle
document.querySelectorAll('.modes button').forEach(function(b){b.onclick=function(){document.querySelectorAll('.modes button').forEach(function(o){o.classList.remove('on')});b.classList.add('on');var id=b.dataset.m==='id';document.getElementById('idV').classList.toggle('show',id);document.getElementById('coreV').style.display=id?'none':'block'}});
// projects
var P=[
{t:'AttendQR',c:'mobile',d:'Real-time QR-based attendance tracking mobile app that secures classroom check-ins.',tags:['Flutter','Firebase','GPS Verification'],ov:'AttendQR is a real-time QR-based attendance tracking mobile app designed to secure classroom check-ins. By generating temporary, encrypted QR codes, instructors can prevent students from sharing codes outside the lecture hall.',role:'Lead Developer. Designed the mobile app architecture, integrated Firebase real-time listeners, and built the GPS verification math layer.',out:'Successfully eliminated attendance proxy fraud by 98% in mock tests. Reduced reporting overhead for professors by generating automated CSV files downloadable instantly in a single tap.'},
{t:'Scheduler Engine',c:'ai',d:'Core systems project implementing scheduling and data structures from scratch.',tags:['C++','Linked Lists Data Structure','File I/O Streams','FIFO Scheduling Algorithm'],ov:'Add overview.',role:'Add role.',out:'Add outcomes.'},
{t:'Grid Pathfinder',c:'ai',d:'Algorithm visualisation on coordinate grids.',tags:['Python','Grid Layout Coordinate Systems','Matplotlib Visualization'],ov:'Add overview.',role:'Add role.',out:'Add outcomes.'},
{t:'K-Means Visualizer',c:'web',d:'Interactive clustering visualiser running in the browser.',tags:['HTML/CSS','JavaScript','K-Means Visuals','HTML5 Canvas','CSS3 Transitions'],ov:'Add overview.',role:'Add role.',out:'Add outcomes.'}];
var pg=document.getElementById('pgrid'),dlg=document.getElementById('dlg');
function render(f){pg.innerHTML='';P.forEach(function(p,i){if(f!=='all'&&p.c!==f)return;var e=document.createElement('div');e.className='card';e.innerHTML='<h3>'+p.t+'</h3><p>'+p.d+'</p><div class="tags">'+p.tags.map(function(g){return'<span>'+g+'</span>'}).join('')+'</div><button class="arch" data-i="'+i+'">System Architecture ›</button>';pg.appendChild(e)})}
render('all');
pg.onclick=function(e){var i=e.target.dataset.i;if(i==null)return;var p=P[i];dlg.innerHTML='<h3 style="margin:0">'+p.t+'</h3><h4>System Overview &amp; Implementation</h4><p style="color:var(--mute)">'+p.ov+'</p><h4>Engineering Role &amp; Contributions</h4><p style="color:var(--mute)">'+p.role+'</p><h4>Performance Outcomes &amp; Engineering Value</h4><p style="color:var(--mute)">'+p.out+'</p><div class="btns"><a class="btn pri" href="#">View Repository on GitHub</a><button class="btn" onclick="dlg.close()">Close Blueprint</button></div>';dlg.showModal()};
document.getElementById('filters').onclick=function(e){var f=e.target.dataset.f;if(!f)return;this.querySelectorAll('button').forEach(function(b){b.classList.toggle('on',b===e.target)});render(f)};
// skills
var K={'Languages':[['C++',86],['Dart',80],['JavaScript ES6+',85],['Python',78],['SQL',82]],'Frameworks & Libs':[['React.js',85],['Next.js',80],['Node.js & Express',80],['Flutter',82],['Three.js / WebGL',70]],'Databases & Storage':[['MySQL',80],['PostgreSQL',75],['MongoDB',70],['Firebase Firestore',85]],'Dev Tools & Cloud':[['Git & GitHub',88],['Docker',65],['CI/CD',65],['Figma UI/UX',72]]};
var tb=document.getElementById('stabs'),bs=document.getElementById('sbars');
function sk(n){tb.querySelectorAll('button').forEach(function(b){b.classList.toggle('on',b.textContent===n)});bs.innerHTML=K[n].map(function(s){return'<div class="bar"><div class="r">'+s[0]+'<span>'+s[1]+'%</span></div><i style="--w:'+s[1]+'%"></i></div>'}).join('')}
Object.keys(K).forEach(function(n){var b=document.createElement('button');b.textContent=n;b.onclick=function(){sk(n)};tb.appendChild(b)});sk('Databases & Storage');
// nav highlight
var links=[].slice.call(document.querySelectorAll('#nav a'));
addEventListener('scroll',function(){var cur=links[0];links.forEach(function(a){var s=document.querySelector(a.getAttribute('href'));if(s&&s.getBoundingClientRect().top<200)cur=a});links.forEach(function(a){a.classList.toggle('on',a===cur)})},{passive:true});
