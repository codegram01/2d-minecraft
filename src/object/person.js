import { drawSquare } from "../draw.js";
import { arrow_key, wCanvas } from "../store.js";
import { ObjGround } from "./object.js";

export class Person extends ObjGround {
    x = 0;
    y = 20;
    width = 50;
    height = 50;
    background = "#ffec99"
    
    constructor(){
        super()

    }

    move(arrow){
        switch(arrow){
            case arrow_key.left:
                this.x = this.x - 10
                break;
            case arrow_key.right:
                this.x = this.x + 10
                break;
            case arrow_key.up:
                break;
            case arrow_key.down:
                break;
        }
    }
    
    draw(){
        drawSquare(this.x, this.y, this.width, this.height, this.background);
    }
}