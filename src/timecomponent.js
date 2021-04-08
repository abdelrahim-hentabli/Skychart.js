import {useEffect, useState, useRef } from 'react'


import {currentTime, currentLocation} from './globalvars.js'


const TimeComponent = props => {
    const [timeUpdate, setTimeUpdate] = useState(0);
    //const [locUpdate, setLocUpdate] = useState(0);
    //TODO: move location to its own component so that location doesnt have to rerender every second
    useEffect(() => {
      const timer = setTimeout(()=> {
        currentTime.now();
        setTimeUpdate(timeUpdate?0:1);
      }, 1000);
    }, [timeUpdate]);

    var options = {
      enableHighAccuracy: false,
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

    return (
    <div className="App-datetimelocbox">
      <div className="App-datetimeloctypes">
        <div>Local Time:</div>
        <div>UTC Time:</div>
        <div>Julian Day:</div>
        <div>Sidereal Time:</div>
        <div>Location:</div>
      </div>
      <div className="App-datetimeloc">
        <div id="localTime">{currentTime.lTime()}</div>
        <div id="UTCTime">{currentTime.UTCTime()}</div>
        <div id="julianDate">{currentTime.jd()}</div>
        <div id="siderealTime">{currentTime.sTime()}</div>
        <div id="location">{currentLocation.toString()}</div>
      </div>
    </div>
    )
}

export default TimeComponent