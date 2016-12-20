var express = require('express');
var path = require('path');
var ejsLayouts = require("express-ejs-layouts");

var app = express();
app.use(ejsLayouts);

// this sets a static directory for the views
app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', 'ejs');

var GAMES = [
  {
    name: "Settlers of Catan",
    description: "Build, trade, score points."
  },
  {
    name: "Risk",
    description: "Battle, roll dice, kill."
  },
  {
    name: "Stratego",
    description: "Hidden battle configuration tap tap who are you dead game. Two players."
  }
];

app.get('/', function(req, res) {
  res.render('home', {games: GAMES});
});

app.get('/boardgames/:id', function(req, res) {
  var game = GAMES[req.params.id];
  res.render('boardgame-detail', {game: game});
});

var port = 3000;
console.log("http://localhost:" + port);
app.listen(port);
