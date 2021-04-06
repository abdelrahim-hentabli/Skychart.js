export class Time {
    //Constructor
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
        this.sMinmute = Math.trunc(remainder);
        remainder = (remainder - this.sMinmute) * 60;
        this.sSecond = Math.trunc(remainder);
    }
    gmst(){
        var d = this.jd() - 2451545.0;
        var T = d/ 36525;
        var temp = 6.697374558+ (.06570982441908 * d) + 1.00273790935 * (this.date.getUTCHours() + (this.date.getUTCMinutes() / 60.0) + (this.date.getUTCSeconds()/3600.0)) + .000026 * Math.pow(T,2);
        return (temp - (Math.trunc(temp/24) *24));
    }
    jd(){
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
    
    //Print Helper
    padzeroes(number, size){
        return number.toString().padStart(size, "0");
    }
    
    //Print
    lTime(){
        var output = this.padzeroes(this.date.getHours(),2) + ":" + this.padzeroes(this.date.getMinutes(),2) + ":" + this.padzeroes(this.date.getSeconds(),2) + "   " ;
        output +=  this.padzeroes(this.date.getMonth()+1,2) + "/" + this.padzeroes(this.date.getDate(),2) + "/" + this.date.getFullYear() + "   ";
        return output;
    }

    UTCTime(){
        var output = this.padzeroes(this.date.getUTCHours(),2) + ":" + this.padzeroes(this.date.getUTCMinutes(),2) + ":" + this.padzeroes(this.date.getUTCSeconds(),2) + "   " ;
        output +=  this.padzeroes(this.date.getUTCMonth()+1,2) + "/" + this.padzeroes(this.date.getUTCDate(),2) + "/" + this.date.getUTCFullYear() + "   ";
        return output;
    }

    sTime(){
        return this.padzeroes(this.sHour,2) + ":" + this.padzeroes(this.sMinmute,2) + ":" + this.padzeroes(this.sSecond,2);
    }
    
    toString(){
        var output = this.padzeroes(this.date.getHours(),2) + ":" + this.padzeroes(this.date.getMinutes(),2) + ":" + this.padzeroes(this.date.getSeconds(),2) + "   " ;
        output +=  this.padzeroes(this.date.getMonth()+1,2) + "/" + this.padzeroes(this.date.getDate(),2) + "/" + this.date.getFullYear() + "   ";
        output += this.padzeroes(this.sHour,2) + ":" + this.padzeroes(this.sMinmute,2) + ":" +this.padzeroes( this.sSecond,2);
        return output;
    }
}