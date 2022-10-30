const {
  getAllLaunches,
  addNewLaunch,
  existLaunchWithId,
  abortLaunchById,
} = require('../model/launches.model');

const httpGetAllLaunches = (req, res) => {
  return res.status(200).json(getAllLaunches());
}

const httpPostNewLaunches = (req, res) => {
  const launch = req.body;
  if (!launch ||
  !launch.mission ||
  !launch.rocket ||
  !launch.launchDate ||
  !launch.target
  ) {
    return res.status(400).json({
      error: 'Missing required launch property'
    });
  }
  launch.launchDate = new Date(launch.launchDate);

  if(isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: 'Invalid date'
    });
  }
  addNewLaunch(launch);
  return res.status(201).json(launch);
}

const httpAbortLaunch = (req, res) => {
  const launchId = Number(req.params.id);
  console.log("🚀 ~ file: launches.controller.js ~ line 37 ~ httpAbortLaunch ~ launchId", launchId)
  if (!existLaunchWithId(launchId)) {
    return res.status(400).json({
      error: 'Launch not found',
    })
  }
  const aborted = abortLaunchById(launchId);
  return res.status(200).json(aborted);
}

module.exports =  {
  httpGetAllLaunches,
  httpPostNewLaunches,
  httpAbortLaunch
}
