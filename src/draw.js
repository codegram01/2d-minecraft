// Draw in Canvas

import { canvas } from "./dom.js";
import { wCanvas } from "./store.js";

const ctx = canvas.getContext("2d");

export function testCanvas() {
    drawSquare(0, 0, 50, 50)
}

export function drawSquare(x, y, width, height, fillStyle) {
    ctx.beginPath();
    ctx.rect(x, wCanvas - y, width, height);
    if(fillStyle){
        ctx.fillStyle = fillStyle;
        ctx.fill();
    }
    ctx.closePath();
    ctx.stroke();
}

export function drawArc(x, y, radius, startAngle, endAngle, fillStyle){
    ctx.beginPath();
    ctx.arc(x, wCanvas - y, radius, startAngle, endAngle);
    if(fillStyle){
        ctx.fillStyle = fillStyle;
        ctx.fill();
    }
    ctx.closePath();
    ctx.stroke();
}

export function clearCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}