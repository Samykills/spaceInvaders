import { KEY_MAPPINGS } from "../const/keymappings";

class KeyboardInput {
  public _keyPressedMap = new Map<string, boolean>();

  constructor() {
    this.addKeyBoardListeners();
  }

  public addKeyBoardListeners = () => {
    // todo add keyboard listener to move the player
    addEventListener("keydown", (e: KeyboardEvent) => {
      const { code } = e;
      switch (code) {
        case KEY_MAPPINGS.ARROW_UP:
          this._keyPressedMap.set(KEY_MAPPINGS.ARROW_UP, true);
          break;
        case KEY_MAPPINGS.ARROW_DOWN:
          this._keyPressedMap.set(KEY_MAPPINGS.ARROW_DOWN, true);
          break;
        case KEY_MAPPINGS.ARROW_LEFT:
          this._keyPressedMap.set(KEY_MAPPINGS.ARROW_LEFT, true);
          break;
        case KEY_MAPPINGS.ARROW_RIGHT:
          this._keyPressedMap.set(KEY_MAPPINGS.ARROW_RIGHT, true);
          break;
        default:
          break;
      }
    });

    addEventListener("keyup", (e: KeyboardEvent) => {
      const { code } = e;
      switch (code) {
        case KEY_MAPPINGS.ARROW_UP:
          this._keyPressedMap.set(KEY_MAPPINGS.ARROW_UP, false);
          break;
        case KEY_MAPPINGS.ARROW_DOWN:
          this._keyPressedMap.set(KEY_MAPPINGS.ARROW_DOWN, false);
          break;
        case KEY_MAPPINGS.ARROW_LEFT:
          this._keyPressedMap.set(KEY_MAPPINGS.ARROW_LEFT, false);
          break;
        case KEY_MAPPINGS.ARROW_RIGHT:
          this._keyPressedMap.set(KEY_MAPPINGS.ARROW_RIGHT, false);
          break;
        default:
          break;
      }
    });
  };
}
export default KeyboardInput;
