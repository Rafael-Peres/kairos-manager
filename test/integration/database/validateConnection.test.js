const validateConnection = require('../../../src/database/validateConnection');

describe('Database', () => {
  describe('Validate connection', () => {
    it('should validate connection without error', async () => {
      await validateConnection();
    });
  });
});
