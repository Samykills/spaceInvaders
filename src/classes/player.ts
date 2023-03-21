import { canvas, canvasContext } from "../helper/getCanvas";
import { Vector } from "../types/vector";
import spaceShipIcon from "../images/spaceship.png";
import KeyboardInput from "./keyboardInput";
import { KEY_MAPPINGS } from "../const/keymappings";

class Player extends KeyboardInput {
  private scaleOfPlayer = 0.15;
  private position: Vector = {
    x: 0,
    y: 0,
  };

  private velocity: Vector = {
    x: 0,
    y: 0,
  };
  private width: number = 100;
  private height: number = 100;
  private playerImage: HTMLImageElement | undefined;

  constructor() {
    super();
    this.velocity = {
      x: 0,
      y: 0,
    };

    this.loadIImageAndSetPlayer();
    this.addKeyBoardListeners();
  }

  private loadIImageAndSetPlayer = () => {
    const loadImage = new Image();
    loadImage.src = spaceShipIcon;
    loadImage.onload = () => {
      this.playerImage = loadImage;
      this.width = loadImage.width * this.scaleOfPlayer;
      this.height = loadImage.height * this.scaleOfPlayer;

      // inital position
      this.position = {
        x: canvas!.width / 2 - this.width / 2,
        y: canvas!.height - this.height - 20,
      };
    };
  };

  public draw = () => {
    canvasContext?.drawImage(
      this.playerImage!,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
    this.position.x += this.velocity.x;
  };

  public update = () => {
    if (this.playerImage) {
      this.draw();
      this._calculateMovement();
    }
  };

  private _calculateMovement = () => {
    if (
      this._keyPressedMap.get(KEY_MAPPINGS.ARROW_LEFT) &&
      this.position.x > 0
    ) {
      this.velocity.x = -5;
    } else if (
      this._keyPressedMap.get(KEY_MAPPINGS.ARROW_RIGHT) &&
      this.position.x < canvas!.width - this.width
    ) {
      this.velocity.x = 5;
    } else {
      this.velocity.x = 0;
    }
  };
}

export default new Player();
