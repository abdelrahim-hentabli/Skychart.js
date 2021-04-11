export class Coordinates {
    round_to_2(num){
        return Math.round(num *100)/100;
    }

    /********************************************************
    |   Latitude:   [-180 , 180]
    |   Longitude:  [-90  ,  90]
    ********************************************************/
    constructor(latitude, longitude){
        this.setLatitude(latitude);
        this.setLongitude(longitude);
    }

    //Setters
    setLatitude(latitude){
        if(latitude < -180 || latitude > 180){
            console.log("Error: Invalid latitude");
            this.latitude = 0;
        }
        else{
            this.latitude = latitude;
        }
    }
    setLongitude(longitude){
        if(longitude < -90 || longitude > 90){

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