const username = 'baodeptrai'
const password = '123456';
const host = 'localhost';
const port = '27017';
const dbName = 'nasa';
const testDBName = 'nasa-test';

const mongoUrl =  `mongodb://${username}:${password}@${host}:${port}/${dbName}`;

exports.mongoUrl = mongoUrl;