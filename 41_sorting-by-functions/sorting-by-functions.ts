interface Person {
    name: string;
    age: number;
}

const fruits: string[] = ["peach", "kiwi", "apple"];
fruits.sort((a: string, b: string): number => a.length - b.length);
console.log(fruits);

const people: Person[] = [
    { name: "Alice", age: 25 },
    { name: "Eve", age: 2 },
    { name: "Bob", age: 35 },
];
people.sort((a: Person, b: Person): number => a.age - b.age);
console.log("[" + people.map((p: Person): string => `{${p.name} ${p.age}}`).join(" ") + "]");
