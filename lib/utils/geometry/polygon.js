import { Winding } from ".";
export class Polygon {
    constructor(vertices) {
        this.vertices = vertices;
    }
    area() {
        return Math.abs(this.signedDoubleArea() * 0.5);
    }
    polyWinding() {
        const signedDoubleArea = this.signedDoubleArea();
        if (signedDoubleArea < 0) {
            return Winding.CLOCKWISE;
        }
        if (signedDoubleArea > 0) {
            return Winding.COUNTERCLOCKWISE;
        }
        return Winding.NONE;
    }
    signedDoubleArea() {
        let nextIndex;
        const n = this.vertices.size;
        let signedDoubleArea = 0;
        for (let index = 0; index < n; index++) {
            nextIndex = (index + 1) % n;
            const point = this.vertices.get(index);
            const next = this.vertices.get(nextIndex);
            signedDoubleArea += point.x * next.y - next.x * point.y;
        }
        return signedDoubleArea;
    }
}
//# sourceMappingURL=polygon.js.map