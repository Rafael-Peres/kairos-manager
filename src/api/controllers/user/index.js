const createUser = require('./createUser');

/**
 * @swagger
 *
 * tags:
 * - name: "users"
 *   description: "Everything about users"
 *
 * definitions:
 *   User:
 *     type: "object"
 *     required:
 *       - email
 *       - password
 *     properties:
 *       email:
 *         type: "string"
 *         format: "email"
 *       password:
 *         type: "string"
 *         format: "password"
 *         minLength: 6
 *         maxLength: 20
 *
 *   UserResponse:
 *     type: "object"
 *     properties:
 *       id:
 *         type: "string"
 *         format: "uuid"
 *       email:
 *         type: "string"
 *         format: "email"
 *         example: "test@test.com"
*/

module.exports = {
  createUser,
};
