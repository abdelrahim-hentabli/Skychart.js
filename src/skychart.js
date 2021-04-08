import { useEffect, useRef } from 'react'

import backgroundImg from "./images/skychart_background.png"

const background_image = new Image();
background_image.src = backgroundImg;

function draw(canvas){
    const context = canvas.getContext('2d');
    context.drawImage(background_image, 0, 0, context.canvas.width, context.canvas.height);
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