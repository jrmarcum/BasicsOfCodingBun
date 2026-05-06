const strs: string[] = ["peach", "apple", "pear", "plum"];

console.log(strs.indexOf("pear"));

console.log(strs.includes("grape"));

console.log(strs.some((v: string): boolean => v.startsWith("p")));

console.log(strs.every((v: string): boolean => v.startsWith("p")));

console.log(strs.filter((v: string): boolean => v.startsWith("p")));

console.log(strs.map((v: string): string => v.toUpperCase()));
