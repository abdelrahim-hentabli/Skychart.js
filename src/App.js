import logo from './logo.svg'
import github_logo from './GitHub-Mark-32px.png';
import linkedin_logo from './LI-In-Bug.png';
import portfolio_logo from './8707701631578981545-512.png'
import './App.css'
import { Coordinates } from './coordinates.js'
import { Time } from './time.js'
import { useContext, useEffect, useState } from 'react'

import Skychart from './skychart.js'


var currentTime = new Time();

function timedisplay() {
  currentTime.now();
  document.getElementById("localTime").innerHTML = currentTime.lTime();
  document.getElementById("UTCTime").innerHTML = currentTime.UTCTime();
  document.getElementById("julianDate").innerHTML = currentTime.jd();
  document.getElementById("siderealTime").innerHTML = currentTime.sTime();
}

function App() {
  useEffect(() => {
    setInterval(timedisplay, 1000);
  });
  useWindowSize();
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            Skychart.js
          </div>
        </div>
        <div className="App-datetimebox">
          <div className="App-datetimetypes">
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
          </div>
          <div className="App-datetimes">
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
        <div
          className="App-link"
          href="https://github.com/abdelrahim-hentabli/skychart.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github_logo} className="App-icons" />
              GitHub
          </div>
        <div
          className="App-link"
          href="https://www.linkedin.com/in/abdelrahim-hentabli/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin_logo} className="App-icons" />
            Linkedin
          </div>
        <div
          className="App-link"
          href="https://github.com/abdelrahim-hentabli"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={portfolio_logo} className="App-icons" />
              Portfolio
          </div>
      </footer>
    </div>
  );
}

function useWindowSize() {
  useEffect(() => {
    function handleResize() {
      var c = document.getElementById("main-canvas");
      var size = Math.min(window.innerHeight - Math.floor(15 * (Math.min(window.innerHeight, window.innerWidth) / 100)), window.innerWidth);

      c.width = size;
      c.height = size;
      c.innerWidth = size;
      c.innerHeight = size;

    }
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
}


export default App;
