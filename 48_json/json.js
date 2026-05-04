console.log(JSON.stringify(true));
console.log(JSON.stringify(1));
console.log(JSON.stringify(2.34));
console.log(JSON.stringify("vector"));

const slcD = ["apple", "peach", "pear"];
console.log(JSON.stringify(slcD));

const mapD = { apple: 5, lettuce: 7 };
console.log(JSON.stringify(mapD));

const res1D = { Page: 1, Fruits: ["apple", "peach", "pear"] };
console.log(JSON.stringify(res1D));

const res2D = { page: 1, fruits: ["apple", "peach", "pear"] };
console.log(JSON.stringify(res2D));

const byt = '{"num":6.13,"strs":["a","b"]}';
const dat = JSON.parse(byt);
console.log(dat);

const num = dat["num"];
console.log(num);

const str1 = dat["strs"][0];
console.log(str1);

const str = '{"page": 1, "fruits": ["apple", "peach"]}';
const res = JSON.parse(str);
console.log(`{${res.page} [${res.fruits.join(" ")}]}`);
console.log(res.fruits[0]);

const enc = { apple: 5, lettuce: 7 };
console.log(JSON.stringify(enc));
