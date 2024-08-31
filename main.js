import { btnStart, btnStop, btnTest, btnInit } from "./src/dom.js";
import { startAnimation, stopAnimation } from "./src/animation.js";
import { testCanvas } from "./src/draw.js"
import { initGame } from "./src/game.js";

btnInit.addEventListener("click", function(){
    initGame()
})

btnStart.addEventListener("click", function(){
    startAnimation()
})

btnStop.addEventListener("click", function(){
    stopAnimation()
})

btnTest.addEventListener("click", function(){
})