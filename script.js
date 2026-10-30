// a = дұрыс жауап индексі (null = суретті мұғалім қояды), img = суретті жүктеу орны
var DATA = {
1:{title:"1-нұсқа", qs:[
{t:"Бір қалада 150 мың адам бар. Олардың 40%-ында автокөлік бар. Бір автокөлік жылына 15 мың км жол жүреді. Егер әр көлік 100 км-ге 8 л жанармай қолданса, барлық машина бір жылда неше литр жанармай тұтынады?",
 o:["84 000 000 л","78 000 000 л","75 000 000 л","72 000 000 л"],a:3,
 s:"Көлік саны: 150 000 · 0,4 = 60 000\nЖалпы жол: 60 000 · 15 000 = 900 000 000 км\nЖанармай: 900 000 000 / 100 · 8 = 72 000 000 л"},
{t:"Аружан 15 жаста. Әкесі 42 жаста. Әкесі неше жылдан кейін Аружаннан екі есе үлкен болады?",
 o:["12","13","14","15"],a:0,
 s:"x жылдан кейін: 42 + x = 2 · (15 + x)\n42 + x = 30 + 2x  =>  x = 12"},
{t:"32<sup>23</sup> + 23<sup>32</sup> саны қандай цифрмен аяқталады?",o:["4","6","7","9"],a:3,s:"Соңғы цифрлар: 2^n циклі (2,4,8,6), 23 mod 4 = 3 => 2^23 соңы 8\n3^n циклі (3,9,7,1), 32 mod 4 = 0 => 3^32 соңы 1\n8 + 1 = 9"},
{t:"Қорапта 6 ақ және 9 қара түйме жатыр. Қораптағы кездейсоқ алынған екі түйменің біріншісі ақ түсті, екіншісі қара түсті болу ықтималдығы қандай?",
 o:["8/35","9/35","8/25","9/5"],a:1,
 s:"Барлығы 6 + 9 = 15 түйме\nP = 6/15 · 9/14 = 54/210 = 9/35"},
{t:"Жәшікте 14 сары, 8 қызыл және 11 қара түсті қаламдар жатыр. Жәшікке қарамастан ең кемінде неше қалам алынса, олардың арасында бірдей түсті төрт қалам міндетті түрде табылады?",
 o:["13","12","11","10"],a:3,
 s:"Дирихле принципі: ең жаман жағдай — әр түстен 3-тен алу\n3 · 3 = 9 қалам, ал 9 + 1 = 10 қалам алғанда 4 бірдей түс міндетті"},
{t:"Бір топтағы туристтердің 23-і қазақ тілін біледі, ағылшын тілін 12, ал 4-еуі екі тілді де біледі. Топта жалпы неше турист бар?",
 o:["31","33","34","36"],a:0,
 s:"Қосу–алу формуласы: |A ∪ B| = |A| + |B| − |A ∩ B|\n= 23 + 12 − 4 = 31"},
{t:"Сұрақ белгісінің орнына сәйкес келетін санды табыңыз:<br><b>−3,&nbsp; 6,&nbsp; 3,&nbsp; 9,&nbsp; 12,&nbsp; ?</b>",o:["21","18","15","24"],a:0,s:"Әр сан алдыңғы екеуінің қосындысы:\n−3 + 6 = 3; 6 + 3 = 9; 3 + 9 = 12\n? = 9 + 12 = 21"},
{t:"2024 санынан бастап 9999 санына дейінгі тізбектес сандар бірінен соң бірі тіркеліп жатыр. Осы 2024202520262027… санындағы 51-ші орындағы цифрды табыңыз.",
 o:["0","5","4","3"],a:3,
 s:"Әр сан 4 цифрлы. 51 = 12 · 4 + 3\n13-ші сан: 2024 + 12 = 2036\nОның 3-ші цифры — 3"},
{t:"Конустың биіктігі 8 см, ал көлемі 288 см³. Конустың радиусын 3 есе арттырса, көлемі нешеге тең болады? (π = 3)",
 o:["1728 см³","864 см³","2592 см³","3456 см³"],a:2,fig:"cone",
 s:"V = (1/3) · π · r² · h\n288 = (1/3) · 3 · r² · 8  =>  r² = 36, r = 6\nЖаңа r = 18: V = (1/3) · 3 · 18² · 8 = 2592 см³\n(Радиус 3 есе => көлем 3² = 9 есе: 288 · 9 = 2592)"},
{t:"Боялған бөліктің ауданын табыңыз. (π = 3)",svg:'<svg viewBox="0 0 260 260" width="260" role="img" aria-label="Шеңбер мен шаршы"><circle cx="130" cy="130" r="110" fill="var(--ac)" fill-opacity=".6" stroke="currentColor"/><polygon points="130,20 240,130 130,240 20,130" fill="var(--card)" stroke="currentColor" stroke-width="2"/><line x1="20" y1="130" x2="240" y2="130" stroke="currentColor"/><line x1="130" y1="20" x2="130" y2="240" stroke="currentColor"/><text x="170" y="122" font-size="18" fill="currentColor" font-weight="700">R=6</text></svg>',o:["28 см²","36 см²","42 см²","48 см²"],a:1,s:"Шеңбер ауданы: S = π · R² = 3 · 36 = 108\nШаршының диагоналі = 2R = 12: S = d² / 2 = 144 / 2 = 72\nБоялған бөлік: 108 − 72 = 36 см²"}
]},
2:{title:"2-нұсқа", qs:[
{t:"Қайрат есіктерді бояғанда келесі реттілікті қолданады: жасыл, сары, қызыл, қызыл, сары, көк. 75-ші есіктің түсін анықтаңыз.",
 o:["сары","қызыл","жасыл","көк"],a:1,
 s:"Период = 6 есік\n75 = 12 · 6 + 3  =>  қалдық 3\n3-ші түс — қызыл"},
{t:"Кез келген m натурал саны үшін, төмендегі сандардың ішінен жұп санды анықтаңыз.",
 o:["m^6 + m^4 + 5","2m^3 + 3m^2","2m^3 + 3","m^4 − m^3 + 2"],a:3,
 s:"m^4 − m^3 + 2 = m^3 · (m − 1) + 2\nm және m − 1 көршілес сандар, біреуі міндетті жұп => m^3(m − 1) жұп => жұп + 2 = жұп\nБасқалары: m = 1 болғанда 7, 5, 5 — тақ"},
{t:"Масштабы 1:10 000 000 картада Астана мен Алматы арасы 13 см. Осы арақашықтықтың масштабы 1:65 000 000 картада қанша болады?",
 o:["13 см","10 см","3 см","2 см"],a:3,
 s:"Нақты қашықтық: 13 · 10 000 000 = 130 000 000 см\nЖаңа картада: 130 000 000 / 65 000 000 = 2 см"},
{t:"Сөмкеде 1-ден 27-ге дейін нөмірленген жетондар бар. Сөмкеден кездейсоқ таңдалған бір жетон нөмірінің 5-ке еселі немесе жұп сан болу ықтималдығы қандай?",
 o:["17/27","15/27","16/27","14/27"],a:2,
 s:"5-ке еселі: 5 (5,10,15,20,25); жұп: 13; екеуі де: 10, 20 => 2\n|A ∪ B| = 5 + 13 − 2 = 16\nP = 16/27"},
{t:"А жиынында 32 әріп бар. В жиыны — 29, С жиыны — 28. А және В жиындарында 12 әріп бар, В және С жиындары — 14, А және С жиындары — 11. А, В және С жиындарында 4 әріп бар. Әрбір әріп кем дегенде бір жиында бар. Тек қана екі жиынға қатысты неше әріп бар?",
 o:["25","24","23","22"],a:0,
 s:"Тек А және В: 12 − 4 = 8\nТек В және С: 14 − 4 = 10\nТек А және С: 11 − 4 = 7\nЖиыны: 8 + 10 + 7 = 25"},
{t:"Төмендегі заңдылықты анықтап, сұрақ белгісінің орнына сәйкес келетін санды табыңыз.",svg:'<svg viewBox="0 0 480 155" width="100%" style="max-width:480px" role="img" aria-label="Үш үшбұрыш"><polygon points="80,15 145,125 15,125" fill="var(--ac)" fill-opacity=".6" stroke="currentColor"/><text x="32" y="45" font-size="18" fill="currentColor" text-anchor="middle">4</text><text x="132" y="45" font-size="18" fill="currentColor" text-anchor="middle">14</text><text x="80" y="90" font-size="20" font-weight="700" fill="currentColor" text-anchor="middle">2</text><text x="80" y="148" font-size="18" fill="currentColor" text-anchor="middle">9</text><polygon points="235,15 300,125 170,125" fill="var(--ac)" fill-opacity=".6" stroke="currentColor"/><text x="187" y="45" font-size="18" fill="currentColor" text-anchor="middle">17</text><text x="287" y="45" font-size="18" fill="currentColor" text-anchor="middle">23</text><text x="235" y="90" font-size="20" font-weight="700" fill="currentColor" text-anchor="middle">5</text><text x="235" y="148" font-size="18" fill="currentColor" text-anchor="middle">8</text><polygon points="390,15 455,125 325,125" fill="var(--ac)" fill-opacity=".6" stroke="currentColor"/><text x="342" y="45" font-size="18" fill="currentColor" text-anchor="middle">26</text><text x="442" y="45" font-size="18" fill="currentColor" text-anchor="middle">16</text><text x="390" y="90" font-size="20" font-weight="700" fill="currentColor" text-anchor="middle">6</text><text x="390" y="148" font-size="18" fill="currentColor" text-anchor="middle">?</text></svg>',o:["7","6","8","5"],a:0,s:"Бүйір сандарының қосындысын ортасындағы санға бөлеміз:\n(4 + 14) / 2 = 9; (17 + 23) / 5 = 8\n(26 + 16) / 6 = 7"},
{t:"Жүгіруге барлығы 46 спортшы қатысты. Арманнан озып келген спортшылар саны одан кеш келген спортшылар санынан 4 есе аз. Арман нешінші орынды иеленді?",
 o:["12","14","16","10"],a:3,
 s:"Озғандар = x, кешкендер = 4x, Арман = 1\nx + 4x + 1 = 46  =>  5x = 45, x = 9\nАрманның орны: 9 + 1 = 10"},
{t:"Өлшемі 8 см × 12 см × 14 см тік бұрышты параллелепипед пішінді блок құрастыруға тапсырыс алған компания қателесіп, өлшемі 8 см × 14 см × 15 см блок дайындаған. Дайын болған блоктың көлемі жоспардағы блоктың көлемінен неше пайызға артық?",
 o:["20","25","40","50"],a:1,fig:"boxes",
 s:"V = a · b · c\nЖоспар: 8 · 12 · 14 = 1344 см³\nШыққан: 8 · 14 · 15 = 1680 см³\n(1680 − 1344) / 1344 · 100% = 336/1344 · 100% = 25%"},
{t:"Суретте берілген фигураның ауданын табыңыз.",svg:'<svg viewBox="0 0 340 235" width="100%" style="max-width:340px" role="img" aria-label="Фигура"><polygon points="50,30 130,30 130,90 270,90 270,190 50,190" fill="var(--card)" stroke="currentColor" stroke-width="3"/><g font-size="15" fill="currentColor"><text x="8" y="115">16 см</text><text x="185" y="80">14 см</text><text x="278" y="145">10 см</text><text x="140" y="212">22 см</text></g></svg>',o:["274 см²","268 см²","264 см²","260 см²"],a:1,s:"Төменгі тіктөртбұрыш: 22 · 10 = 220\nЖоғарғы бөлік: ені 22 − 14 = 8, биіктігі 16 − 10 = 6 => 8 · 6 = 48\nS = 220 + 48 = 268 см²"},
{t:"360 санының әртүрлі бөлгіштер санын табыңыз.",
 o:["22","28","26","24"],a:3,
 s:"360 = 2^3 · 3^2 · 5^1\nБөлгіштер саны: (3 + 1)(2 + 1)(1 + 1) = 4 · 3 · 2 = 24"}
]}};

var FORMULAS = [
 ["Қосу–алу (жиындар)","|A ∪ B| = |A| + |B| − |A ∩ B|"],
 ["Ықтималдық","P = қолайлы жағдай / барлық жағдай; тәуелді оқиға: P = P1 · P2"],
 ["Дирихле принципі","k түс, әрқайсысынан n-нен алсақ, (k · (n − 1) + 1) қалам керек"],
 ["Конус көлемі","V = (1/3) · π · r² · h;  r k есе өссе, V k² есе өседі"],
 ["Параллелепипед көлемі","V = a · b · c"],
 ["Пайыздық артылу","(V2 − V1) / V1 · 100%"],
 ["Бөлгіш саны","n = p1^a · p2^b · …  =>  (a + 1)(b + 1)…"],
 ["Масштаб","нақты = карта · масштаб белгісі; жаңа карта = нақты / жаңа масштаб"]
];

var cur = 0, viewers = [];
function $(i){return document.getElementById(i)}

function start(v){
  cur = v;
  var d = DATA[v], h = '';
  h += '<button class="btn alt" onclick="goHome()">← Басты бет</button>';
  h += '<h1>'+d.title+'</h1>';
  h += '<div class="card"><label>Аты-жөнің *<br><input class="name" id="nm" placeholder="Аты-жөніңді жаз"></label></div>';
  d.qs.forEach(function(q,i){
    h += '<div class="card q"><h3>'+(i+1)+'. '+q.t+'</h3>';
    if(q.svg){ h += '<div class="viewer">'+q.svg+'</div>'; }
    if(q.fig){ h += '<div class="viewer" id="vw'+i+'"></div>'; }
    q.o.forEach(function(o,j){
      h += '<label class="opt"><input type="radio" name="q'+i+'" value="'+j+'">'+o+'</label>';
    });
    h += '</div>';
  });
  h += '<button class="btn" onclick="check()">Жауаптарды тексеру</button>';
  h += '<div id="out"></div>';
  $('quiz').innerHTML = h;
  $('home').classList.add('hide'); $('quiz').classList.remove('hide');
  window.scrollTo(0,0);
  viewers = [];
  d.qs.forEach(function(q,i){ if(q.fig) mkViewer($('vw'+i), q.fig); });
}
function goHome(){
  $('quiz').classList.add('hide'); $('fm').classList.add('hide'); $('home').classList.remove('hide'); window.scrollTo(0,0);
}
function _unused(inp){
  var f = inp.files[0]; if(!f) return;
  var r = new FileReader();
  r.onload = function(){ inp.nextElementSibling.innerHTML = '<img alt="сурет" src="'+r.result+'">'; };
  r.readAsDataURL(f);
}

// ---- 3D көрсеткіш (үш өлшемді фигуралар) ----
function mkViewer(el, kind){
  var W = 340, H = 240;
  var cap = kind==='cone'
    ? 'Конус: биіктігі h = 8 см, радиусы r = 6 см (V = 288 см³)'
    : 'Сол жақта — жоспар: 8 × 12 × 14 см; оң жақта — шыққан: 8 × 14 × 15 см';
  el.innerHTML = '<canvas width="'+W*2+'" height="'+H*2+'"></canvas>'+
    '<div class="vb"><button data-v="front">Алдынан</button><button data-v="top">Үстінен</button><button data-v="side">Жағынан</button><button data-v="iso">Еркін</button></div>'+
    '<div class="cap">'+cap+'<br>Тінтуірмен немесе саусақпен бұра</div>';
  var cv = el.querySelector('canvas');
  var renderer = new THREE.WebGLRenderer({canvas:cv,antialias:true,alpha:true});
  renderer.setSize(W,H,false);
  var scene = new THREE.Scene();
  var cam = new THREE.PerspectiveCamera(40,W/H,0.1,100);
  cam.position.set(0,0,kind==='cone'?22:34);
  scene.add(new THREE.AmbientLight(0xffffff,0.75));
  var dl = new THREE.DirectionalLight(0xffffff,0.6); dl.position.set(5,10,12); scene.add(dl);
  var g = new THREE.Group(); scene.add(g);
  function solid(geo,color,x){
    var m = new THREE.Mesh(geo,new THREE.MeshLambertMaterial({color:color,transparent:true,opacity:0.88}));
    var e = new THREE.LineSegments(new THREE.EdgesGeometry(geo),new THREE.LineBasicMaterial({color:0x2a1f55}));
    var o = new THREE.Group(); o.add(m); o.add(e); o.position.x = x||0; g.add(o); return o;
  }
  if(kind==='cone'){ solid(new THREE.ConeGeometry(6,8,40),0x8e6cf0,0); }
  else {
    var k = 0.55; // масштаб
    solid(new THREE.BoxGeometry(8*k,12*k,14*k),0x4fb286,-5.2);
    solid(new THREE.BoxGeometry(8*k,14*k,15*k),0xf08a4b,5.2);
  }
  g.rotation.set(0.5,-0.6,0);
  function draw(){ renderer.render(scene,cam); }
  draw();
  var down=false,px=0,py=0;
  cv.addEventListener('pointerdown',function(e){down=true;px=e.clientX;py=e.clientY;cv.setPointerCapture(e.pointerId)});
  cv.addEventListener('pointerup',function(){down=false});
  cv.addEventListener('pointermove',function(e){
    if(!down) return;
    g.rotation.y += (e.clientX-px)*0.01; g.rotation.x += (e.clientY-py)*0.01;
    px=e.clientX; py=e.clientY; draw();
  });
  var views = {front:[0,0],top:[Math.PI/2,0],side:[0,-Math.PI/2],iso:[0.5,-0.6]};
  el.querySelectorAll('button').forEach(function(b){
    b.onclick = function(){ var v = views[b.dataset.v]; g.rotation.set(v[0],v[1],0); draw(); };
  });
}

// ---- Тексеру, қатемен жұмыс ----
function check(){
  var d = DATA[cur], ok = 0, tot = 0, wrong = [], h = '';
  var nm = $('nm').value.trim();
  d.qs.forEach(function(q,i){
    var sel = document.querySelector('input[name="q'+i+'"]:checked');
    var ans = sel ? +sel.value : null;
    var cls, mark;
    if(q.a===null){ cls='res-na'; mark='Жауап кілті жоқ (сурет бойынша)'; }
    else {
      tot++;
      if(ans===q.a){ ok++; cls='res-ok'; mark='✓ Дұрыс'; }
      else { cls='res-bad'; mark='✗ Қате'; wrong.push(i); }
    }
    h += '<div class="res '+cls+'"><b>'+(i+1)+'.</b> '+mark+'<br>'+
      '<span class="sub">Сенің жауабың: '+(ans===null?'жауап берілмеді':q.o[ans])+'</span>'+
      (q.a!==null?'<br>Дұрыс жауап: <b>'+q.o[q.a]+'</b>':'')+'</div>';
  });
  var out = '<div class="card"><h2>Нәтиже'+(nm?', '+nm:'')+'</h2><div class="score">'+ok+' / '+tot+'</div>'+
    '<p class="sub">Дұрыс жауаптар тек осы жерде көрсетіледі.</p>'+h+'</div>';

  out += '<div class="card"><h2>Қатемен жұмыс</h2>';
  if(wrong.length){
    wrong.forEach(function(i){
      var q = d.qs[i];
      out += '<div class="res res-bad"><b>'+(i+1)+'-тапсырма.</b> '+q.t+'<div class="sol">'+q.s+'</div></div>';
    });
  } else {
    out += '<p>Қате жоқ! Әйтсе де, барлық есептің шешімін қарап шық:</p>';
    d.qs.forEach(function(q,i){ if(q.s) out += '<details><summary>'+(i+1)+'-тапсырма</summary><div class="sol">'+q.s+'</div></details>'; });
  }
  out += '<h3>Негізгі формулалар</h3><div class="scroll"><table>';
  FORMULAS.forEach(function(f){ out += '<tr><td><b>'+f[0]+'</b></td><td>'+f[1]+'</td></tr>'; });
  out += '</table></div></div>';

  out += '<div class="final">Жарайсың! Сабина апайың сенімен мақтанады🫶🏻<br>juz40-пен 140-қа</div>';
  $('out').innerHTML = out;
  $('out').scrollIntoView({behavior:'smooth'});
}
