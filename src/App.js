import logo from './logo.svg'
import github_logo from './GitHub-Mark-32px.png';
import linkedin_logo from './LI-In-Bug.png';
import portfolio_logo from './8707701631578981545-512.png'
import './App.css'
import { Coordinates } from './coordinates.js'
import { Time } from './time.js'
import { useEffect } from 'react'

import Skychart from './skychart.js'


var currentTime = new Time();
var currentLocation = new Coordinates(0,0);

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  currentLocation.setLatitude(crd.latitude);
  currentLocation.setLongitude(crd.longitude);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

function timedisplay() {
  currentTime.now();
  document.getElementById("localTime").innerHTML = currentTime.lTime();
  document.getElementById("UTCTime").innerHTML = currentTime.UTCTime();
  document.getElementById("julianDate").innerHTML = currentTime.jd();
  document.getElementById("siderealTime").innerHTML = currentTime.sTime();
  document.getElementById("location").innerHTML = currentLocation.toString();
}

function App() {
  useEffect(() => {
    setInterval(timedisplay, 1000);
  });
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            Skychart.js
          </div>
        </div>
        <div className="App-datetimelocbox">
          <div className="App-datetimeloctypes">
            <div>
              Local Time:
            </div>
            <div>
              UTC Time:
            </div>
            <div>
              Julian Day:
            </div>
            <div>
              Sidereal Time:
            </div>
            <div>
              Location:
            </div>
          </div>
          <div className="App-datetimeloc">
            <div id="localTime">
              {currentTime.lTime()}
            </div>
            <div id="UTCTime">
              {currentTime.UTCTime()}
            </div>
            <div id="julianDate">
              {currentTime.jd()}
            </div>
            <div id="siderealTime">
              {currentTime.sTime()}
            </div>
            <div id="location">
              {currentLocation.toString()}
            </div>
          </div>
        </div>
      </header>
      <main className="App-body">
        <Skychart id="main-canvas" className="App-skychart">
          Canvas element did not load.
        </Skychart>
      </main>
      <footer
        className="App-footer"
      >
        <a
          className="App-link"
          href="https://github.com/abdelrahim-hentabli/skychart.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github_logo} className="App-icons" />
              GitHub
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/abdelrahim-hentabli/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin_logo} className="App-icons" />
            Linkedin
        </a>
        <a
          className="App-link"
          href="https://github.com/abdelrahim-hentabli"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={portfolio_logo} className="App-icons" />
              Portfolio
        </a>
      </footer>
    </div>
  );
}

export default App;
