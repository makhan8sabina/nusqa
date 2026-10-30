(function(){
var PI=3;
function r(x){return Math.round(x*100)/100}
function fx(){var s='';for(var i=0;i<arguments.length;i++)s+='<div class="fx">'+arguments[i]+'</div>';return s}
function fa(n){return n<2?1:n*fa(n-1)}
function calc(box,fl,fn){
 var h='<div class="calc">';
 fl.forEach(function(f,i){h+='<label>'+f[0]+(f[4]?'':': <b>'+f[1]+'</b>')+'<input data-i="'+i+'" '+(f[4]?'type="text"':'type="range" min="'+f[2]+'" max="'+f[3]+'"')+' value="'+f[1]+'"></label>'});
 box.innerHTML=h+'<div class="out"></div></div>';
 var ins=box.querySelectorAll('input'),out=box.querySelector('.out');
 function up(){var v=[];ins.forEach(function(x,i){v[i]=fl[i][4]?x.value:+x.value;if(!fl[i][4])x.previousElementSibling.textContent=x.value});out.innerHTML=fn(v)}
 ins.forEach(function(x){x.oninput=up});up();
}
function dig(x){return x<=9?x:x<=99?2*x-9:x<=999?3*x-108:4*x-1107}
function pages(d){return d<=9?d:d<=189?(d+9)/2:d<=2889?(d+108)/3:(d+1107)/4}
function ld(a,n){var x=1;for(var i=0;i<n;i++)x=x*a%10;return x}

var SEC=[
['Сандар жиыны','<p><b>Натурал:</b> 1, 2, 3, … (0 кірмейді) · <b>Бүтін:</b> …, −1, 0, 1, … · <b>Рационал:</b> a/b түрінде жазылатын сан · <b>Иррационал:</b> π, √2 (шексіз, периодсыз бөлшек)</p><p><b>Жұп:</b> 2n · <b>Тақ:</b> 2n+1 · <b>Жай:</b> тек 2 бөлгіші бар (1 және өзі) · <b>Құрама:</b> 2-ден көп бөлгіші бар. <b>1 — жай да, құрама да емес.</b></p><p class="sub">Санды бас — бөлгіштерін көр (қою түс — жай сандар):</p><div class="w"></div>',function(d){
 var w=d.querySelector('.w'),h='<div class="pg"></div><div class="out"></div>';w.innerHTML=h;var g=w.firstChild,o=w.lastChild;
 for(var n=1;n<=100;n++){var dv=[];for(var k=1;k<=n;k++)if(n%k==0)dv.push(k);var b=document.createElement('button');b.textContent=n;if(dv.length==2)b.className='p';b.onclick=(function(n,dv){return function(){o.innerHTML=n+' бөлгіштері: '+dv.join(', ')+' — '+(n==1?'жай да, құрама да емес':dv.length==2?'жай сан':'құрама сан')}})(n,dv);g.appendChild(b)}}],
['Мода, медиана, орта, өзгеріс ауқымы',fx('Мода — ең жиі кездесетін сан','Медиана — өсу ретімен тұрғандағы дәл ортасы (жұп болса, ортадағы екеуінің орташасы)','Орта = қосынды / санның саны','Өзгеріс ауқымы (құлашы) = ең үлкен − ең кіші')+'<div class="w"></div>',function(d){
 calc(d.querySelector('.w'),[['Сандар (үтірмен)','5,3,2,2,4,8',0,0,1]],function(v){
  var a=v[0].split(/[,;\s]+/).map(Number).filter(function(x){return !isNaN(x)&&x!==0||x===0&&false});
  a=v[0].split(/[,;\s]+/).filter(function(x){return x!==''}).map(Number).filter(function(x){return !isNaN(x)});
  if(!a.length)return 'Сандарды жаз';var s=a.slice().sort(function(x,y){return x-y}),c={},m=0;
  a.forEach(function(x){c[x]=(c[x]||0)+1;m=Math.max(m,c[x])});var mo=Object.keys(c).filter(function(k){return c[k]==m});
  var n=s.length,me=n%2?s[(n-1)/2]:(s[n/2-1]+s[n/2])/2,sum=s.reduce(function(x,y){return x+y},0);
  return 'Реттелген: '+s.join(', ')+'<br>Мода: '+mo.join(', ')+'<br>Медиана: '+r(me)+'<br>Орта: '+sum+'/'+n+' = '+r(sum/n)+'<br>Ауқым: '+s[n-1]+' − '+s[0]+' = '+(s[n-1]-s[0])})}],
['Біріккен жұмыс',fx('1/x + 1/y = 1/t &nbsp;⇒&nbsp; t = x·y / (x+y)')+'<p>1-ші жұмысшы жалғыз x уақытта, 2-ші y уақытта бітірсе, бірге t уақытта бітіреді.</p><div class="w"></div>',function(d){
 calc(d.querySelector('.w'),[['x (күн)',6,1,40],['y (күн)',3,1,40]],function(v){var t=v[0]*v[1]/(v[0]+v[1]);return 't = '+v[0]+'·'+v[1]+'/('+v[0]+'+'+v[1]+') = '+r(t)+' күн'})}],
['Пропорция және масштаб',fx('Тура: бір шама артса, екіншісі де артады → айқас көбейту','Кері: бір шама артса, екіншісі кемиді → 1·6 = 2·x','Универсал: ЖҰМЫСШЫ · УАҚЫТ = НӘТИЖЕ','Масштаб = картадағы ұзындық / жердегі ұзындық','1 км = 100 000 см')+'<p>Мысал: 9·8·x = 8·10·72 ⇒ x = 80</p><div class="w"></div>',function(d){
 calc(d.querySelector('.w'),[['Картада (см)',8,1,50],['Жерде (км)',4,1,100]],function(v){return 'Масштаб = '+v[0]+' / '+(v[1]*100000)+' = 1 : '+r(v[1]*100000/v[0])})}],
['Кітап беті',fx('2 таңбалы: x·2 − 9','3 таңбалы: x·3 − 9 − 99','4 таңбалы: x·4 − 9 − 99 − 999','9 < x ≤ 189: (x+9):2','189 < x ≤ 2889: (x+9+99):3','2889 < x ≤ 38889: (x+9+99+999):4')+'<div class="w"></div>',function(d){
 calc(d.querySelector('.w'),[['Кітаптағы бет саны',120,1,1500]],function(v){var D=dig(v[0]);return v[0]+' бет үшін '+D+' цифр кетеді.<br>Кері тексеру: '+D+' цифр → '+pages(D)+' бет'})}],
['Жылдамдық және қозғалыс',fx('S = v·t &nbsp; t = S:v &nbsp; v = S:t','Бір бағытта: v = v₁ − v₂','Қарсы: v = v₁ + v₂','Ағысқа қарсы: v = vқ − vа','Ағыспен: v = vқ + vа')+'<div class="w"></div>',function(d){
 calc(d.querySelector('.w'),[['v₁ / vқ (км/сағ)',60,1,120],['v₂ / vа (км/сағ)',20,1,60]],function(v){return 'Бір бағытта: '+(v[0]-v[1])+' · Қарсы: '+(v[0]+v[1])+'<br>Ағысқа қарсы: '+(v[0]-v[1])+' · Ағыспен: '+(v[0]+v[1])})}],
['Разряд, қысқаша көбейту, Дирихле',fx('ab̄ = 10a + b &nbsp; abc̄ = 100a + 10b + c','(a+b)² = a² + 2ab + b²','(a−b)² = a² − 2ab + b²','(a+b)³ = a³ + 3a²b + 3ab² + b³','(a−b)³ = a³ − 3a²b + 3ab² − b³')+'<p><b>Дирихле:</b> ең сәтсіз жағдайды қарастыр. Әр түстен k−1 алып, +1 қос.</p><div class="w"></div>',function(d){
 calc(d.querySelector('.w'),[['Ақ қалам',3,0,15],['Сары қалам',4,0,15],['Қара қалам',5,0,15],['Бірдей түсті қанша керек (k)',4,2,8]],function(v){var k=v[3],c=v.slice(0,3);if(Math.max.apply(null,c)<k)return 'Бұл мүмкін емес';var s=0;c.forEach(function(x){s+=Math.min(x,k-1)});return 'Ең сәтсіз: '+s+' қалам, +1 ⇒ <b>'+(s+1)+'</b> қалам алу керек'})}],
['Дәреже және соңғы цифр',fx('aⁿ·aᵐ = aⁿ⁺ᵐ &nbsp; aⁿ/aᵐ = aⁿ⁻ᵐ','(aⁿ)ᵐ = aⁿᵐ &nbsp; (ab)ⁿ = aⁿbⁿ','(a/b)ⁿ = aⁿ/bⁿ &nbsp; a⁻ⁿ = 1/aⁿ','(a/b)⁻ⁿ = (b/a)ⁿ')+'<p>1, 5, 6 — кез келген дәрежеде өзгермейді. 4: тақ→4, жұп→6. 9: тақ→9, жұп→1. Цикл ұзындығы — 4.</p><div class="w"></div>',function(d){
 calc(d.querySelector('.w'),[['a',7,1,9],['n (дәреже)',23,1,100]],function(v){var c=[1,2,3,4].map(function(i){return ld(v[0],i)});return v[0]+'^'+v[1]+' соңғы цифры: <b>'+ld(v[0],v[1])+'</b><br>Цикл: '+c.join(' → ')+' → …'})}],
['Арифметикалық прогрессия',fx('aₙ = a₁ + (n−1)d &nbsp; aₙ = aₖ + (n−k)d','Sₙ = (a₁+aₙ)/2 · n','Sₙ = (2a₁+(n−1)d)/2 · n','d = aₙ₊₁ − aₙ')+'<div class="w"></div>',function(d){
 calc(d.querySelector('.w'),[['a₁',2,-10,20],['d',3,-5,10],['n',10,1,30]],function(v){var an=v[0]+(v[2]-1)*v[1],t=[];for(var i=0;i<Math.min(v[2],8);i++)t.push(v[0]+i*v[1]);return t.join(', ')+(v[2]>8?', …':'')+'<br>aₙ = '+an+' · Sₙ = '+(2*v[0]+(v[2]-1)*v[1])*v[2]/2})}],
['Факториал, комбинаторика, ықтималдық',fx('n! = 1·2·…·n &nbsp; P = n!','Реті маңызды емес: Cₘⁿ = m! / ((m−n)!·n!)','Реті маңызды: Aₘⁿ = m! / (m−n)!','P(A) = керек жағдай / жалпы жағдай &nbsp; 0 ≤ P ≤ 1')+'<div class="w"></div><p>Екі сүйек лақтыр: қосындыны таңда, керек жағдайлар боялады.</p><div class="w"></div>',function(d){
 var ws=d.querySelectorAll('.w');
 calc(ws[0],[['m',7,1,12],['n',3,0,12]],function(v){var m=v[0],n=Math.min(v[1],m);return 'n! = '+fa(n)+'<br>C = '+fa(m)/(fa(m-n)*fa(n))+' · A = '+fa(m)/fa(m-n)});
 calc(ws[1],[['Қосынды',7,2,12]],function(v){return '<table class="dice">'+[1,2,3,4,5,6].map(function(i){return '<tr>'+[1,2,3,4,5,6].map(function(j){return '<td'+(i+j==v[0]?' class="h"':'')+'>'+i+';'+j+'</td>'}).join('')+'</tr>'}).join('')+'</table>P = '+(6-Math.abs(v[0]-7))+'/36 = '+r((6-Math.abs(v[0]-7))/36)})}],
['Концентрация, қоспа, жалған монета',fx('m₁·%₁ + m₂·%₂ = (m₁+m₂)·%','Таза зат — 100%, су — 0%','Қатынас 5:3:1 ⇒ 5x+3x+x = жалпы','Жалған монета: 3ᵏ ≥ N ⇒ k өлшеу')+'<div class="w"></div><div class="w"></div>',function(d){
 var ws=d.querySelectorAll('.w');
 calc(ws[0],[['m₁ (г)',120,1,300],['%₁',5,0,100],['m₂ (г)',30,1,300],['%₂',100,0,100]],function(v){return '% = ('+v[0]+'·'+v[1]+' + '+v[2]+'·'+v[3]+')/'+(v[0]+v[2])+' = <b>'+r((v[0]*v[1]+v[2]*v[3])/(v[0]+v[2]))+'%</b>'});
 calc(ws[1],[['Монета саны N',30,2,729]],function(v){var k=0;while(Math.pow(3,k)<v[0])k++;return 'Ең аз өлшеу: <b>'+k+'</b> (3^'+k+' = '+Math.pow(3,k)+')'})}],
['Бұрыштар және сағат',fx('Сүйір 0°<α<90° · Тік 90° · Доғал 90°<α<180°','Жазыңқы 180° · Толық 360°','α = |60·сағат − 11·минут| / 2 (180°-тан артса: 360° − α)')+'<p>Сағат пен минутты жылжыт:</p><div class="w"></div>',function(d){
 calc(d.querySelector('.w'),[['Сағат',12,1,12],['Минут',5,0,59]],function(v){
  function p(L,a){return (100+L*Math.sin(a*Math.PI/180)).toFixed(1)+','+(100-L*Math.cos(a*Math.PI/180)).toFixed(1)}
  var ha=(v[0]%12)*30+v[1]/2,ma=v[1]*6,al=Math.abs(60*v[0]-11*v[1])/2,ex=al>180?' ⇒ 360° − '+al+'° = '+(360-al)+'°':'',t='';
  for(var i=0;i<12;i++)t+='<line x1="'+p(82,i*30).split(',')[0]+'" y1="'+p(82,i*30).split(',')[1]+'" x2="'+p(90,i*30).split(',')[0]+'" y2="'+p(90,i*30).split(',')[1]+'" stroke="currentColor"/>';
  return '<svg class="fm-svg" viewBox="0 0 200 200" style="max-width:220px"><circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" stroke-width="2"/>'+t+'<line x1="100" y1="100" x2="'+p(50,ha).split(',')[0]+'" y2="'+p(50,ha).split(',')[1]+'" stroke="var(--ac)" stroke-width="5" stroke-linecap="round"/><line x1="100" y1="100" x2="'+p(76,ma).split(',')[0]+'" y2="'+p(76,ma).split(',')[1]+'" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>α = |60·'+v[0]+' − 11·'+v[1]+'|/2 = '+al+'°'+ex})}],
['Үшбұрыш және Пифагор',fx('a−b < c < a+b &nbsp; α+β+γ = 180°','c² = a² + b² (c — гипотенуза)','45°-45°: a, a, a√2 &nbsp; 30°-60°: a, a√3, 2a','Герон: S = √(p(p−a)(p−b)(p−c)), p — жарты периметр','S = ½·a·b·sinβ')+'<p>Төбесін сүйреп көр (тік бұрышты үшбұрыш):</p><div class="w"></div><div class="w"></div>',function(d){
 var ws=d.querySelectorAll('.w');
 ws[0].innerHTML='<svg class="drag" viewBox="0 0 300 230"><polygon fill="var(--ac)" fill-opacity=".35" stroke="currentColor" stroke-width="2"/><circle r="12" fill="var(--ac)" style="cursor:grab"/><text font-size="14" fill="currentColor"></text></svg><div class="out"></div>';
 var s=ws[0].firstChild,pg=s.querySelector('polygon'),ci=s.querySelector('circle'),o=ws[0].lastChild,cx=200,cy=60,dn=0;
 function up(){pg.setAttribute('points','40,200 '+cx+',200 '+cx+','+cy);ci.setAttribute('cx',cx);ci.setAttribute('cy',cy);var a=(200-cy)/20,b=(cx-40)/20,c=Math.sqrt(a*a+b*b);o.innerHTML='a = '+r(a)+' · b = '+r(b)+' · c = '+r(c)+'<br>a² + b² = '+r(a*a)+' + '+r(b*b)+' = '+r(a*a+b*b)+' = c²<br>S = ab/2 = '+r(a*b/2)+' · P = '+r(a+b+c)+(Math.abs(a-b)<.1?'<br>a = b ⇒ c = a√2':'')}
 function mv(e){if(!dn)return;var R=s.getBoundingClientRect();cx=Math.max(80,Math.min(280,(e.clientX-R.left)*300/R.width));cy=Math.max(30,Math.min(170,(e.clientY-R.top)*230/R.height));up()}
 s.onpointerdown=function(e){dn=1;s.setPointerCapture(e.pointerId);mv(e)};s.onpointerup=function(){dn=0};s.onpointermove=mv;up();
 calc(ws[1],[['a',5,1,20],['b',6,1,20],['c',7,1,20]],function(v){var a=v[0],b=v[1],c=v[2];if(a+b<=c||a+c<=b||b+c<=a)return 'Үшбұрыш болмайды (a−b<c<a+b бұзылды)';var p=(a+b+c)/2;return 'Герон: p = '+p+', S = '+r(Math.sqrt(p*(p-a)*(p-b)*(p-c)))})}],
['Периметр және аудан (сызба)',fx('Шаршы: P=4a, S=a² · Тіктөртбұрыш: P=2(a+b), S=ab','Үшбұрыш: S=ah/2 · Теңқабырғалы: S=a²√3/4','Шеңбер: C=2πR, S=πR² · Параллелограмм: S=ah','Трапеция: S=(a+b)/2·h · Ромб: S=d₁d₂/2')+'<select></select><div class="w"></div>',function(d){
 var SH={'Шаршы':[['a'],function(v){var a=v[0];return [[[0,0],[a,0],[a,a],[0,a]],'P = 4a = '+4*a+' · S = a² = '+a*a]}],
 'Тіктөртбұрыш':[['a','b'],function(v){var a=v[0],b=v[1];return [[[0,0],[a,0],[a,b],[0,b]],'P = 2(a+b) = '+2*(a+b)+' · S = ab = '+a*b]}],
 'Үшбұрыш':[['a (табан)','h'],function(v){var a=v[0],h=v[1];return [[[0,0],[a,0],[a/2,h]],'S = ah/2 = '+a*h/2]}],
 'Теңқабырғалы үшбұрыш':[['a'],function(v){var a=v[0];return [[[0,0],[a,0],[a/2,a*.866]],'P = 3a = '+3*a+' · S = a²√3/4 = '+r(a*a*1.732/4)]}],
 'Шеңбер':[['R'],function(v){var R=v[0];return [R,'C = 2πR = '+2*PI*R+' · S = πR² = '+PI*R*R]}],
 'Параллелограмм':[['a','h'],function(v){var a=v[0],h=v[1];return [[[0,0],[a,0],[a+h*.4,h],[h*.4,h]],'S = a·h = '+a*h]}],
 'Трапеция':[['a (төмен)','b (жоғары)','h'],function(v){var a=v[0],b=v[1],h=v[2];return [[[0,0],[a,0],[(a+b)/2,h],[(a-b)/2,h]],'S = (a+b)/2·h = '+(a+b)/2*h]}],
 'Ромб':[['d₁','d₂'],function(v){var a=v[0],b=v[1];return [[[a/2,0],[a,b/2],[a/2,b],[0,b/2]],'S = d₁d₂/2 = '+a*b/2]}]};
 var sel=d.querySelector('select'),w=d.querySelector('.w');
 Object.keys(SH).forEach(function(k){sel.innerHTML+='<option>'+k+'</option>'});
 function bld(){var s=SH[sel.value];calc(w,s[0].map(function(n){return [n,6,1,14]}),function(v){
  var x=s[1](v),svg;if(typeof x[0]=='number'){var k=min(80/x[0]);svg='<circle cx="150" cy="105" r="'+x[0]*k+'" fill="var(--ac)" fill-opacity=".4" stroke="currentColor" stroke-width="2"/><line x1="150" y1="105" x2="'+(150+x[0]*k)+'" y2="105" stroke="currentColor"/>'}
  else{var P=x[0],xs=P.map(function(p){return p[0]}),ys=P.map(function(p){return p[1]}),x0=Math.min.apply(null,xs),y0=Math.min.apply(null,ys),W=Math.max.apply(null,xs)-x0,H=Math.max.apply(null,ys)-y0,k=Math.min(260/W,180/H);
   svg='<polygon points="'+P.map(function(p){return (20+(p[0]-x0)*k)+','+(200-(p[1]-y0)*k)}).join(' ')+'" fill="var(--ac)" fill-opacity=".4" stroke="currentColor" stroke-width="2"/>'}
  return '<svg class="fm-svg" viewBox="0 0 300 220">'+svg+'</svg>'+x[1]})}
 function min(a){return a}
 sel.onchange=bld;bld()}],
['Стереометрия (3D)',fx('Куб: V=a³, Sт.б=6a² · Параллелепипед: V=abc, Sт.б=2(ab+bc+ac)','Цилиндр: V=πR²h, Sб.б=2πRh · Конус: V=πR²h/3, Sб.б=πRl','Шар: V=4/3·πR³, S=4πR² · Пирамида: V=S·h/3, Sб.б=P·l/2')+'<p>Фигураны айналдыр, өлшемін өзгерт:</p><select></select><div class="viewer"><canvas width="680" height="480" style="width:100%;max-width:340px;height:240px;touch-action:none;cursor:grab"></canvas><div class="vb"><button data-v="0,0">Алдынан</button><button data-v="1.5708,0">Үстінен</button><button data-v="0,-1.5708">Жағынан</button><button data-v="0.5,-0.6">Еркін</button></div></div><div class="w"></div>',function(d){
 var S3={'Куб':[['a'],function(v){return new THREE.BoxGeometry(v[0],v[0],v[0])},function(v){var a=v[0];return 'V = '+a*a*a+' · Sб.б = '+4*a*a+' · Sт.б = '+6*a*a}],
 'Параллелепипед':[['a','b','c'],function(v){return new THREE.BoxGeometry(v[0],v[2],v[1])},function(v){var a=v[0],b=v[1],c=v[2];return 'V = '+a*b*c+' · Sб.б = '+2*c*(a+b)+' · Sт.б = '+2*(a*b+b*c+a*c)}],
 'Цилиндр':[['R','h'],function(v){return new THREE.CylinderGeometry(v[0],v[0],v[1],40)},function(v){var R=v[0],h=v[1];return 'V = πR²h = '+PI*R*R*h+' · Sб.б = '+2*PI*R*h+' · Sт.б = '+(2*PI*R*h+2*PI*R*R)}],
 'Конус':[['R','h'],function(v){return new THREE.ConeGeometry(v[0],v[1],40)},function(v){var R=v[0],h=v[1],l=Math.sqrt(R*R+h*h);return 'l = '+r(l)+' · V = '+r(PI*R*R*h/3)+' · Sб.б = πRl = '+r(PI*R*l)+' · Sт.б = '+r(PI*R*l+PI*R*R)}],
 'Шар':[['R'],function(v){return new THREE.SphereGeometry(v[0],32,20)},function(v){var R=v[0];return 'V = 4/3·πR³ = '+r(4/3*PI*R*R*R)+' · S = 4πR² = '+4*PI*R*R}],
 'Пирамида (төртбұрышты)':[['a (табан)','h'],function(v){var g=new THREE.ConeGeometry(v[0]/Math.SQRT2,v[1],4);g.rotateY(Math.PI/4);return g},function(v){var a=v[0],h=v[1],l=Math.sqrt(h*h+a*a/4);return 'l = '+r(l)+' · V = '+r(a*a*h/3)+' · Sб.б = '+r(2*a*l)+' · Sт.б = '+r(2*a*l+a*a)}]};
 var sel=d.querySelector('select'),w=d.querySelector('.w'),cv=d.querySelector('canvas');
 Object.keys(S3).forEach(function(k){sel.innerHTML+='<option>'+k+'</option>'});
 var rd=new THREE.WebGLRenderer({canvas:cv,antialias:true,alpha:true});rd.setSize(340,240,false);
 var sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(40,340/240,.1,100);cam.position.z=24;
 sc.add(new THREE.AmbientLight(0xffffff,.75));var dl=new THREE.DirectionalLight(0xffffff,.6);dl.position.set(5,10,12);sc.add(dl);
 var g=new THREE.Group();sc.add(g);g.rotation.set(.5,-.6,0);
 function draw(){rd.render(sc,cam)}
 function set(v){var s=S3[sel.value];while(g.children.length)g.remove(g.children[0]);var geo=s[1](v);geo.computeBoundingBox();var b=geo.boundingBox,m=Math.max(b.max.x-b.min.x,b.max.y-b.min.y,b.max.z-b.min.z);
  var o=new THREE.Group();o.add(new THREE.Mesh(geo,new THREE.MeshLambertMaterial({color:0x8e6cf0,transparent:true,opacity:.88})));o.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo,30),new THREE.LineBasicMaterial({color:0x2a1f55})));o.scale.setScalar(13/m);g.add(o);draw();return s[2](v)}
 function bld(){calc(w,S3[sel.value][0].map(function(n){return [n,5,1,12]}),set)}
 sel.onchange=bld;bld();
 var dn=false,px=0,py=0;cv.onpointerdown=function(e){dn=true;px=e.clientX;py=e.clientY;cv.setPointerCapture(e.pointerId)};cv.onpointerup=function(){dn=false};
 cv.onpointermove=function(e){if(!dn)return;g.rotation.y+=(e.clientX-px)*.01;g.rotation.x+=(e.clientY-py)*.01;px=e.clientX;py=e.clientY;draw()};
 d.querySelectorAll('.vb button').forEach(function(b){b.onclick=function(){var q=b.dataset.v.split(',');g.rotation.set(+q[0],+q[1],0);draw()}});
 d.ontoggle=draw}],
['Кубты бояу',fx('0 жағы боялған: (n−2)³','1 жағы: 6(n−2)²','2 жағы: 12(n−2)','3 жағы: 8')+'<p>n×n×n кубты бояп, 1×1×1 текшелерге бөлдік:</p><div class="w"></div>',function(d){
 calc(d.querySelector('.w'),[['n',3,2,10]],function(v){var n=v[0];return '0: '+Math.pow(n-2,3)+' · 1: '+6*Math.pow(n-2,2)+' · 2: '+12*(n-2)+' · 3: 8<br>Барлығы: '+n+'³ = '+n*n*n})}],
['Өлшем бірліктері',fx('1 см = 10 мм · 1 дм = 10 см · 1 м = 100 см','1 км = 1000 м = 100 000 см','1 м² = 10 000 см² · 1 км² = 1 000 000 м²','1 т = 1000 кг · 1 кг = 1000 г','1 м³ = 1000 л · 1 л = 1000 см³'),null]
];
window.showFm=function(){
 var m=document.getElementById('fm');document.getElementById('home').classList.add('hide');m.classList.remove('hide');
 if(!m.dataset.b){m.dataset.b=1;
  var h='<button class="btn alt" onclick="goHome()">← Басты бет</button><h1>📐 Формулалар</h1><p class="sub">Бөлімді аш. Сызбаларды жылжытып, сандарды өзгертіп көр! (π = 3)</p>';
  SEC.forEach(function(s,i){h+='<details class="card" id="s'+i+'"><summary><b>'+(i+1)+'. '+s[0]+'</b></summary>'+s[1]+'</details>'});
  m.innerHTML=h;SEC.forEach(function(s,i){if(s[2])s[2](m.querySelector('#s'+i))})}
 scrollTo(0,0)};
})();
