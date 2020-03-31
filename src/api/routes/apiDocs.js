const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const config = require('../../config');

const {
  contact,
  description,
  title,
  version,
} = require('../../../package.json');

const env = process.env.ENV || 'development';
const { host } = config[env];

let hostApiDocs = host;
if (env === 'development') {
  const port = process.env.PORT || 3000;
  hostApiDocs = `${host}:${port}`;
}

const options = {
  definition: {
    info: {
      contact: {
        email: contact,
      },
      description,
      title,
      version,
    },
    host: hostApiDocs,
    basePath: '/',
    schemes: [
      'http',
      'https',
    ],
  },
  apis: ['./src/api/**/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = express.Router()
  .use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
