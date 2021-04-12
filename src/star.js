//TODO copy eq2hor calculator with nutate, precess, etc.
class Star{
    /**
     * Star class which takes care of altitude and azimuth calculation, as well as characteristic information for each star
     * Number: ranking of star based on brightness
     * pName: proper name (every star has one)
     * name: name e.g. Sirius (not every star has one)
     * rightAscension: right ascension in decimal notation
     * declination: declination in decimal notation
     * magnitude: visible magnitude
     */
    constructor(number, pName, name, rightAscension, declination, magnitude){
        this.number = number;
        this.properName = pName;
        this.name = name;
        this.rightAscension = rightAscension;
        this.declination = declination;
        this.magnitude = magnitude;
        this.altitude = -1;
        this.azimuth = -.1;
    }

    //Helper Functions
    toDegrees(radian){
        return radian * (180 / Math.PI);
    }

    toRadians(degree){
        return degree * (Math.PI / 180);
    }

    //Takes care of all altitude and azimuth calculation
    update(coordinate, time){
        var longitude = coordinate.getLongitude();
        var latitude = coordinate.getLatitude();
        var LHA = time.getSiderealTime() + (longitude * 24.0) / 360.0 - this.rightAscension;
        if(LHA < 0){
            LHA += 24;
        }
        //TODO: Check the next two lines and make them more readable
        this.altitude = this.toDegrees(Math.asin((Math.sin(this.toRadians(latitude)) * Math.sin(this.toRadians(this.declination))) + (Math.cos(this.toRadians(latitude)) * Math.cos(this.toRadians(this.declination)) * Math.cos(this.toRadians((LHA / 24.0) * 360)))));
        this.azimuth = this.toDegrees(Math.acos((Math.sin(this.toRadians(this.declination)) - (Math.sin(this.toRadians(latitude)) * Math.sin(this.toRadians(this.altitude)))) / (Math.cos(this.toRadians(latitude)) * Math.cos(this.toRadians(this.altitude)))));
        if(LHA > 0  && LHA < 12){
            this.azimuth = 360 - this.azimuth;
        }
    }
}

export default Star