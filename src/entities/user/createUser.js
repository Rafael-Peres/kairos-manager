const { getSequelizeErrors, isUniqueConstraintError } = require('../../database/common');
const { ConflictError } = require('../../common/errors');
const User = require('./User');

module.exports = async (payload) => {
  try {
    return await User.create(payload);
  } catch (error) {
    if (isUniqueConstraintError(error)) {
      const errors = getSequelizeErrors(error);
      const messageError = errors.join(', ');

      throw new ConflictError(messageError);
    }

    throw error;
  }
};
