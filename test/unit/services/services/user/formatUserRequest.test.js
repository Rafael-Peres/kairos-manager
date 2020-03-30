const { formatUserRequest } = require('../../../../../src/services/user');
const { ValidationError } = require('../../../../../src/common/errors');

const userFixture = {
  email: 'test@test.com',
  password: '123456',
};

describe('User Service', () => {
  describe('Format User Request', () => {
    it('should format user request with a valid payload', () => {
      formatUserRequest(userFixture);
    });

    it('should throw a validation error with a invalid payload', () => {
      try {
        formatUserRequest({});
      } catch (error) {
        expect(error instanceof ValidationError).toEqual(true);
      }
    });

    it('should throw a error message with a invalid payload', () => {
      try {
        formatUserRequest({});
      } catch (error) {
        expect(error.message).toEqual('"email" is required');
      }
    });
  });
});
