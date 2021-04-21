import { useEffect, useRef } from 'react'
import printLatLong from './coordinates';
import { starArray, parseFile } from './csvreader'
import {currentTime} from './globalvars'

import backgroundImg from "./images/skychart_background.png"


const background_image = new Image();
background_image.src = backgroundImg;


function draw(canvas){
    const context = canvas.getContext('2d');
    context.clearRect(0,0, canvas.width, canvas.height);
    var fontSize = canvas.height/16;
    context.font = fontSize.toString() + "px Arial";
    context.fillStyle = "black";
    context.drawImage(background_image, 0, 0, context.canvas.width, context.canvas.height);
    context.translate(canvas.width / 2, canvas.height / 2);
    var currentCompassAngle;
    for(var theta = 0; theta < 360; theta +=30){
        switch(theta){
            case 0:
                currentCompassAngle = "N";
                break;
            case 90:
                currentCompassAngle = "E";
                break;
            case 180:
                currentCompassAngle = "S";
                break;
            case 270:
                currentCompassAngle = "W";
                break;
            default:
                currentCompassAngle = theta.toString() + "°";
                break;
        }
        context.fillText(currentCompassAngle, -(context.measureText(currentCompassAngle).width / 2), (-context.canvas.height / 2) + .8 * fontSize);
        context.rotate(-Math.PI / 6);
    }
    context.translate(-canvas.width / 2, -canvas.height / 2);
    const center = canvas.width/2;
    var starCenterX;
    var starCenterY;
    var starRadius = 3;
    const compassRadius = 4/9 * canvas.width;
    const scale = compassRadius / 90;
    context.font = "8px Arial";
    context.fillStyle = "white";
    var toRadians = Math.PI / 180;
    for(var i = 0; i < starArray.length; i++){
        if(starArray[i].altitude > 0){
            starCenterX = center - (scale * (90 - starArray[i].altitude) * (Math.sin(toRadians * starArray[i].azimuth)));
            starCenterY = center - (scale * (90 - starArray[i].altitude) * (Math.cos(toRadians * starArray[i].azimuth)));
            context.beginPath();
            context.arc(starCenterX, starCenterY, starRadius, 0, 2* Math.PI);
            context.fill();
            if(starArray[i].magnitude <= 2 && starArray[i].name !== ""){
                context.fillText(starArray[i].name, starCenterX+3, starCenterY+3);
            }
        }
    }
}

const Skychart = props => {
    const canvas = useRef(null)
    
    useEffect(() => {
        parseFile();
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

    useEffect(() => {
        for(var i = 0; i < starArray.length; i++){
            starArray[i].update(props.latitude, props.longitude, currentTime);
        }
        const can = canvas.current;
        draw(can);
    }, [props.latitude, props.longitude]);
    
    return (<canvas ref={canvas} {...props}/>)
}

export default Skychart