import { Vector2 } from "math/vector";
import { Color, IAwake, Rect } from "utils";

export class Canvas implements IAwake {
  private _elm: HTMLCanvasElement;
  private _ctx: CanvasRenderingContext2D;

  public get element(): HTMLCanvasElement {
    return this._elm;
  }

  public get context(): CanvasRenderingContext2D {
    return this._ctx;
  }

  constructor(public readonly Size: Rect) {}

  public awake(): void {
    const canvas = document.createElement("canvas");
    canvas.setAttribute("width", `${this.Size.x}px`);
    canvas.setAttribute("height", `${this.Size.y}px`);

    document.body.appendChild(canvas);
    this._elm = canvas;

    const ctx = this._elm.getContext("2d");
    if (!ctx) {
      throw new Error("Context identifier is not supported");
    }

    this._ctx = ctx;
  }

  public fillRect(rect: Rect, color: Color): void {
    this._ctx.beginPath();
    this._ctx.fillStyle = color.asString();
    this._ctx.rect(rect.x, rect.y, rect.width, rect.height);
    this._ctx.fill();
  }

  public clearRect(rect: Rect): void {
    this._ctx.clearRect(rect.x, rect.y, rect.width, rect.height);
  }

  public fillCircle(center: Vector2, radius: number, color: Color): void {
    this._ctx.beginPath();
    this._ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
    this._ctx.fillStyle = color.asString();
    this._ctx.fill();
  }

  public setStyle(style: Partial<CSSStyleDeclaration>): void {
    for (const key in style) {
      if (!Object.hasOwnProperty.call(style, key)) {
        continue;
      }

      if (!style[key]) {
        continue;
      }

      this._elm.style[key] = style[key] as string;
    }
  }

  public calcLocalPointFrom(globalPoint: Vector2): Vector2 | null {
    const canvasRect = this._elm.getBoundingClientRect();
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const offset = {
      top: canvasRect.top + scrollTop,
      left: canvasRect.left + scrollLeft,
    };

    const x = globalPoint.x - offset.left;
    const y = globalPoint.y - offset.top;

    if (x < 0 || y < 0) {
      return null;
    }

    if (
      x > offset.left + canvasRect.width ||
      y > offset.top + canvasRect.height
    ) {
      return null;
    }

    return new Vector2(x, y);
  }
}
