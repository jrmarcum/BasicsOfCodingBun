const strs = ["peach", "apple", "pear", "plum"];

console.log(strs.indexOf("pear"));

console.log(strs.includes("grape"));

console.log(strs.some(v => v.startsWith("p")));

console.log(strs.every(v => v.startsWith("p")));

console.log(strs.filter(v => v.startsWith("p")));

console.log(strs.map(v => v.toUpperCase()));
