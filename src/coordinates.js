export class Coordinates {
    /*  Basic class which stores geocoordinates for user location
    *   Latitude:   [-90 , 90]
    *   Longitude:  [-180  ,  180]
    */
    constructor(latitude, longitude){
        this.setLatitude(latitude);
        this.setLongitude(longitude);
    }

    //Helpers
    round_to_2(num){
        return Math.round(num *100)/100;
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
           output = -this.round_to_2(this.latitude) + " S  ";
       }
       else{
           output = this.round_to_2(this.latitude) + " N  ";
       }
       if(this.longitude < 0){
           output += -this.round_to_2(this.longitude) + " W";
       }
       else{
           output += this.round_to_2(this.longitude) + " E";
       }
       return output;
    }
};