// Vendor modules
const express = require('express');
const hbs     = require('hbs');

// Project modules
const data    = require('./server/models/data');

const port = process.env.PORT || 3000;
var app = express();

// Allow use of html extension
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

// Static web files
app.use(express.static(__dirname + '/views'));
hbs.registerPartials(__dirname + '/views/partials');

// Web requests
app.get('/', (req, res) => {
  res.render('index.hbs', {
    title: data.Page.title,
    desc:  data.Page.description,
    author: data.Person.name,
    github: data.Person.github
  });
});

app.listen(port);
