interface Response1 {
    Page: number;
    Fruits: string[];
}

interface Response2 {
    page: number;
    fruits: string[];
}

interface ParsedData {
    num: number;
    strs: string[];
}

interface FruitMap {
    [key: string]: number;
}

console.log(JSON.stringify(true));
console.log(JSON.stringify(1));
console.log(JSON.stringify(2.34));
console.log(JSON.stringify("vector"));

const slcD: string[] = ["apple", "peach", "pear"];
console.log(JSON.stringify(slcD));

const mapD: FruitMap = { apple: 5, lettuce: 7 };
console.log(JSON.stringify(mapD));

const res1D: Response1 = { Page: 1, Fruits: ["apple", "peach", "pear"] };
console.log(JSON.stringify(res1D));

const res2D: Response2 = { page: 1, fruits: ["apple", "peach", "pear"] };
console.log(JSON.stringify(res2D));

const byt: string = '{"num":6.13,"strs":["a","b"]}';
const dat: ParsedData = JSON.parse(byt);
console.log(dat);

const num: number = dat["num"];
console.log(num);

const str1: string = dat["strs"][0];
console.log(str1);

const str: string = '{"page": 1, "fruits": ["apple", "peach"]}';
const res: Response2 = JSON.parse(str);
console.log(`{${res.page} [${res.fruits.join(" ")}]}`);
console.log(res.fruits[0]);

const enc: FruitMap = { apple: 5, lettuce: 7 };
console.log(JSON.stringify(enc));
