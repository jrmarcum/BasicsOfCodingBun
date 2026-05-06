interface Geometry {
    area(): number;
    perim(): number;
    toString(): string;
}

class Rect implements Geometry {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    area(): number { return this.width * this.height; }
    perim(): number { return 2 * this.width + 2 * this.height; }
    toString(): string { return `{${this.width} ${this.height}}`; }
}

class Circle implements Geometry {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    area(): number { return Math.PI * this.radius * this.radius; }
    perim(): number { return 2 * Math.PI * this.radius; }
    toString(): string { return `{${this.radius}}`; }
}

function measure(g: Geometry): void {
    console.log(g.toString());
    console.log(g.area());
    console.log(g.perim());
}

const r: Rect = new Rect(3, 4);
const c: Circle = new Circle(5);

measure(r);
measure(c);
