const s: string[] = new Array(3).fill("");
console.log("emp:", s);

s[0] = "a";
s[1] = "b";
s[2] = "c";
console.log("set:", s);
console.log("get:", s[2]);
console.log("len:", s.length);

s.push("d");
s.push("e", "f");
console.log("apd:", s);

const c: string[] = [...s];
console.log("cpy:", c);

let l: string[] = s.slice(2, 5);
console.log("sl1:", l);
l = s.slice(0, 5);
console.log("sl2:", l);
l = s.slice(2);
console.log("sl3:", l);

const t: string[] = ["g", "h", "i"];
console.log("dcl:", t);

const twoD: number[][] = [];
for (let i: number = 0; i < 3; i++) {
    const innerLen: number = i + 1;
    twoD.push(new Array(innerLen).fill(0));
    for (let j: number = 0; j < innerLen; j++) {
        twoD[i][j] = i + j;
    }
}
console.log("2d:", twoD);
