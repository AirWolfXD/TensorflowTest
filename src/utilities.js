export const drawRect = (detections, ctx) =>{

    detections.forEach(prediction=>{
        const [x,y,width,height] = prediction['bbox'];
        const text = prediction['class'] + ": " + Math.round((prediction['score'] + Number.EPSILON) * 100) + "%";

        // if(text === 'person'){
        //     return;
        // }

        const color = 'green'
        ctx.strokeStyle = color
        ctx.font = '18px Arial'
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.fillText(text, x, y)
        ctx.rect(x, y, width, height)
        ctx.stroke()
    })
}

export const play = (detections) => {
    detections.forEach(prediction => {
        const text = prediction['class'] + " " + Math.round((prediction['score'] + Number.EPSILON) * 100) + "%";
        const [x,y,width,height] = prediction['bbox'];
        // if(text === 'person'){
        //     return;
        // }
        var msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
    })
}