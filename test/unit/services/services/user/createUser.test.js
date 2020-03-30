jest.mock('../../../../../src/entities/user/createUser');

const { createUser } = require('../../../../../src/services/user');
const { createUser: createUserMock } = require('../../../../../src/entities/user');

describe('User Service', () => {
  describe('Create User', () => {
    beforeEach(() => {
      createUserMock.mockClear();
    });

    it('should call createUser entity when create a user', async () => {
      createUserMock.mockReturnValue({
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        email: 'test@test.com',
        password: '123456',
      });

      await createUser({});

      expect(createUserMock).toHaveBeenCalledTimes(1);
    });
  });
});
