
const sequelize = require('../../../../src/database/sequelize');
const { isUniqueConstraintError } = require('../../../../src/database/common');

const { ValidationError } = sequelize.Sequelize;

describe('Common Database', () => {
  describe('Is Unique Constraint Error', () => {
    it('should return true when is a SequelizeUniqueConstraintError', () => {
      const error = new ValidationError('TEST');
      error.name = 'SequelizeUniqueConstraintError';

      const uniqueConstraintError = isUniqueConstraintError(error);

      expect(uniqueConstraintError).toEqual(true);
    });
    it('should return false when is not a SequelizeUniqueConstraintError', () => {
      const error = new Error('TEST');

      const uniqueConstraintError = isUniqueConstraintError(error);

      expect(uniqueConstraintError).toEqual(false);
    });
  });
});
