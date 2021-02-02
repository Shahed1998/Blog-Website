'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const port = 3000;
const app = express();
const _ = require('lodash');
const homeText = `This is where I will update my daily routines.`;

const aboutText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Scelerisque eu ultrices vitae auctor eu. Mauris ultrices eros in cursus turpis massa tincidunt dui. 
Scelerisque purus semper eget duis at tellus at. Faucibus ornare suspendisse sed nisi lacus sed.`;

const contactText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Scelerisque eu ultrices vitae auctor eu. Mauris ultrices eros in cursus turpis massa tincidunt dui. 
Scelerisque purus semper eget duis at tellus at. Faucibus ornare suspendisse sed nisi lacus sed.`;

const globalPost = [{ title: '', post: '' }];
let reqSend = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('Public'));
app.set('view engine', 'ejs');

//_________________________________________Get requests______________________________________
app.get('/', (req, res) => {
  res.render('home', { val: homeText, globalPost: globalPost });
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

app.get('/post/:postName', (req, res) => {
  const requestedTitle = _.lowerCase(req.params.postName);

  for (let i = 0; i < globalPost.length; i++) {
    const storedTitle = _.lowerCase(globalPost[i].title);
    if (storedTitle === requestedTitle) {
      reqSend = [];
      if (globalPost[i].title === '' || globalPost[i].post === '') {
        continue;
      }
      const dynObj = {
        page: 'post',
        title: globalPost[i].title,
        post: globalPost[i].post,
      };
      reqSend.push(dynObj);
      break;
    } else {
      reqSend = [];
      const dynObj = {
        page: 'home',
        title: 'none',
        post: 'none',
      };
      reqSend.push(dynObj);
    }
  }
  res.render(reqSend[0].page, {
    val: homeText,
    title: reqSend[0].title,
    post: reqSend[0].post,
    globalPost: globalPost,
  });
});

//_________________________________________Post requests______________________________________

app.post('/compose', (req, res) => {
  const postObj = {
    title: req.body.title,
    post: req.body.post,
  };

  globalPost.push(postObj);

  res.redirect('/');
});

//_________________________________________Port listening______________________________________
app.listen(process.env.PORT || port, () => {
  console.log(`App running at port ${port}`);
});
