import { canvasContext } from "../helper/getCanvas";
import { Vector } from "../types/vector";
import Icon from "../images/spaceship.png";

class Player {
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

  private playerImage: HTMLImageElement = new Image(this.width, this.height);

  constructor() {
    this.position = {
      x: 100,
      y: 200,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.playerImage.src = Icon;
  }

  public draw = () => {
    canvasContext!.fillStyle = "red";
    canvasContext?.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
    // canvasContext?.drawImage(this.playerImage,this.position.x, this.position.y)
  };
}

export default new Player();
