import { drawSquare } from "../draw.js";
import { wCanvas } from "../store.js";

export const heightGround = 20;

export class Ground {
    x = 0;
    y = 0 + heightGround;
    width = wCanvas;
    height = heightGround;
    background = "#ffc9c9"

    constructor(){
    }

    draw(){
        drawSquare(this.x, this.y, this.width, this.height, this.background)
    }
}