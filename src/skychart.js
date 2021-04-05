import { useEffect, useRef } from 'react'

import backgroundImg from "./skychart_background.png"

const Skychart = props => {

    const skychartRef = useRef(null)
    const draw = context =>{
        context.fillStyle = '#000000';
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
        var background_image = new Image();
        background_image.src = backgroundImg;
        background_image.onload = function(){
            context.drawImage(background_image, 0, 0, context.canvas.width, context.canvas.height);
        }
    }

    useEffect(() => {
        const canvas= skychartRef.current;
        const context = canvas.getContext('2d');
        draw(context);
    }, [])
    return (
    <div>
        <canvas ref={skychartRef} {...props}/>
    </div>)
}

export default Skychart