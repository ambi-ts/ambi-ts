import { Vector2 } from "math";
import { List } from "utils";
import { Winding } from ".";
export declare class Polygon {
    private readonly vertices;
    constructor(vertices: List<Vector2>);
    area(): number;
    polyWinding(): Winding;
    private signedDoubleArea;
}
