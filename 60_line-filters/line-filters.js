const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    terminal: false,
});

rl.on("line", (line) => {
    console.log(line.toUpperCase());
});

rl.on("error", (err) => {
    process.stderr.write(`error: ${err.message}\n`);
    process.exit(1);
});
