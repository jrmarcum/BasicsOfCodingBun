class Rect {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perim() {
        return 2 * this.width + 2 * this.height;
    }
}

const r = new Rect(10, 5);
console.log("area:", r.area());
console.log("perim:", r.perim());
