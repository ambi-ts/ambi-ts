import { Vector2 } from "math/vector";
export class Circle {
    constructor(centerX, centerY, radius) {
        this.center = new Vector2(centerX, centerY);
        this.radius = radius;
    }
    toString() {
        return "Circle (center: " + this.center + "; radius: " + this.radius + ")";
    }
}
//# sourceMappingURL=circle.js.map