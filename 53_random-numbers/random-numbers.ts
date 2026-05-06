function mulberry32(seed: number): () => number {
    return function(): number {
        seed |= 0;
        seed = seed + 0x6D2B79F5 | 0;
        let t: number = Math.imul(seed ^ seed >>> 15, 1 | seed);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}

process.stdout.write(Math.floor(Math.random() * 100) + ",");
process.stdout.write("" + Math.floor(Math.random() * 100));
console.log();

console.log(Math.random());

process.stdout.write((Math.random() * 5 + 5) + ",");
process.stdout.write("" + (Math.random() * 5 + 5));
console.log();

const r1: () => number = mulberry32(42);
process.stdout.write(Math.floor(r1() * 100) + ",");
process.stdout.write("" + Math.floor(r1() * 100));
console.log();

const r2: () => number = mulberry32(42);
process.stdout.write(Math.floor(r2() * 100) + ",");
process.stdout.write("" + Math.floor(r2() * 100));
console.log();
