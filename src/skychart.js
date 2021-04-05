import { useEffect, useRef, useState } from 'react'

import backgroundImg from "./skychart_background.png"

const background_image = new Image();
background_image.src = backgroundImg;

function drawerino(canvas){
    const context = canvas.getContext('2d');
    context.drawImage(background_image, 0, 0, context.canvas.width, context.canvas.height);
    requestAnimationFrame(() =>drawerino(canvas));
}

const Skychart = props => {
    const [, updateState] = useState();
    const canvas = useRef(null)
    const draw = context =>{
        background_image.onload = function(){
            drawerino(context);
        }
    }
    useEffect(() => {
        const can= canvas.current;
        draw(can);
    }, []);
    return (<canvas ref={canvas} {...props}/>)
}

export default Skychart