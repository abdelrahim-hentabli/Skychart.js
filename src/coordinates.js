import roundN from './roundn.js'

export function printLatLong(latitude, longitude){
    var output;
    if(latitude < 0){
        output = -roundN(latitude, 2) + " S  ";
    }
    else{
        output = roundN(latitude, 2) + " N  ";
    }
    if(longitude < 0){
        output += -roundN(longitude, 2) + " W";
    }
    else{
        output += roundN(longitude, 2) + " E";
    }
    return output;
 }

export class Coordinates {
    /*  Basic class which stores geocoordinates for user location
    *   Latitude:   [-90 , 90]
    *   Longitude:  [-180  ,  180]
    */
    constructor(latitude, longitude){
        this.setLatitude(latitude);
        this.setLongitude(longitude);
    }

    //Setters
    setLatitude(latitude){
        if(latitude < -90 || latitude > 90){
            console.log("Error: Invalid latitude");
            this.latitude = 0;
        }
        else{
            this.latitude = latitude;
        }
    }
    setLongitude(longitude){
        if(longitude < -180 || longitude > 180){

            console.log("Error: Invalid longitude");
            this.longitude = 0;
        }
        else{
            this.longitude = longitude;
        }
    }


    //Getters
    getLatitude(){
        return this.latitude;
        
    }
    getLongitude(){
        return this.longitude;
    }



    //Prints in the format "|<Latitude>|<S/N>  |<Longitude>| <E/W>"
    toString(){
       var output;
       if(this.latitude < 0){
           output = -roundN(this.latitude, 2) + " S  ";
       }
       else{
           output = roundN(this.latitude, 2) + " N  ";
       }
       if(this.longitude < 0){
           output += -roundN(this.longitude, 2) + " W";
       }
       else{
           output += roundN(this.longitude, 2) + " E";
       }
       return output;
    }
};

export default printLatLong;