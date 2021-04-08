import { useEffect, useRef } from 'react'
import { starArray } from './csvreader'

import backgroundImg from "./images/skychart_background.png"


const background_image = new Image();
background_image.src = backgroundImg;

function draw(canvas){
    const context = canvas.getContext('2d');
    context.drawImage(background_image, 0, 0, context.canvas.width, context.canvas.height);
    const center = canvas.width/2;
    var starCenterX;
    var starCenterY;
    var starRadius = 3;
    const compassRadius = 4/9 * canvas.width;
    const scale = compassRadius / 90;
    context.fillStyle = "white";
    var toRadians = 180/Math.PI;
    for(var i = 0; i < starArray.length; i++){
        if(starArray[i].altitude > 0){
            starCenterX = center - (scale * (starArray[i].altitude - 90) * (Math.cos(toRadians * starArray[i].azimuth)));
            starCenterY = center - (scale * (starArray[i].altitude - 90) * (Math.sin(toRadians * starArray[i].azimuth)));
            context.beginPath();
            context.arc(starCenterX, starCenterY, starRadius, 0, 2* Math.PI);
            context.fill();
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