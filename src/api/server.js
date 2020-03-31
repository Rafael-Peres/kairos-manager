const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const { errorHandler, logger } = require('./helpers');
const routes = require('./routes');

const port = process.env.PORT || 3000;
const app = express()
  .use(helmet())
  .use(compression())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(morgan('combined'))
  .use(routes)
  .use(errorHandler);

exports.start = () => {
  // istanbul ignore next
  app.listen(port, () => {
    logger.debug(`App listening on port ${port}!`);
  });
};

exports.app = app;
