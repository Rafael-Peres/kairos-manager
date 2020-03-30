const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');

const env = process.env.ENV || 'development';
const config = {
  ...databaseConfig[env],
  define: {
    timestamps: false,
    underscored: true,
  },
  logging: false,
};

module.exports = new Sequelize(config);
