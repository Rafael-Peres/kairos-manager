const { createUser } = require('../../entities/user');

module.exports = async (payload) => createUser(payload);
