const { User, createUser } = require('../../../../src/entities/user');
const { ConflictError } = require('../../../../src/common/errors');

const userFixture = {
  email: 'test@test.com',
  password: '123456',
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

    it('should throw a validation error when try create a duplicated user email', async () => {
      try {
        await createUser(userFixture);
        await createUser(userFixture);
      } catch (error) {
        expect(error instanceof ConflictError).toEqual(true);
      }
    });

    it('should return a error message when try create a duplicated user email', async () => {
      try {
        await createUser(userFixture);
        await createUser(userFixture);
      } catch (error) {
        expect(error.message).toEqual('email must be unique');
      }
    });
  });
});
