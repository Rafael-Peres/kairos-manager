const sequelize = require('../../database/sequelize');
const { ValidationError } = require('../../common/errors');
const User = require('./User');

const { ValidationError: ValidationErrorSequelize } = sequelize.Sequelize;

module.exports = async (payload) => {
  try {
    return await User.create(payload);
  } catch (error) {
    if (error instanceof ValidationErrorSequelize) {
      const messageError = error.errors && error.errors[0]
        ? error.errors[0].message
        : error.message;

      throw new ValidationError(messageError);
    }

    throw error;
  }
};
