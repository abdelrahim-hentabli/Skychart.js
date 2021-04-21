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



export default printLatLong;