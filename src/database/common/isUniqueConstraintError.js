const sequelize = require('../sequelize');

const { ValidationError } = sequelize.Sequelize;

module.exports = (error) => error instanceof ValidationError
  && error.name === 'SequelizeUniqueConstraintError';
