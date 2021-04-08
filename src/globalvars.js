import { Coordinates } from './coordinates.js'
import { Time } from './time.js'

var currentTime = new Time();
var currentLocation = new Coordinates(0,0);

export {currentTime, currentLocation}