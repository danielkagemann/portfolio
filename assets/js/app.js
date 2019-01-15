

var message = [
   'Hallo, mein Name ist <strong>Daniel Kagemann</strong> und ich bin Software Entwickler.',
   '<strong>Frontend/mobile</strong> Entwicklung, sowie <em>UI/UX</em> Design.',
   '<em>Apple fanboy</em>. Comicnerd. <strong>Vater</strong>',
   'Ich bin über verschiedene Wege erreichbar. <br/>Codebeispiele kannst Du bei <a href="https://github.com/danielkagemann">github</a> und <a href="https://codepen.io/danielkagemann">codepen</a> sehen',
   'oder schau in mein Profil bei <a href="https://www.xing.com/profile/Daniel_Kagemann">xing</a>. ',
   'Private Projekte<br/><a href="http://hallo-ich-bin-epi.de/">Hallo, ich bin Epi. <img src="assets/epi.png" alt=""></a><br/>und<br/><a href="http://hospineo.de/">Hospineo</a>',
   'Natürlich auch per Email <a mailto:info@danielkagemann.name">info@danielkagemann.name</a>',
   'Das ging alles zu schnell ? Keine Sorge. Ist eine Endlosschleife 😉'
];
var delay = [3000,3000,3000,3000,3000,3000,3000,2000];
var mainIndex = -1;
var animator = null;

function next() {
   mainIndex++;
   if (mainIndex >= message.length) {
      mainIndex = 0;
   }
   var msg = message[mainIndex];

   animator = new Typer('.page', {
      text: msg,
      errors: Math.random() * 10,
      speed: 25,
      finish: function () {
         setTimeout(function() {
            RemoveType('.page', {speed: 20, finish: next})
         }, delay[mainIndex]);
      }
   });
}

next();

