const boom = require('@hapi/boom');
const errorHandler = require('../../../../src/api/controllers/errorHandler');
const { req: reqMock, res, next: nextMock } = require('../expressMocks');

let resMock;

describe('API', () => {
  describe('Helper Healthcheck', () => {
    beforeEach(() => {
      reqMock.mockClear();
      resMock = res();
      nextMock.mockClear();
    });

    it('should return status 500', async () => {
      const error = new Error('TEST');

      await errorHandler(error, reqMock, resMock);

      expect(resMock.body.statusCode).toEqual(500);
    });

    it('should return "An internal server error occurred" error message', async () => {
      const error = new Error('TEST');

      await errorHandler(error, reqMock, resMock);

      expect(resMock.body.message).toEqual('An internal server error occurred');
    });

    it('should return status 409', async () => {
      const error = boom.conflict('TEST');

      await errorHandler(error, reqMock, resMock);

      expect(resMock.body.statusCode).toEqual(409);
    });

    it('should return "TEST" error message', async () => {
      const error = boom.conflict('TEST');

      await errorHandler(error, reqMock, resMock);

      expect(resMock.body.message).toEqual('TEST');
    });
  });
});
