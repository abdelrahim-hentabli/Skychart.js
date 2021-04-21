import {useEffect, useState} from 'react'


import {currentTime} from './globalvars.js'

import printLatLong from './coordinates.js'


const TimeComponent = props => {
    const [timeUpdate, setTimeUpdate] = useState(0);

    useEffect(() => {
      setTimeout(()=> {
        currentTime.now();
        setTimeUpdate(timeUpdate?0:1);
      }, 1000);

    }, [timeUpdate]);
    
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
        <div id="julianDate">{currentTime.jd().toString().padEnd(13,"0")}</div>
        <div id="siderealTime">{currentTime.sTime()}</div>
        <div id="location">{printLatLong(props.latitude, props.longitude)}</div>
      </div>
    </div>
    )
}

export default TimeComponent