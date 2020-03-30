const joi = require('@hapi/joi');

module.exports = joi.object({
  email: joi.string()
    .email()
    .required(),
  password: joi.string()
    .min(6)
    .max(20)
    .required(),
});
