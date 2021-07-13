import { Vector2 } from "math";
export declare class Rect {
    x: number;
    y: number;
    width: number;
    height: number;
    static readonly zero: Rect;
    static readonly one: Rect;
    constructor(x: number, y: number, width: number, height: number);
    get left(): number;
    get right(): number;
    get top(): number;
    get bottom(): number;
    get topLeft(): Vector2;
    get bottomRight(): Vector2;
}
