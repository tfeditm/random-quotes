///\\\\\\\\\\\o//////////////

//THE BACKGROUND

var c = document.getElementById('my-canvas');
var ctx = c.getContext('2d');

cw = c.width = window.innerWidth;
ch = c.height = window.innerHeight;

var x = 20;//center of the circle
var y = 20;//center of the circle
var z = 10;//stroke width

var repeatW = cw / x * 2;
var repeatH = ch / y * 2;

var startAngle = 0;
var endAngle = Math.PI*2;
var anticlockwise = true;

var bgArc = function arc() {
  ctx.clearRect(0, 0, c.width, c.height);
  for(var i=0; i<repeatW; i++) {
    for(var j=0; j<repeatH; j++) {
      ctx.beginPath();
      ctx.arc(i*2*x+i*z, j*2*y+j*z, x, startAngle, endAngle, anticlockwise);
      ctx.lineWidth = z;
      ctx.strokeStyle = "rgba(100," + Math.floor(Math.random() * (256)) + ",100," + Math.random() + ")";
      ctx.stroke();
      if(i===Math.floor(Math.random() * repeatW) ||
        j===Math.floor(Math.random() * repeatH)){
        ctx.fillStyle = "rgba(50,50,50,1)";
        ctx.fill();
      }
      /*ctx.fillStyle = ctx.strokeStyle;*/
      /*ctx.fill();*/
      ctx.closePath();
    }
  }
}

bgArc();

document.body.style.background = 'url(' + c.toDataURL() + ')';


///\\\\\\\\\\\o//////////////

//QUOTES ARRAY

var quotesArr = [
  ["Mert nem a félelem lelkét adta nekünk Isten, hanem az erő, a szeretet és a józanság lelkét.", "2 Tim. 1.7"],
  ["Ne próbáld! Tedd, vagy ne tedd, de ne próbáld!", "Yoda"],
  ["Mindenki egy zseni. De ha egy halat az alapján ítélsz meg, hogy milyenek a képességei a fáramászáshoz, abban a hitben élheti le egész életét, hogy hülye.", "Albert Einstein"],
  ["Ehess, ihass, ölelhess, alhass!<br>A mindenséggel mérd magad!<br>Te sziszegve se szolgálj aljas,<br>nyomorító hatalmakat!", "József Attila"],
  ["Jaj, jól hallottam-e? Van-e olyan vakmerő valaki, aki e végső világhervadásban e kikelet-igét, e kikelet-igét merte kimondani: \"Boldog vagyok\" -?", "Reményik Sándor"],
  ["Ne bánkódj ha gondjaid vannak a matematikával, biztosíthatlak, az enyémek sokkal nagyobbak.", "Albert Einstein"],
  ["Kell ez nagyon, igen nagyon,<br>napkeleten, napnyugaton –<br>ha már elpusztul a világ,<br>legyen a sírjára virág.", "József Attila"],
  ["Ha én kapu volnék, mindig nyitva állnék<br>Akárhonnan jönne, bárkit beengednék<br>Nem kérdezném tőle, hát téged ki küldött<br>Akkor lennék boldog ha mindenki eljött", "Bródy János"],
  ["Ha én rózsa volnék, nem csak egyszer nyílnék<br>Minden évben négyszer virágba borulnék<br>Nyílnék a fiúnak, nyílnék én a lánynak<br>Az igaz szerelemnek és az elmúlásnak", "Bródy János"],
  ["Ha én ablak volnék akkora nagy lennék<br>Hogy az egész világ láthatóvá váljék,<br>Megértő szemekkel átnéznének rajtam,<br>Akkor lennék boldog, ha mindent megmutattam", "Bródy János"],
  ["Ha én utca volnék, mindig tiszta lennék<br>Minden áldott este fényben megfürödnék<br>És ha engem egyszer lánckerék taposna,<br>Alattam a föld is sírva beomolna", "Bródy János"],
  ["Ha én zászló volnék soha sem lobognék,<br>Mindenféle szélnek haragosa volnék<br>Akkor lennék boldog, ha kifeszítenének<br>S nem lennék játéka mindenféle szélnek", "Bródy János"],
  ["A dzsungelben minden ehető... Te is!", "Kipling"],
  ["Csak az tudja, hogy meddig mentünk, aki azt látta, hogy honnan indultunk el.", "Jókai Mór"],
  ["Az őrültség nem más, mint ugyanazt tenni újra és újra, és várni, hogy az eredmény más legyen.", "Albert Einstein"],
  ["Sohasem fogsz eljutni a célodig, ha folyton megállsz, hogy megdobálj kövekkel minden egyes kutyát, amelyik megugat.", "Churchill"],
  ["Legyőztünk ezernyi régi gátlást,<br>Annyi minden legyőztünk, de főleg egymást,<br>És tiszteltük az ősök énekét.", "Sztevanovity Dusán"],
  ["Beszéltünk magányról, küldetésről,<br>Jeleket szűrtünk ki csillagfényből,<br>Hogy elfedjük a közvetlen veszélyt.", "Sztevanovity Dusán"],
  ["Kell ott fenn egy ország<br>Mely bárkit átölel<br>Kell ott fenn egy ország<br>Amit sosem rontunk el", "Sztevanovity Dusán"],
];


///\\\\\\\\\\\o//////////////

//TWEET AND QUOTES BUTTONS

var quotesCounter = quotesArr.length;

var $quoteP = $(".quote p");
var $quoteF = $(".quote footer");

var $twitterUrl = $(".twitter").attr("href");

function randomQuote() {
  var random = Math.floor(Math.random() * quotesCounter);
  $quoteP.html(quotesArr[random][0]);
  $quoteF.html(quotesArr[random][1]);
  var newTwitterUrl = $twitterUrl + "?hashtags=quotes" + "&text=\"" + $quoteP.html() + "\"" + " - " + $quoteF.html() + "&related=freecodecamp";
  $(".twitter").attr("href", newTwitterUrl);
}

randomQuote();

function animateArc() {
  bgArc();
  document.body.style.background = 'url(' + c.toDataURL() + ')';
}

$(".new-quote").on("click", randomQuote).on("mouseenter", animateArc);