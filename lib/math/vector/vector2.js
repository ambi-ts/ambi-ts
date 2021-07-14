export class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return "[Vector2]" + this.x + "," + this.y;
    }
    get magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    normalize() {
        const magnitude = this.magnitude;
        this.x /= magnitude;
        this.y /= magnitude;
        return this;
    }
    static normalize(a) {
        const magnitude = a.magnitude;
        return new Vector2(a.x / magnitude, a.y / magnitude);
    }
    distanceSquare(v) {
        return Vector2.distanceSquare(this, v);
    }
    static distanceSquare(a, b) {
        const cx = b.x - a.x;
        const cy = b.y - a.y;
        return cx * cx + cy * cy;
    }
    static equals(a, b) {
        return a.equals(b);
    }
    equals(v) {
        return this.x == v.x && this.y == v.y;
    }
    static notEquals(a, b) {
        return a.notEquals(b);
    }
    notEquals(v) {
        return this.x != v.x || this.y != v.y;
    }
    static lessThan(a, b) {
        return a.lessThan(b);
    }
    lessThan(v) {
        return this.x < v.x && this.y < v.y;
    }
    static add(a, b) {
        return a.add(b);
    }
    add(p) {
        return new Vector2(this.x + p.x, this.y + p.y);
    }
    static sub(a, b) {
        return a.sub(b);
    }
    sub(p) {
        return new Vector2(this.x - p.x, this.y - p.y);
    }
    static times(a, b) {
        return a.times(b);
    }
    times(v) {
        return new Vector2(this.x * v.x, this.y * v.y);
    }
    static min(a, b) {
        return new Vector2(Math.min(a.x, b.x), Math.min(a.y, b.y));
    }
    static max(a, b) {
        return new Vector2(Math.max(a.x, b.x), Math.max(a.y, b.y));
    }
}
Vector2.ZERO = new Vector2(0, 0);
Vector2.zero = new Vector2(0, 0);
Vector2.one = new Vector2(1, 1);
Vector2.right = new Vector2(1, 0);
Vector2.left = new Vector2(-1, 0);
Vector2.up = new Vector2(0, 1);
Vector2.down = new Vector2(0, -1);
//# sourceMappingURL=vector2.js.map