import Player from "./classes/player";
import { canvas, canvasContext } from "./helper/getCanvas";

const setCanvasSize = () => {
  canvas!.width = innerWidth;
  canvas!.height = innerHeight;
};

const initalizeGame = () => {
  setCanvasSize();
  animationLoop();
};

const animationLoop = () => {
  requestAnimationFrame(animationLoop);
  canvasContext!.fillStyle = "black";
  canvasContext!.fillRect(0, 0, canvas!.width, canvas!.height);
  Player.update();
};

initalizeGame();
