// For make game animation

import { updateGame, renderGame } from "./game.js";

let animation;
export function startAnimation(tFrame) {
    animation = window.requestAnimationFrame(startAnimation);

    updateGame(tFrame)
    renderGame()
}

export function stopAnimation(){
    window.cancelAnimationFrame(animation);
}