const { userSchema } = require('../../entities/user');
const { ValidationError } = require('../../common/errors');

module.exports = (payload) => {
  const { error, value } = userSchema.validate(payload);

  if (error) {
    throw new ValidationError(error.message);
  }

  return value;
};
