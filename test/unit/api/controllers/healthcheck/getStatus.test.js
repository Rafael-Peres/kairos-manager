jest.mock('../../../../../src/database/sequelize');

const { getStatus } = require('../../../../../src/api/controllers/healthcheck');
const { authenticate: authenticateMock } = require('../../../../../src/database/sequelize');
const { req: reqMock, res, next: nextMock } = require('../../expressMocks');

let resMock;

describe('API', () => {
  describe('Get Status', () => {
    beforeEach(() => {
      authenticateMock.mockClear();
      reqMock.mockClear();
      resMock = res();
      nextMock.mockClear();
    });

    it('should throw a error with next', async () => {
      authenticateMock.mockRejectedValue(new Error('TEST'));

      await getStatus(reqMock, resMock, nextMock);

      expect(nextMock).toHaveBeenCalledTimes(1);
    });
  });
});
