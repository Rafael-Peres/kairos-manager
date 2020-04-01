const { createUser } = require('../../entities/user');
const formatUserRequest = require('./formatUserRequest');
const formatUserResponse = require('./formatUserResponse');

module.exports = async (payload) => {
  const request = formatUserRequest(payload);
  const user = await createUser(request);
  const response = formatUserResponse(user);

  return response;
};
