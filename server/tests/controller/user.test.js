const _User = require('../../src/model/user.model')
const app = require('../../src/app');
const mongoose = require('mongoose');
const { mongoUrl } = require('../../mongo_config');

const { setupDB } = require('./utils/setup');
setupDB();
describe('Test planets controller', () => {
  it('Check user exists', async () => {
    jest.setTimeout(30000);
    await _User.create({name: 'hello'});
    const user = await _User.findOne({name: 'hello'});
    expect(user).not.toBeNull();
  });
});

