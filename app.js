'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('Public'));
app.set('view engine', 'ejs');

//_________________________________________Get requests______________________________________
app.get('/', (req, res) => {
  res.render('home', { val: 'Hello world shahed you have done it' });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/compose', (req, res) => {
  res.render('compose');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/post', (req, res) => {
  res.render('post');
});

//_________________________________________Post requests______________________________________

//_________________________________________Port listening______________________________________
app.listen(process.env.PORT || port, () => {
  console.log(`App running at port ${port}`);
});
