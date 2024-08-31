// Control main logic of Game
import { controlLeft, controlRight, controlUp, controlDown } from "./dom.js";
import { clearCanvas, drawSquare } from "./draw.js";
import { arrow_key, wCanvas } from "./store.js";
import { Person } from "./object/person.js";
import { Ground } from "./object/ground.js";

const ground = new Ground()
const mainC = new Person()

export function initGame(){
    renderGame()
}

// update data game
// only auto object need call in js function 
// like bot monster, bot bird --> need update here
export function updateGame(tFrame) {
}

// render UI
export function renderGame() {
    clearCanvas();

    ground.draw();
    mainC.draw();
}


// ---------------------------------------
// user move mainC
controlLeft.addEventListener("click", function(){
    mainC.move(arrow_key.left)
})
controlRight.addEventListener("click", function(){
    mainC.move(arrow_key.right)
})
controlUp.addEventListener("click", function(){
    
})
controlDown.addEventListener("click", function(){
    
})