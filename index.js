var express = require('express');
var path = require('path');
var app = express();

// this sets a static directory for the views
app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(3000);
