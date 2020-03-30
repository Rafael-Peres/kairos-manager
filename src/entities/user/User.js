const sequelize = require('../../database/sequelize');

const { Sequelize } = sequelize;

module.exports = sequelize.define('users', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  email: Sequelize.STRING,
  password: Sequelize.STRING,
});
