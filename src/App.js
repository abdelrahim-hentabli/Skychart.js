import logo from './images/logo.png'
import github_logo from './images/GitHub-Mark-32px.png';
import linkedin_logo from './images/LI-In-Bug.png';
import portfolio_logo from './images/portfolio.png'
import './App.css'

import Skychart from './skychart.js'
import TimeComponent from './timecomponent.js'

import { useEffect, useState } from 'react';


function App() {
  const [latitude, setLatitudeUpdate] = useState(0);
  const [longitude, setLongitudeUpdate] = useState(0);
  const [time, setTimeUpdate] = useState(0);
  
  useEffect(() => {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      var crd = pos.coords;
      setLatitudeUpdate(crd.latitude);
      setLongitudeUpdate(crd.longitude);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            skychart.js
          </div>
        </div>
        <TimeComponent
          latitude={latitude}
          longitude={longitude}
          time={time}  
        />
      </header>
      <main className="App-body">
        <Skychart id="main-canvas" className="App-skychart"
          latitude={latitude}
          longitude={longitude}
          time={time}  
        >
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
          <img src={github_logo} className="App-icons" alt="github logo"/>
              GitHub
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/abdelrahim-hentabli/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin_logo} className="App-icons" alt="linkedin logo"/>
            Linkedin
        </a>
        <a
          className="App-link"
          href="https://github.com/abdelrahim-hentabli"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={portfolio_logo} className="App-icons" alt="portfolio logo"/>
              Portfolio
        </a>
      </footer>
    </div>
  );
}

export default App;
