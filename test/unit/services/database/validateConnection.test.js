jest.mock('../../../../src/database/sequelize');

const validateConnection = require('../../../../src/database/validateConnection');
const { authenticate: authenticateMock } = require('../../../../src/database/sequelize');

describe('Database Service', () => {
  describe('Validate Connection', () => {
    beforeEach(() => {
      authenticateMock.mockClear();
    });

    it('should call createUser entity when create a user', async () => {
      authenticateMock.mockReturnValue(true);

      await validateConnection();

      expect(authenticateMock).toHaveBeenCalledTimes(1);
    });
  });
});
