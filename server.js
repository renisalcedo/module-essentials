const express = require('express');
const hbs     = require('hbs');


const port = process.env.PORT || 3000;
var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/views'));
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
  res.render('index.hbs', {
    title: 'Module Essentials'
  });
});

app.listen(port);
