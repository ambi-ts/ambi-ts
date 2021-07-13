export class List {
    constructor(items = []) {
        this.items = items;
    }
    clear() {
        this.items = [];
    }
    get size() {
        return this.items.length;
    }
    insert(index, value) {
        this.items[index] = value;
    }
    add(value) {
        this.items.push(value);
    }
    get(index) {
        return this.items[index];
    }
    sort(callback) {
        return this.items.sort((a, b) => callback(a, b));
    }
    forEach(callback) {
        this.items.forEach((item) => callback(item));
    }
    findAll(callback) {
        var list = new List();
        list.items = this.items.filter((item) => callback(item));
        return list;
    }
    reverse() {
        return this.items.reverse();
    }
}
//# sourceMappingURL=list.js.map