const username = 'baodeptrai'
const password = '123456';
const host = 'localhost';
const port = '27017';
const dbName = 'nasa';
const testDBName = 'nasa-test';

const mongoUrl = process.env.NODE_ENV === 'test'
  ? `mongodb://${username}:${password}@${host}:${port}/${testDBName}`
  : `mongodb://${username}:${password}@${host}:${port}/${dbName}`;

exports.mongoUrl = mongoUrl;