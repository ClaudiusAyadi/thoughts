const path = require('path');
const express = require('express');
const session = require('express-session');
const passport = require('passport');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', require('./server/routes/views'));
app.use(require('./server/routes/auth'));

module.exports = app;
