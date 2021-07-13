export class Color {
    constructor(r, g, b, a) {
        if (!Color.isValidChannel(r)) {
            throw new Error("Provided incorrect value for Red channel");
        }
        if (!Color.isValidChannel(g)) {
            throw new Error("Provided incorrect value for Green channel");
        }
        if (!Color.isValidChannel(b)) {
            throw new Error("Provided incorrect value for Blue channel");
        }
        if (!Color.isValidChannel(a, true)) {
            throw new Error("Provided incorrect value for Alpha channel");
        }
        this.R = r;
        this.G = g;
        this.B = b;
        this.A = a;
    }
    static isValidChannel(v, isAlpha = false) {
        const max = isAlpha ? 1 : 255;
        if (v < 0 || v > max) {
            return false;
        }
        if (!isAlpha && v % 1 !== 0) {
            return false;
        }
        return true;
    }
    asString() {
        return `rgba(${this.R}, ${this.G}, ${this.B}, ${this.A})`;
    }
    static fromString(str) {
        const arr = str.replace(new RegExp(/\(|\)|[A-Za-z]/g), "").split(",");
        const r = Number(arr[0]), g = Number(arr[1]), b = Number(arr[2]), a = Number(arr[3]);
        if (isNaN(r) || isNaN(g) || isNaN(b) || isNaN(a)) {
            throw new Error("Invalid string");
        }
        return new Color(r, g, b, a);
    }
}
//# sourceMappingURL=color.js.map