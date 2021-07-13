export declare class Color {
    readonly R: number;
    readonly G: number;
    readonly B: number;
    readonly A: number;
    static isValidChannel(v: number, isAlpha?: boolean): boolean;
    constructor(r: number, g: number, b: number, a: number);
    asString(): string;
    static fromString(str: string): Color;
}
