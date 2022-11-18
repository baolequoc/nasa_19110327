const http = require("http");
const app = require("./app");
const mongoose = require('mongoose');

const { loadData } = require ("../src/model/planets.model");

const PORT = process.env.PORT || 5000;
const server = http.Server(app);



async function startServer() {
  try {
    await loadData();
    server.listen(PORT, () => console.log("Server running on port :", PORT));
  } catch (err) {
    console.log(err);
  }
};


// const path = require('path');
// // Mapping the schemas in MongoDB into mongoose mode
// // require('./src/v1/models/user.model');

// // eslint-disable-next-line import/no-dynamic-require
const { mongoUrl } = require('../mongo_config')

// setup mongo
mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected MongoDB');
    console.log('Connected succcessfully');
    
  })
  .catch((err) => console.log(err));

startServer();