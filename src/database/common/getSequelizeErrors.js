module.exports = (error) => (error.errors
  ? error.errors.map(({ message }) => message)
  : [error.message] || undefined);
