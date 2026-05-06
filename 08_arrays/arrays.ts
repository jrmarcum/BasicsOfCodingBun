const a: number[] = new Array(5).fill(0);
console.log("emp:", a);

a[4] = 100;
console.log("set:", a);
console.log("get:", a[4]);
console.log("len:", a.length);

const b: number[] = [1, 2, 3, 4, 5];
console.log("dcl:", b);

const twoD: number[][] = Array.from({ length: 2 }, () => new Array(3).fill(0));
for (let row: number = 0; row < 2; row++) {
    for (let col: number = 0; col < 3; col++) {
        twoD[row][col] = row + col;
    }
}
console.log("2d:", twoD);
