process.env.FOO = "1";
console.log("FOO:", process.env.FOO);
console.log("BAR:", process.env.BAR || "");

console.log();
for (const key of Object.keys(process.env)) {
    console.log(key);
}
