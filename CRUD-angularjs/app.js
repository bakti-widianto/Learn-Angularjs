var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { Pool } = require('pg')

const pool = new Pool({
  user: 'bakti',
  host: 'localhost',
  database: 'breaddb',
  password: '112233',
  port: 5432,
})

var breadRouter = require('./routes/bread')(pool);
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/bread', breadRouter);
app.use('/users', usersRouter);

module.exports = app;
