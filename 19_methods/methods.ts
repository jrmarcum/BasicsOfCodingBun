class Rect {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }

    perim(): number {
        return 2 * this.width + 2 * this.height;
    }
}

const r: Rect = new Rect(10, 5);
console.log("area:", r.area());
console.log("perim:", r.perim());
