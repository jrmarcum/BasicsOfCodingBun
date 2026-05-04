function person(name, age = 0) {
    return { name, age };
}

function newPerson(name) {
    const p = person(name);
    p.age = 42;
    return p;
}

function fmtPerson(p) {
    return `{${p.name} ${p.age}}`;
}

console.log(fmtPerson(person("Bob", 20)));
console.log(fmtPerson(person("Alice", 30)));
console.log(fmtPerson(person("Fred")));
console.log(fmtPerson(newPerson("Ann")));
console.log(fmtPerson(newPerson("Jon")));

const s = person("Sean", 50);
console.log(s.name);
console.log(s.age);

s.age = 51;
console.log(s.age);

const dog = { name: "Rex", isGood: true };
console.log(`{${dog.name} ${dog.isGood}}`);
