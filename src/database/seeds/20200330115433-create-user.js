exports.up = (queryInterface) => queryInterface.bulkInsert('users', [{
  id: '2a1a7dea-cf2c-4bb8-b290-720a8b30d601',
  email: 'test@test.com',
  password: '123456',
}]);

exports.down = (queryInterface) => queryInterface.bulkDelete('users', null, {});
