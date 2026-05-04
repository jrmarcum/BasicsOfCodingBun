const fruits = ["peach", "kiwi", "apple"];
fruits.sort((a, b) => a.length - b.length);
console.log(fruits);

const people = [
    { name: "Alice", age: 25 },
    { name: "Eve", age: 2 },
    { name: "Bob", age: 35 },
];
people.sort((a, b) => a.age - b.age);
console.log("[" + people.map(p => `{${p.name} ${p.age}}`).join(" ") + "]");
