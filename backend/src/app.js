const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(routes);
app.use(errors());

module.exports = app;
