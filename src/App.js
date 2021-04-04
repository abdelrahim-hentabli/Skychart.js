import logo from './logo.svg';
import github_logo from './GitHub-Mark-32px.png';
import linkedin_logo from './LI-In-Bug.png';
import portfolio_logo from './8707701631578981545-512.png'
import './App.css';
import {Coordinates} from './coordinates.js';
import {Time} from './time.js';
import { useEffect } from 'react';


var currentTime = new Time();

function timedisplay(){
  currentTime.now();
  document.getElementById("localTime").innerHTML = currentTime.lTime();
  document.getElementById("UTCTime").innerHTML = currentTime.UTCTime();
  document.getElementById("julianDate").innerHTML = currentTime.jd();
  document.getElementById("siderealTime").innerHTML = currentTime.sTime();
}

function App() {
  useEffect(() => {
    setInterval(timedisplay,1000)
  });
  return (
    <div className="App">
      <header className="App-header">
        <a className="App-title">
        <img src={logo} className="App-logo" alt="logo" />
        <a>
          Skychart.js
        </a>
        </a>
        <a className="App-datetimebox">
        <a className="App-datetimetypes">
          <a>
            Local Time:
          </a>
          <a>
            UTC Time:
          </a>
          <a>
            Julian Day:
          </a>
          <a>
            Sidereal Time:
          </a>
        </a>
        <a className="App-datetimes">
          <a id="localTime">
            {currentTime.lTime()}
          </a>
          <a id="UTCTime">
            {currentTime.UTCTime()}
          </a>
          <a id="julianDate">
            {currentTime.jd()}
          </a>
          <a id="siderealTime">
            {currentTime.sTime()}
          </a>
        </a>
        </a>
      </header>
      <body className="App-body">
        <canvas className="App-skychart">
          
        </canvas>
      </body>
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
