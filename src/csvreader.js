import stars from './topstars.js'
import Star from './star.js'

import {currentTime} from './globalvars.js'


var starArray = [];

function parseFile(){
    var starsStringArray = stars.split('\n');
    var currentLine;
    starArray = [];
    
    for(var i = 0; i < starsStringArray.length; i++){
        currentLine = starsStringArray[i].split(',');
        starArray.push(new Star(parseInt(currentLine[0]), currentLine[1], currentLine[2], parseFloat(currentLine[3])+ parseFloat(currentLine[4])/60, parseFloat(currentLine[5]), parseFloat(currentLine[6])));
        starArray[i].update(0, 0, currentTime);
    }
}

export {parseFile, starArray}