const request = require('supertest');
const app = require('../../src/app');

describe('Test launches controller', () => {
  it('Get all launches', async () => {
    jest.setTimeout(30000);
    const response = await request(app)
      .get('/launches');
    expect(response.statusCode).toBe(200);
  });
  it('post new launches however not have value', async () => {
    jest.setTimeout(30000);
    const response = await request(app)
      .post('/launches');
    expect(response.statusCode).toBe(400);
  });
  it('post new launches however the launch date not valid', async () => {
    jest.setTimeout(30000);
    const response = await request(app)
      .post('/launches')
      .send({ launchDate: 'aaaaa' });
    expect(response.statusCode).toBe(400);
  });
  it('post new launches success', async () => {
    jest.setTimeout(30000);
    const response = await request(app)
      .post('/launches')
      .send({ mission: 'a', rocket: 'b', target: 'c', launchDate: Date.now() });
    expect(response.statusCode).toBe(201);
  });
  it('abort launch success', async () => {
    jest.setTimeout(30000);
    const response = await request(app)
      .delete('/launches/100');
    expect(response.statusCode).toBe(200);
  });
  it('abort launch however id not exist', async () => {
    jest.setTimeout(30000);
    const response = await request(app)
      .delete('/launches/1000');
    expect(response.statusCode).toBe(400);
  });
});
