const express = require('express');
const { createUser } = require('../controllers/user');

module.exports = express.Router()
  .post('/', createUser);
