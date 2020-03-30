const { User, createUser } = require('../../../../src/entities/user');
const { ValidationError } = require('../../../../src/common/errors');

const userFixture = {
  email: 'fulanodetal@test.com',
  password: '123',
};

describe('User Entity', () => {
  describe('Create User', () => {
    afterEach(async () => {
      await User.destroy({ where: {} });
    });
    it('should return the created user when create a user', async () => {
      const newUser = await createUser(userFixture);

      expect(newUser).toHaveProperty('id');
    });

    it('should throw a error with a invalid payload', async () => {
      try {
        await createUser({});
      } catch (error) {
        expect(error).toBeDefined();
      }
    });

    it('should throw a error with a duplicated user', async () => {
      try {
        await createUser(userFixture);
        await createUser(userFixture);
      } catch (error) {
        expect(error instanceof ValidationError).toEqual(true);
      }
    });
  });
});
