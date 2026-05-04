# CLAUDE.md — BasicsOfCodingJavaScript

## Project Purpose

This is a JavaScript port of the [Go by Example](https://github.com/mmcgrana/gobyexample)
curriculum, created as part of a multi-language comparative study. The same set of programs
is implemented in multiple languages (Go, JavaScript, Python, Rust, etc.) so that readers
can compare syntax, language simplicity, lines of code, and runtime performance side by side.

**Go reference implementation:** https://github.com/jrmarcum/BasicsOfCodingGo

**Runtime:** Node.js (`node filename.js`). No build step required for any lesson.

## Licensing (Two-Tier)

| Content | License |
|---------|---------|
| Lesson source code and Markdown files (derived from Go by Example by Mark McGranaghan) | CC BY 3.0 — http://creativecommons.org/licenses/by/3.0/ |
| Original project structure, root files, NOTICE, CLAUDE.md, README.md | CC0 1.0 Universal — see LICENSE |

Every lesson `.md` file must include the full attribution footer (see template below).

## Directory Structure

```
BasicsOfCodingJavaScript/
├── .gitignore
├── LICENSE
├── NOTICE
├── README.md
├── CLAUDE.md
├── 01_hello-world/
│   ├── hello-world.js
│   └── hello-world.md
├── 02_values/
│   ├── values.js
│   └── values.md
├── 03_variables/
│   ├── variables.js
│   └── variables.md
├── 04_constants/
│   ├── constants.js
│   └── constants.md
├── 05_for/
│   ├── for.js
│   └── for.md
├── 06_if-else/
│   ├── if-else.js
│   └── if-else.md
├── 07_switch/
│   ├── switch.js
│   └── switch.md
├── 08_arrays/
│   ├── arrays.js
│   └── arrays.md
├── 09_slices/
│   ├── slices.js
│   └── slices.md
├── 10_maps/
│   ├── maps.js
│   └── maps.md
├── 11_range/
│   ├── range.js
│   └── range.md
├── 12_functions/
│   ├── functions.js
│   └── functions.md
├── 13_multiple-return-values/
│   ├── multiple-return-values.js
│   └── multiple-return-values.md
├── 14_variadic-functions/
│   ├── variadic-functions.js
│   └── variadic-functions.md
├── 15_closures/
│   ├── closures.js
│   └── closures.md
├── 16_recursion/
│   ├── recursion.js
│   └── recursion.md
├── 17_pointers/
│   ├── pointers.js
│   └── pointers.md
├── 18_structs/
│   ├── structs.js
│   └── structs.md
├── 19_methods/
│   ├── methods.js
│   └── methods.md
├── 20_interfaces/
│   ├── interfaces.js
│   └── interfaces.md
├── 21_errors/
│   ├── errors.js
│   └── errors.md
├── 40_sorting/
│   ├── sorting.js
│   └── sorting.md
├── 41_sorting-by-functions/
│   ├── sorting-by-functions.js
│   └── sorting-by-functions.md
├── 42_panic/
│   ├── panic.js
│   └── panic.md
├── 43_defer/
│   ├── defer.js
│   └── defer.md
├── 44_collection-functions/
│   ├── collection-functions.js
│   └── collection-functions.md
├── 45_string-functions/
│   ├── string-functions.js
│   └── string-functions.md
├── 46_string-formatting/
│   ├── string-formatting.js
│   └── string-formatting.md
├── 47_regular-expressions/
│   ├── regular-expressions.js
│   └── regular-expressions.md
├── 48_json/
│   ├── json.js
│   └── json.md
├── 49_xml/
│   ├── xml.js
│   └── xml.md
├── 50_time/
│   ├── time.js
│   └── time.md
├── 51_epoch/
│   ├── epoch.js
│   └── epoch.md
├── 52_time-formatting-parsing/
│   ├── time-formatting-parsing.js
│   └── time-formatting-parsing.md
├── 53_random-numbers/
│   ├── random-numbers.js
│   └── random-numbers.md
├── 54_number-parsing/
│   ├── number-parsing.js
│   └── number-parsing.md
├── 55_url-parsing/
│   ├── url-parsing.js
│   └── url-parsing.md
├── 56_sha1-hashes/
│   ├── sha1-hashes.js
│   └── sha1-hashes.md
├── 57_base64-encoding/
│   ├── base64-encoding.js
│   └── base64-encoding.md
├── 58_reading-files/
│   ├── reading-files.js
│   └── reading-files.md
├── 59_writing-files/
│   ├── writing-files.js
│   └── writing-files.md
├── 60_line-filters/
│   ├── line-filters.js
│   └── line-filters.md
├── 61_file-paths/
│   ├── file-paths.js
│   └── file-paths.md
├── 62_directories/
│   ├── directories.js
│   └── directories.md
├── 63_temporary-files-and-directories/
│   ├── temporary-files-and-directories.js
│   └── temporary-files-and-directories.md
├── 64_command-line-arguments/
│   ├── command-line-arguments.js
│   └── command-line-arguments.md
├── 65_command-line-flags/
│   ├── command-line-flags.js
│   └── command-line-flags.md
├── 66_command-line-subcommands/
│   ├── command-line-subcommands.js
│   └── command-line-subcommands.md
└── 67_environment-variables/
    ├── environment-variables.js
    └── environment-variables.md
```

## .gitignore

```
# Temporary files created by lesson examples (lessons 58-60)
tmp/

# Node.js toolchain artifacts
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
package-lock.json
yarn.lock

# Coverage and test output
coverage/
.nyc_output/

# Environment files
.env
.env.local

# OS artifacts
.DS_Store
Thumbs.db
```

**Entry explanations:**

| Entry | Purpose | Produced by |
|-------|---------|-------------|
| `tmp/` | Runtime directory for file I/O lesson examples | Lessons 58 (reading-files), 59 (writing-files), 60 (line-filters) |
| `node_modules/` | npm package installation directory | Lesson 49 (xml) requires `npm install xml2js` |
| `npm-debug.log*` / `yarn-*.log*` | Package manager error logs | Any npm/yarn operation |
| `package-lock.json` / `yarn.lock` | Dependency lockfiles (not tracked in lesson repos) | npm/yarn install |
| `coverage/` / `.nyc_output/` | Test coverage reports | Test runners (nyc, jest, etc.) |
| `.env` / `.env.local` | Environment variable files | Should never be committed |
| `.DS_Store` / `Thumbs.db` | OS metadata files | macOS / Windows Explorer |

## Per-File Attribution Footer Template

Every lesson `.md` file must end with this exact footer (after the closing `___`):

```
###### This work and the accompanying code was originally from Mark McGranaghan at [https://github.com/mmcgrana/gobyexample](https://github.com/mmcgrana/gobyexample) and licensed under a Creative Commons Attribution 3.0 Unported License [http://creativecommons.org/licenses/by/3.0/](http://creativecommons.org/licenses/by/3.0/). It has been used to provide an example base for multiple languages to provide a basis of comparitive programming language study for syntax, language simplicity, number of lines of code and operations required to perform the same task, as well as compile and run speed combined.
```

## Canonical .md Format Rules

Every lesson `.md` file must follow these rules exactly:

1. The file begins with `___` (three underscores). No blank line before it.
2. Separators are always `___` (exactly three underscores), never more or fewer.
3. The run instruction heading is `#### To run the program...` (h4). Use `___` above and below it.
4. The run command heading is `##### Run Command:` (h5), followed by a blank line, then the command as an inline backtick span on its own line.
5. The results heading is `##### Results:` (h5), followed by a blank line, then one inline backtick span per output line — never a fenced code block.
6. If the program produces multiple run commands (e.g., setup then run), add a separate `##### Run Command:` section for each, separated by `___`.
7. If output varies per run (timestamps, random numbers, temp file names), use a `##### Results:` heading with representative example output, then add an `#### Note:` section immediately after the closing `___`.
8. There must be a blank line between the final `___` and the `######` attribution footer.
9. The attribution footer is always the full `######` text shown above — do not shorten or omit it.
10. Do not add any content above the opening `___` (no h1 title, no front matter).

**Minimal template:**

```
___
#### To run the program, make sure you are in the program's folder, then use the Run Command below.
___
##### Run Command:

`$ node filename.js`

##### Results:

`output line 1`
`output line 2`
___

###### This work and the accompanying code was originally from Mark McGranaghan at [https://github.com/mmcgrana/gobyexample](https://github.com/mmcgrana/gobyexample) and licensed under a Creative Commons Attribution 3.0 Unported License [http://creativecommons.org/licenses/by/3.0/](http://creativecommons.org/licenses/by/3.0/). It has been used to provide an example base for multiple languages to provide a basis of comparitive programming language study for syntax, language simplicity, number of lines of code and operations required to perform the same task, as well as compile and run speed combined.
```

## Notes for Future Claude Sessions

- **Runtime:** Node.js only. No Deno, no browser APIs. Run with `node filename.js`.
- **Module system:** CommonJS (`require`). No `import`/`export` unless unavoidable.
- **No external packages** except lesson 49 (xml), which requires `npm install xml2js`.
- **JavaScript has no pointers** (lesson 17) — implement with object references and note the difference.
- **JavaScript has no defer** (lesson 43) — implement with `try/finally` and note the difference.
- **JavaScript has no panic/recover** (lesson 42) — implement with `throw`/`try/catch`.
- **JavaScript has no explicit interfaces** (lesson 20) — implement with duck typing.
- **JavaScript has no structs** (lesson 18) — implement with classes or plain objects.
- **Go's `fmt.Println` format vs JavaScript's `console.log`:** Go uses space-separated %v format for structs/arrays (e.g., `[1 2 3]`, `map[k:v]`). Node.js uses its own inspection format (e.g., `[ 1, 2, 3 ]`, `{ k: 'v' }`). Show the actual JavaScript output in the `.md` file.
- **Map iteration order:** Go maps are non-deterministic. JavaScript plain objects and Map preserve insertion order. No variability note needed for JS maps.
- **Variable output lessons** that need `#### Note:` sections: 07 (switch — time-dependent), 50 (time), 51 (epoch), 52 (time-formatting-parsing), 53 (random-numbers), 63 (temporary-files-and-directories).
