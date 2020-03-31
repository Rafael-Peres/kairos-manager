const express = require('express');
const apiDocsRoute = require('./apiDocs');
const healthcheckRoute = require('./healthcheck');
const usersRoute = require('./users');

module.exports = express.Router()
  .use('/api-docs', apiDocsRoute)
  .use('/healthcheck', healthcheckRoute)
  .use('/users', usersRoute);
