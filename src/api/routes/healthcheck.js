const express = require('express');
const { getStatus } = require('../controllers/healthcheck');

module.exports = express.Router()
  .get('/', getStatus);
