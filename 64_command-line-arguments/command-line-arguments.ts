const argsWithProg: string[] = process.argv;
const argsWithoutProg: string[] = process.argv.slice(2);

const arg: string = process.argv[4];

console.log(argsWithProg);
console.log(argsWithoutProg);
console.log(arg);
