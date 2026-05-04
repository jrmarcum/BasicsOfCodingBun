# Basics of Coding JavaScript

A JavaScript port of the [Go by Example](https://github.com/mmcgrana/gobyexample) curriculum, used as part of a multi-language comparative study examining syntax, language simplicity, lines of code, and runtime performance for the same set of example programs.

## Prerequisites

Install [Node.js](https://nodejs.org/) (v18 or later recommended). Verify your installation:

```sh
$ node --version
v22.0.0
```

## How to Run the Programs

Each lesson lives in its own numbered folder. Navigate into the lesson folder and run the `.js` file with `node`:

```sh
$ cd 01_hello-world
$ node hello-world.js
hello world
```

Every lesson folder contains a `.md` file with the exact run command and expected output for that lesson.

## Lessons

| # | Topic |
|---|-------|
| 01 | hello-world |
| 02 | values |
| 03 | variables |
| 04 | constants |
| 05 | for |
| 06 | if-else |
| 07 | switch |
| 08 | arrays |
| 09 | slices |
| 10 | maps |
| 11 | range |
| 12 | functions |
| 13 | multiple-return-values |
| 14 | variadic-functions |
| 15 | closures |
| 16 | recursion |
| 17 | pointers |
| 18 | structs |
| 19 | methods |
| 20 | interfaces |
| 21 | errors |
| 40 | sorting |
| 41 | sorting-by-functions |
| 42 | panic |
| 43 | defer |
| 44 | collection-functions |
| 45 | string-functions |
| 46 | string-formatting |
| 47 | regular-expressions |
| 48 | json |
| 49 | xml |
| 50 | time |
| 51 | epoch |
| 52 | time-formatting-parsing |
| 53 | random-numbers |
| 54 | number-parsing |
| 55 | url-parsing |
| 56 | sha1-hashes |
| 57 | base64-encoding |
| 58 | reading-files |
| 59 | writing-files |
| 60 | line-filters |
| 61 | file-paths |
| 62 | directories |
| 63 | temporary-files-and-directories |
| 64 | command-line-arguments |
| 65 | command-line-flags |
| 66 | command-line-subcommands |
| 67 | environment-variables |

## Attribution

Lesson content is adapted from **Go by Example** by Mark McGranaghan
([https://github.com/mmcgrana/gobyexample](https://github.com/mmcgrana/gobyexample))
and is used under the Creative Commons Attribution 3.0 Unported License.

The Go reference implementation used as the basis for this port:
[https://github.com/jrmarcum/BasicsOfCodingGo](https://github.com/jrmarcum/BasicsOfCodingGo)

## License

| Content | License |
|---------|---------|
| Lesson source code and Markdown files (derived from Go by Example) | [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/) |
| Original project structure, root files, and additions | [CC0 1.0 Universal](LICENSE) |
