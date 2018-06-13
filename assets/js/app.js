function Profile() {
   this.content = document.querySelector(".content");

   /**
    * create new prompt on container
    */
   this.newPrompt = function (id) {
      var prompt = document.createElement("div");
      prompt.setAttribute("id", id);
      prompt.setAttribute("class", "prompt");

      this.content.append(prompt);
   };
   /**
    * create new answer on container
    */
   this.newAnswer = function (text) {
      var prompt = document.createElement("div");
      prompt.setAttribute("class", "answer");

      //var child = document.createTextNode(text);
      //prompt.appendChild(child);
      prompt.innerHTML = text + "<br/><br/>";
      this.content.append(prompt);
   };

   /**
    * start with name
    */
   this.start = function () {
      this.newPrompt('q_name');
      var self = this;

      Typer('#q_name', {
         text: 'whoami', finish: function () {
            self.newAnswer('Daniel Kagemann');
            self.bday();
         }
      });
   };

   /**
    * uptime
    */
   this.bday = function () {
      this.newPrompt('q_bday');
      var self = this;

      Typer('#q_bday', {
         text: 'uptime', errors: 10, finish: function () {

            // get days till birth
            var birth = new Date("08.12.1976");
            var now = new Date();
            var timeDiff = Math.abs(now.getTime() - birth.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            self.newAnswer('seit ' + diffDays + ' Tagen online. ' + Math.floor(diffDays / 365) + ' Jahre.');
            self.skills();
         }
      });
   };

   /**
    * show skills
    */
   this.skills = function () {
      this.newPrompt('q_skill');
      var self = this;
      Typer('#q_skill', {
         text: 'cat .profile', errors: 60, finish: function () {
            self.newAnswer('C/C++, PHP, HTML5, CSS3, JavaScript, Typescript, LESS, SCSS, Unit testing, SVN, SQLite, MySQL, Canvas, SWIFT\n' +
               'jQuery, JSON, Apache Maven, Selenium Automated Test Tool, AngularJS, Gulp, NodeJS, Bootstrap (Framework), Ionic, Jasmine, Karma, Protractor\n' +
               'Git, Subversion, Ant, Slack, JIRA, Github, Webstorm, Apple Xcode, Jenkins, Crucible, Mac OS X, Asana, Sketch, Paintcode');
            self.lang();
         }
      });
   };

   /**
    * show misc
    */
   this.misc = function () {
      this.newPrompt('q_misc');
      var self = this;
      Typer('#q_misc', {
         text: 'env', errors: 30, finish: function () {
            self.newAnswer('Apple fanboy, comicnerd');
           // self.misc();
         }
      });
   };

   /**
    * languages
    */
   this.lang = function () {
      this.newPrompt('q_lang');
      var self = this;
      Typer('#q_lang', {
         text: 'locale', errors: 20, finish: function () {
            self.newAnswer('<strong>deutsch</strong> = muttersprache<br/><strong>englisch</strong> = sehr gut<br/>');
            self.misc();
         }
      });
   };

   /**
    * exit routine
    */
   this.exit = function() {
      this.newPrompt('askexit');
      var self = this;
      Typer('#askexit', {
         text: 'exit', errors: 40, finish: function () {
            self.newAnswer('Tschüß &#xe41e;');
         }
      });
   };

   // start
   this.start();
}

// start the engine
var prof = new Profile();

document.querySelector('.close').addEventListener('click', function () {
   prof.exit();
});
document.querySelector('.maximize').addEventListener('click', function () {
   console.log('maximize');
});
document.querySelector('.minimize').addEventListener('click', function () {
   console.log('minimize');
});