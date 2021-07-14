import { Engine } from "@joaqim/ecs";
import { Base } from "primed-model";
export declare class Game extends Base<Game> {
    readonly engine: Engine;
    private _lastTimestamp;
    awake(): void;
    update(): void;
    protected dispatch?(): void;
}
