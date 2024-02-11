const path = require('path');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const googleOauth = require('passport-google-oauth20');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', require('./server/routes/views'));

module.exports = app;
