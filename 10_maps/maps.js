const m = {};
m["k1"] = 7;
m["k2"] = 13;
console.log("map:", m);

const v1 = m["k1"];
console.log("v1:", v1);

const v3 = m["k3"] !== undefined ? m["k3"] : 0;
console.log("v3:", v3);

console.log("len:", Object.keys(m).length);

delete m["k2"];
console.log("map:", m);

const prs = "k2" in m;
console.log("prs:", prs);

const n = { foo: 1, bar: 2 };
console.log("map:", n);
