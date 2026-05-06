const nums: number[] = [2, 3, 4];
let sum: number = 0;
for (const num of nums) {
    sum += num;
}
console.log("sum:", sum);

for (const [i, num] of nums.entries()) {
    if (num === 3) {
        console.log("index:", i);
    }
}

const kvs: { [key: string]: string } = { a: "apple", b: "banana" };
for (const [k, v] of Object.entries(kvs)) {
    console.log(`${k} -> ${v}`);
}

for (const k of Object.keys(kvs)) {
    console.log("key:", k);
}

for (const [i, c] of [...'go'].entries()) {
    console.log(i, c.codePointAt(0));
}
