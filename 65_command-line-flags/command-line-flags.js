const flags = { word: "foo", numb: 42, fork: false, svar: "bar" };
const tail = [];

for (const arg of process.argv.slice(2)) {
    if (arg.startsWith("-")) {
        const stripped = arg.replace(/^-+/, "");
        const eq = stripped.indexOf("=");
        const key = eq >= 0 ? stripped.slice(0, eq) : stripped;
        const val = eq >= 0 ? stripped.slice(eq + 1) : undefined;

        if (key === "word")      flags.word = val;
        else if (key === "numb") flags.numb = parseInt(val, 10);
        else if (key === "fork") flags.fork = val === undefined ? true : val === "true";
        else if (key === "svar") flags.svar = val;
    } else {
        tail.push(arg);
    }
}

console.log("word:", flags.word);
console.log("numb:", flags.numb);
console.log("fork:", flags.fork);
console.log("svar:", flags.svar);
console.log("tail:", tail);
