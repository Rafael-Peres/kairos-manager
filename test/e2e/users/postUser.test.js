const request = require('supertest');
const { app } = require('../../../src/api/server');
const { User } = require('../../../src/entities/user');

const path = '/users';

const userFixture = {
  email: 'test@test.com',
  password: '1234567',
};

describe('API', () => {
  describe('POST /users', () => {
    afterEach(async () => {
      await User.destroy({ where: {} });
    });

    it('should return status 201 when send a valid payload', async () => {
      const res = await request(app).post(path)
        .send(userFixture)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json');

      expect(res.status).toEqual(201);
    });

    it('should return created user when send a valid payload', async () => {
      const res = await request(app).post(path)
        .send(userFixture)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json');

      expect(res.body.name).toEqual(userFixture.name);
    });

    it('should return status 400 when send a invalid payload', async () => {
      const res = await request(app).post(path)
        .send({})
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json');

      expect(res.status).toEqual(400);
    });

    it('should return validation error when send a invalid payload', async () => {
      const res = await request(app).post(path)
        .send({})
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json');

      expect(res.body.message).toEqual('"email" is required');
    });

    it('should return status 409 when email already exist', async () => {
      await request(app).post(path)
        .send(userFixture)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json');

      const res = await request(app).post(path)
        .send(userFixture)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json');

      expect(res.status).toEqual(409);
    });

    it('should return conflit error when email already exist', async () => {
      await request(app).post(path)
        .send(userFixture)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json');

      const res = await request(app).post(path)
        .send(userFixture)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json');

      expect(res.body.message).toEqual('email must be unique');
    });
  });
});
