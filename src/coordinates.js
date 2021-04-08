export class Coordinates {
    round_to_2(num){
        return Math.round(num *100)/100;
    }

    constructor(latitude, longitude){
        this.latitude = latitude;
        this.longitude = longitude;
    }

    //Setters
    setLatitude(latitude){
        this.latitude = latitude;
    }
    setLongitude(longitude){
        this.longitude = longitude;
    }


    //Getters
    getLatitude(){
        return this.latitude;
        
    }
    getLongitude(){
        return this.longitude;
    }

    //Print
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