var express = require('express');
var path = require('path');
var ejsLayouts = require("express-ejs-layouts");

var app = express();
app.use(ejsLayouts);

// this sets a static directory for the views
app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('home', {games: getGames()});
});

app.get('/boardgames/:id', function(req, res) {
  var game = getGames()[req.params.id];
  res.render('boardgame-detail', {game: game});
});

// Returns a list of all games.
function getGames() {
  var games = [
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
  return games;
}

var port = 3000;
console.log("http://localhost:" + port);
app.listen(port);
