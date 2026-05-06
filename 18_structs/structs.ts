interface Person {
    name: string;
    age: number;
}

interface Dog {
    name: string;
    isGood: boolean;
}

function person(name: string, age: number = 0): Person {
    return { name, age };
}

function newPerson(name: string): Person {
    const p: Person = person(name);
    p.age = 42;
    return p;
}

function fmtPerson(p: Person): string {
    return `{${p.name} ${p.age}}`;
}

console.log(fmtPerson(person("Bob", 20)));
console.log(fmtPerson(person("Alice", 30)));
console.log(fmtPerson(person("Fred")));
console.log(fmtPerson(newPerson("Ann")));
console.log(fmtPerson(newPerson("Jon")));

const s: Person = person("Sean", 50);
console.log(s.name);
console.log(s.age);

s.age = 51;
console.log(s.age);

const dog: Dog = { name: "Rex", isGood: true };
console.log(`{${dog.name} ${dog.isGood}}`);
