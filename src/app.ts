import Player from "./classes/player";
import { canvas } from "./helper/getCanvas";

const setCanvasSize = () => {
  canvas!.width = innerWidth;
  canvas!.height = innerHeight;
};
const initalizeGame = () => {
  setCanvasSize();
  animationLoop()
};

const animationLoop = () => {
  requestAnimationFrame(animationLoop);
  console.log('loopworks')
  Player.draw()
};

initalizeGame();
