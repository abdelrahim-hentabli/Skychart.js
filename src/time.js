import padzeroes from './padzeroes.js'
import roundN from './roundn.js'

export class Time {
    /*  Basic class which stores time
    *   uses javascript Date() object
    *   only updates on now() and setters
    */
    constructor(){
        this.date = new Date();
        this.now();
    }

    //Setters
    now(){
        this.date.setTime(Date.now());
        this.updateSiderealTime();
    }
    updateSiderealTime(){
        var gmst = this.gmst();
        var remainder = gmst;
        this.sHour = Math.trunc(remainder);
        remainder = (remainder - this.sHour) * 60;
        this.sMinute = Math.trunc(remainder);
        remainder = (remainder - this.sMinute) * 60;
        this.sSecond = Math.trunc(remainder);
    }
    gmst(){
        var d = this.jd_disc() - 2451545.0;
        var T = d/ 36525;
        var temp = 6.697374558+ (.06570982441908 * d) + 1.00273790935 * (this.date.getUTCHours() + (this.date.getUTCMinutes() / 60.0) + (this.date.getUTCSeconds()/3600.0)) + .000026 * Math.pow(T,2);
        return (temp - (Math.trunc(temp/24) *24));
    }
    jd_disc(){
        //rework this function and update a stored value, this function is getting called multiple times needlessly
        var m = this.date.getUTCMonth() +1;
		var y = this.date.getUTCFullYear();
		if (m <= 2){
			y--;
			m+=12;
		}
		var a = Math.trunc(y /100);
		var b = Math.trunc(a/4);
		var c = 2-a+b;
		var e = Math.trunc(365.25*(y + 4716));
		var f = Math.trunc(30.6001 * (m + 1));
		return c+this.date.getUTCDate()+e+f-1524.5;
    }
    jd(){
        return roundN(this.jd_disc() + (this.date.getUTCHours() + (this.date.getUTCMinutes() / 60.0) + (this.date.getUTCSeconds()/3600.0))/24, 5);

    }
    //Getters
    getDay(){
        return this.date.getDate();
    }
    getMonth(){
        return this.date.getMonth();
    }
    getYear(){
        return this.date.getFullYear();
    }
    getHour(){
        return this.date.getHours();
    }
    getMinute(){
        return this.date.getMinutes();
    }
    getSecond(){
        return this.date.getSeconds();
    }

    getSiderealTime(){
        return (this.sHour + (this.sMinute / 60) + (this.sSecond / 3600));
    }
    
    //Print
    lTime(){
        var output = padzeroes(this.date.getHours(),2) + ":" + padzeroes(this.date.getMinutes(),2) + ":" + padzeroes(this.date.getSeconds(),2) + "   " ;
        output +=  padzeroes(this.date.getMonth()+1,2) + "/" + padzeroes(this.date.getDate(),2) + "/" + this.date.getFullYear() + "   ";
        return output;
    }

    UTCTime(){
        var output = padzeroes(this.date.getUTCHours(),2) + ":" + padzeroes(this.date.getUTCMinutes(),2) + ":" + padzeroes(this.date.getUTCSeconds(),2) + "   " ;
        output +=  padzeroes(this.date.getUTCMonth()+1,2) + "/" + padzeroes(this.date.getUTCDate(),2) + "/" + this.date.getUTCFullYear() + "   ";
        return output;
    }

    sTime(){
        return padzeroes(this.sHour,2) + ":" + padzeroes(this.sMinute,2) + ":" + padzeroes(this.sSecond,2);
    }
    
    toString(){
        var output = padzeroes(this.date.getHours(),2) + ":" + padzeroes(this.date.getMinutes(),2) + ":" + padzeroes(this.date.getSeconds(),2) + "   " ;
        output +=  padzeroes(this.date.getMonth()+1,2) + "/" + padzeroes(this.date.getDate(),2) + "/" + this.date.getFullYear() + "   ";
        output += padzeroes(this.sHour,2) + ":" + padzeroes(this.sMinute,2) + ":" +this.padzeroes( this.sSecond,2);
        return output;
    }
}