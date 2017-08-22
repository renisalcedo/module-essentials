const express = require('express');
const hbs     = require('hbs');


const port = process.env.PORT || 3000;
var app = express();

//app.set('view engine', 'html');
//app.engine('html', require('hbs')._express);

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use(express.static(__dirname + '/views'));
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
  res.render('index.hbs', {
    title: 'Module Essentials'
  });
});

app.listen(port);
