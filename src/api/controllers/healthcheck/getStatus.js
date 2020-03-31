const { validateConnection } = require('../../../services/database');

module.exports = async (_req, res, next) => {
  try {
    await validateConnection();
    res.json({ status: 'It\'s all OK' });
  } catch (error) {
    next(error);
  }
};
