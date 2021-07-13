import { Vector2 } from "math/vector";
export class Canvas {
    constructor(Size) {
        this.Size = Size;
    }
    get element() {
        return this._elm;
    }
    get context() {
        return this._ctx;
    }
    awake() {
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
    fillRect(rect, color) {
        this._ctx.beginPath();
        this._ctx.fillStyle = color.asString();
        this._ctx.rect(rect.x, rect.y, rect.width, rect.height);
        this._ctx.fill();
    }
    clearRect(rect) {
        this._ctx.clearRect(rect.x, rect.y, rect.width, rect.height);
    }
    fillCircle(center, radius, color) {
        this._ctx.beginPath();
        this._ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
        this._ctx.fillStyle = color.asString();
        this._ctx.fill();
    }
    setStyle(style) {
        for (const key in style) {
            if (!Object.hasOwnProperty.call(style, key)) {
                continue;
            }
            if (!style[key]) {
                continue;
            }
            this._elm.style[key] = style[key];
        }
    }
    calcLocalPointFrom(globalPoint) {
        const canvasRect = this._elm.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
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
        if (x > offset.left + canvasRect.width ||
            y > offset.top + canvasRect.height) {
            return null;
        }
        return new Vector2(x, y);
    }
}
//# sourceMappingURL=canvas.js.map