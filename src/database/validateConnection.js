const sequelize = require('./sequelize');

module.exports = async () => sequelize.authenticate();
