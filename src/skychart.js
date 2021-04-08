import { useEffect, useRef } from 'react'
import { starArray } from './csvreader'

import backgroundImg from "./images/skychart_background.png"


const background_image = new Image();
background_image.src = backgroundImg;

function draw(canvas){
    const context = canvas.getContext('2d');
    context.font = "8px Arial";
    context.drawImage(background_image, 0, 0, context.canvas.width, context.canvas.height);
    const center = canvas.width/2;
    var starCenterX;
    var starCenterY;
    var starRadius = 3;
    const compassRadius = 4/9 * canvas.width;
    const scale = compassRadius / 90;
    context.fillStyle = "white";
    var toRadians = Math.PI / 180;
    for(var i = 0; i < starArray.length; i++){
        if(starArray[i].name == "Polaris"){
            console.log("Name: " + starArray[i].name)
            console.log("Right Ascension: " + starArray[i].rightAscension);
            console.log("Declination: " + starArray[i].declination);
            console.log("Altitude: " + starArray[i].altitude);
            console.log("Azimuth: " + starArray[i].azimuth);
        }
        if(starArray[i].altitude > 0){
            starCenterX = center - (scale * (90 - starArray[i].altitude) * (Math.sin(toRadians * starArray[i].azimuth)));
            starCenterY = center - (scale * (90 - starArray[i].altitude) * (Math.cos(toRadians * starArray[i].azimuth)));
            context.beginPath();
            context.arc(starCenterX, starCenterY, starRadius, 0, 2* Math.PI);
            context.fill();
            if(starArray[i].magnitude <= 2){
                context.fillText(starArray[i].name, starCenterX+3, starCenterY+3);
            }
        }
    }

}

const Skychart = props => {
    const canvas = useRef(null)
    useEffect(() => {
        const can= canvas.current;
        background_image.onload = function(){
            draw(can);
        }
        function handleResize() {
            var size = Math.min(window.innerHeight - Math.ceil(15 * (Math.min(window.innerHeight, window.innerWidth) / 100)), window.innerWidth);
            can.height = size;
            can.width = size;
            can.innerHeight = size;
            can.innerHeight = size;
            draw(can);
        }
        window.addEventListener("resize", handleResize);
      
        handleResize();
      
        return () => window.removeEventListener("resize", handleResize);
    },[]);
    return (<canvas ref={canvas} {...props}/>)
}

export default Skychart