const express = require('express');

const path = require('path');
const morgan = require('morgan');
const parser = require('body-parser');
const favicon = require('serve-favicon');

const { physicians } = require('../data/data.js');
let { appointments } = require('../data/data.js');

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/public')));
app.use(favicon(path.resolve(__dirname, '../client/src/assets/favicon.ico')));

app.use(parser.json());
app.use(morgan('dev'));

// GET REQUESTS

app.get('/physicians', (req, res) => {
  res.send(physicians);
});

app.get('/appointments/:physician', (req, res) => {
  const { physician } = req.params;
  const data = appointments[physician];
  res.send(data);
});

// DELETE REQUESTS

app.delete('/appointments/:physician/:index', (req, res) => {
  const { physician, index } = req.params;
  appointments[physician].appointments.splice(index, 1);
  res.end();
});

// PUT REQUEST

app.put('/appointments/:physician', (req, res) => {
  const { physician } = req.params;
  const { name, time, kind } = req.body;
  appointments[physician].appointments.push({
    name,
    time,
    kind,
  });
  res.end();
});

module.exports = app;
