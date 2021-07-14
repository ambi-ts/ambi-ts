import { Game } from "./game";
import { Engine } from "@joaqim/ecs";

class MyGame extends Game {}

describe("Game >>>", () => {
  let game: Game;
  let myGame: MyGame;

  it("Can be initialized.", () => {
    game = new Game();
    let spyGameUpdate = jest.spyOn(game, "update");
    expect(game.update).toBeDefined();
    game.update();
    expect(spyGameUpdate).toHaveBeenCalledTimes(1);
  });
  it("Can construct Game class with payload", () => {
    game = new Game({ engine: new Engine() });
    expect(game.update).toBeDefined();
    let spyGameUpdate = jest.spyOn(game, "update");
    game.update();
    expect(spyGameUpdate).toHaveBeenCalledTimes(1);
  });
  it("Can extend Game class", () => {
    myGame = new MyGame();
    let spyGameUpdate = jest.spyOn(myGame, "update");
    myGame.update();
    expect(spyGameUpdate).toHaveBeenCalledTimes(1);
  });
  /*
  it("Can override Game class functions", () => {
    //TODO
    game = new Game();
    let spyGameUpdate = jest.spyOn(game, "update");
    game.update();
    expect(spyGameUpdate).toHaveBeenCalledTimes(1);
  });
  */
});
