import { Vector2 } from "math/vector";
import { Color, IAwake, Rect } from "utils";
export declare class Canvas implements IAwake {
    readonly Size: Rect;
    private _elm;
    private _ctx;
    get element(): HTMLCanvasElement;
    get context(): CanvasRenderingContext2D;
    constructor(Size: Rect);
    awake(): void;
    fillRect(rect: Rect, color: Color): void;
    clearRect(rect: Rect): void;
    fillCircle(center: Vector2, radius: number, color: Color): void;
    setStyle(style: Partial<CSSStyleDeclaration>): void;
    calcLocalPointFrom(globalPoint: Vector2): Vector2 | null;
}
