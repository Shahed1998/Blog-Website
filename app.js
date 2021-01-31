'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const port = 3000;
const app = express();
const homeText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Scelerisque eu ultrices vitae auctor eu. Mauris ultrices eros in cursus turpis massa tincidunt dui. 
Scelerisque purus semper eget duis at tellus at. Faucibus ornare suspendisse sed nisi lacus sed.`;

const aboutText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Scelerisque eu ultrices vitae auctor eu. Mauris ultrices eros in cursus turpis massa tincidunt dui. 
Scelerisque purus semper eget duis at tellus at. Faucibus ornare suspendisse sed nisi lacus sed.`;

const contactText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Scelerisque eu ultrices vitae auctor eu. Mauris ultrices eros in cursus turpis massa tincidunt dui. 
Scelerisque purus semper eget duis at tellus at. Faucibus ornare suspendisse sed nisi lacus sed.`;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('Public'));
app.set('view engine', 'ejs');

//_________________________________________Get requests______________________________________
app.get('/', (req, res) => {
  res.render('home', { val: homeText });
});

app.get('/about', (req, res) => {
  res.render('about', { val: aboutText });
});

app.get('/compose', (req, res) => {
  res.render('compose');
});

app.get('/contact', (req, res) => {
  res.render('contact', { val: contactText });
});

app.get('/post', (req, res) => {
  res.render('post');
});

//_________________________________________Post requests______________________________________

//_________________________________________Port listening______________________________________
app.listen(process.env.PORT || port, () => {
  console.log(`App running at port ${port}`);
});
