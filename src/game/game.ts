import { Engine } from "@joaqim/ecs";
import { Base, Model, Primed } from "primed-model";

const PrimedEngine = (engine: Engine) => {
  if (engine === undefined) return new Engine();
  return engine;
};

@Model
export class Game extends Base<Game> {
  @Primed(PrimedEngine)
  public readonly engine!: Engine;

  private _lastTimestamp = 0;
  //private _entities!: Entity[];

  awake(): void {
    // Make sure Update starts after all entities are awaken
    window.requestAnimationFrame(() => {
      // set initial timestamp
      this._lastTimestamp = Date.now();

      // start update loop
      this.update();
    });
  }

  update(): void {
    const delta = (Date.now() - this._lastTimestamp) / 1000;

    this.engine.update(delta);

    // update the timestamp
    this._lastTimestamp = Date.now();

    // Invoke on next frame
    window.requestAnimationFrame(() => this.update());
  }

  protected dispatch?(): void;
}
