const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");
var express = require('express'),
              validate = require('form-validate');
console.console.log();
// ...Your express initialization logic...


app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());

var App = require('app'),
    app = new App();

app.routes({'': function (req, res, next){
  res.send('Hello World');
});

app.listen();

var guesses=
var numberOfGuess=""
var letters=""

var buttons = function () {
   myButtons = document.getElementById('buttons');
   letters = document.createElement('ul');

   for (var i = 0; i < words.length; i++) {
     letters.id = 'words';
     list = document.createElement('li');
     list.id = 'words';
     list.innerHTML = words[i];
     check();
     myButtons.appendChild(words);
     words.appendChild(list);
   }
 }

 comments = function () {
 shownumberOfguesses.innerHTML = "You have " + guesses + " numberOfGuess";
 if (lives < 1) {
   shownumberOfguesses.innerHTML = "Game Over";
 }
 for (var i = 0; i < geusses.length; i++) {
   if (counter + space === geusses.length) {
     shownumberOfguesses.innerHTML = "You Win!";
   }
 }
}
