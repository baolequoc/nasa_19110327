const launches = new Map();

latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: 'keep Exploration x',
  rocket: 'Exploration IS1',
  launchDate: new Date("11-27-2030"),
  target: 'Kepler 442 b',
  customer : ['Nasa', 'Istro'],
  upcoming: true,
  success: true,
}

launches.set(launch.flightNumber,launch);

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
    flightNumber: latestFlightNumber,
    customer : ['Nasa', 'Istro', 'SPACEX'],
    upcoming: true,
    success: true,
  }));
}

function getAllLaunches() {
  return Array.from(launches.values());
}

function existLaunchWithId(id) {
  return launches.has(id);
}

function abortLaunchById(id) {
  const aborted = launches.get(id);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted; 
  

}

module.exports =  {
  getAllLaunches,
  addNewLaunch,
  existLaunchWithId,
  abortLaunchById
}

