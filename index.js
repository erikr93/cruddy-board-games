var express = require('express');
var path = require('path');
var fs = require('fs');
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

// Read list of games from file.
function getGames() {
  var fileContents = fs.readFileSync('./games.json');
  var games = JSON.parse(fileContents);
  return games;
}

// Write list of games to file.
function saveGames(games) {
  fs.writeFileSync('./games.json', JSON.stringify(games));
}

var port = 3000;
console.log("http://localhost:" + port);
app.listen(port);
