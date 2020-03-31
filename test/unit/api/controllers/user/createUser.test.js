jest.mock('../../../../../src/entities/user');

const { createUser } = require('../../../../../src/api/controllers/user');
const { createUser: createUserMock } = require('../../../../../src/entities/user');
const { req: reqMock, res, next: nextMock } = require('../../expressMocks');

let resMock;

describe('API', () => {
  describe('Create User', () => {
    beforeEach(() => {
      createUserMock.mockClear();
      reqMock.mockClear();
      resMock = res();
      nextMock.mockClear();
    });

    it('should throw a error with next', async () => {
      createUserMock.mockRejectedValue(new Error('TEST'));

      await createUser(reqMock, resMock, nextMock);

      expect(nextMock).toHaveBeenCalledTimes(1);
    });
  });
});
