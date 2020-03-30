exports.up = (queryInterface, Sequelize) => queryInterface.createTable('users', {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  created_at: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: new Date(),
  },
  updated_at: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: new Date(),
  },
}, {
  uniqueKeys: {
    agency_account_unique: {
      fields: ['email'],
    },
  },
});

exports.down = (queryInterface) => queryInterface.dropTable('users');
