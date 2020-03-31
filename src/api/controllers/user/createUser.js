const boom = require('@hapi/boom');
const { logger } = require('../../helpers');
const { ConflictError, ValidationError } = require('../../../common/errors');
const {
  createUser,
  formatUserRequest,
  formatUserResponse,
} = require('../../../services/user');

/**
 * @swagger
 *
 * /users:
 *   post:
 *     tags:
 *     - "users"
 *     summary: "Add a new user"
 *     consumes:
 *     - "application/json"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - in: "body"
 *       name: "User"
 *       description: "user object that needs to be added"
 *       required: true
 *       schema:
 *         $ref: '#/definitions/User'
 *     responses:
 *       201:
 *         description: "Created"
 *         schema:
 *           type: "object"
 *           $ref: "#/definitions/UserResponse"
 *       400:
 *         description: "Invalid input"
 *         schema:
 *           type: "object"
 *           $ref: "#/definitions/ErrorResponse"
 *       409:
 *         description: "User already exists"
 *         schema:
 *           type: "object"
 *           $ref: "#/definitions/ErrorResponse"
*/

module.exports = async (req, res, next) => {
  try {
    const payload = formatUserRequest(req.body);
    const newUser = await createUser(payload);
    const response = formatUserResponse(newUser);

    logger.info('User created', { payload: response });

    res.status(201).json(response);
  } catch (error) {
    if (error instanceof ValidationError) {
      logger.warn('Invalid payload on create user', { payload: req.body });
      next(boom.badRequest(error.message));
    } else if (error instanceof ConflictError) {
      logger.warn('User already exists', { payload: req.body });

      next(boom.conflict(error.message));
    } else {
      next(error);
    }
  }
};
