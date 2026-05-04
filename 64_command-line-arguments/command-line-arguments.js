const argsWithProg = process.argv;
const argsWithoutProg = process.argv.slice(2);

const arg = process.argv[4];

console.log(argsWithProg);
console.log(argsWithoutProg);
console.log(arg);
