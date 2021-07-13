import { Vector2 } from "math";
export class Rect {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    get left() {
        return this.x;
    }
    get right() {
        return this.x + this.width;
    }
    get top() {
        return this.y;
    }
    get bottom() {
        return this.y + this.height;
    }
    get topLeft() {
        return new Vector2(this.left, this.top);
    }
    get bottomRight() {
        return new Vector2(this.right, this.bottom);
    }
}
Rect.zero = new Rect(0, 0, 0, 0);
Rect.one = new Rect(1, 1, 1, 1);
//# sourceMappingURL=rect.js.map