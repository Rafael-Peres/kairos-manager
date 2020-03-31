const boom = require('@hapi/boom');
const logger = require('./logger');

/**
 * @swagger
 *
 * definitions:
 *   ErrorResponse:
 *     type: "object"
 *     properties:
 *       statusCode:
 *         type: "integer"
 *         example: "400"
 *       error:
 *         type: "string"
 *         example: "Bad Request"
 *       message:
 *         type: "string"
 *         example: "An error occurred"
*/

// eslint-disable-next-line no-unused-vars
module.exports = (error, _req, res, _next) => {
  let boomError;

  if (boom.isBoom(error)) {
    boomError = error;
  } else {
    logger.error(error.message);
    boomError = boom.internal();
  }

  const { payload, statusCode } = boomError.output;

  res.status(statusCode).json(payload);
};
