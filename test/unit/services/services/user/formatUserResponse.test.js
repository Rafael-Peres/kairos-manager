const { formatUserResponse } = require('../../../../../src/services/user');

const userFixture = {
  id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  email: 'test@test.com',
  password: '123456',
};

describe('User Service', () => {
  describe('Format User Response', () => {
    it('should format user request with a valid payload and not return the password', () => {
      const formatedUser = formatUserResponse(userFixture);

      expect(formatedUser.password).toBeUndefined();
    });
  });
});
