const request = require('supertest');
const app = require('../../src/app');

describe('Test planets controller', () => {
  it('Get planets', async () => {
    jest.setTimeout(30000);
    const response = await request(app)
      .get('/planets');
    expect(response.statusCode).toBe(200);
  });
});
