class Rect {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() { return this.width * this.height; }
    perim() { return 2 * this.width + 2 * this.height; }
    toString() { return `{${this.width} ${this.height}}`; }
}

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() { return Math.PI * this.radius * this.radius; }
    perim() { return 2 * Math.PI * this.radius; }
    toString() { return `{${this.radius}}`; }
}

function measure(g) {
    console.log(g.toString());
    console.log(g.area());
    console.log(g.perim());
}

const r = new Rect(3, 4);
const c = new Circle(5);

measure(r);
measure(c);
