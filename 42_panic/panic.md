#### The stack trace lines and file paths will vary with each run and environment. The program prints `5` to stdout, then throws an unhandled error which Bun reports to stderr before exiting with code 1. JavaScript uses `throw`/`try/catch` as the equivalent of Go's `panic`/`recover`. Go's `recover()` maps to a `try/catch` block in JavaScript.
___
##### Run Command:

`$ bun panic.js`

`$ bun panic.ts`

##### Results:

`5`
`1 | function mustPositive(n: number): number {`
`2 |     if (n <= 0) {`
`3 |         throw new Error(\`expected positive, got ${n}\`);`
`                      ^`
`error: expected positive, got -1`
`      at mustPositive (.../panic.ts:3:19)`
`      at .../panic.ts:10:1`
``
`Bun v1.4.5 (Windows x64)`
