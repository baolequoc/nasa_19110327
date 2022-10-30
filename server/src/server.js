const http = require("http");
const app = require("./app");

const { loadData } = require ("../src/model/planets.model");

const PORT = process.env.PORT || 5000;
const server = http.Server(app);



async function startServer() {
  try {
    await loadData();
    console.log('herre');
    server.listen(PORT, () => console.log("Server running on port :", PORT));
  } catch (err) {
    console.log(err);
  }
};

startServer();