const express = require("express");

const {
  httpGetAllLaunches,
  httpPostNewLaunches,
  httpAbortLaunch
}= require("../controller/launches.controller");
const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches );
launchesRouter.post('/', httpPostNewLaunches );
launchesRouter.delete('/:id', httpAbortLaunch );

module.exports = launchesRouter;