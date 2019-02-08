const express = require('express');

const path = require('path');
const morgan = require('morgan');
const parser = require('body-parser');
const favicon = require('serve-favicon');

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/public')));
app.use(favicon(path.resolve(__dirname, '../client/src/assets/favicon.ico')));

app.use(parser.json());
app.use(morgan('dev'));

// GET REQUESTS

app.get('/physicians', (req, res) => {
  
})

module.exports = app;
