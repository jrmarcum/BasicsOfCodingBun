function parseFlags(args, defaults) {
    const flags = { ...defaults };
    const tail = [];
    for (const arg of args) {
        if (arg.startsWith("-")) {
            const stripped = arg.replace(/^-+/, "");
            const eq = stripped.indexOf("=");
            const key = eq >= 0 ? stripped.slice(0, eq) : stripped;
            const val = eq >= 0 ? stripped.slice(eq + 1) : undefined;
            if (key in flags) {
                const def = defaults[key];
                if (typeof def === "boolean") {
                    flags[key] = val === undefined ? true : val === "true";
                } else if (typeof def === "number") {
                    flags[key] = parseInt(val, 10);
                } else {
                    flags[key] = val ?? "";
                }
            }
        } else {
            tail.push(arg);
        }
    }
    return { flags, tail };
}

const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("expected 'foo' or 'bar' subcommands");
    process.exit(1);
}

const subcmd = args[0];
const rest = args.slice(1);

if (subcmd === "foo") {
    const { flags, tail } = parseFlags(rest, { enable: false, name: "" });
    console.log("subcommand 'foo'");
    console.log("  enable:", flags.enable);
    console.log("  name:", flags.name);
    console.log("  tail:", tail);
} else if (subcmd === "bar") {
    const { flags, tail } = parseFlags(rest, { level: 0 });
    console.log("subcommand 'bar'");
    console.log("  level:", flags.level);
    console.log("  tail:", tail);
} else {
    console.log("expected 'foo' or 'bar' subcommands");
    process.exit(1);
}
