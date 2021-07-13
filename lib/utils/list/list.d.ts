export declare class List<T> {
    private items;
    constructor(items?: Array<T>);
    clear(): void;
    get size(): number;
    insert(index: number, value: T): void;
    add(value: T): void;
    get(index: number): T;
    sort(callback: (a: T, b: T) => number): Array<T>;
    forEach(callback: (item: T) => void): void;
    findAll(callback: (item: T) => boolean): List<T>;
    reverse(): Array<T>;
}
