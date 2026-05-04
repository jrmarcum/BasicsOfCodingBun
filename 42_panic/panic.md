___
#### To run the program, make sure you are in the program's folder, then use the Run Command below.
___
##### Run Command:

`$ node panic.js`

##### Results:

`5`
`/path/to/panic.js:3`
`        throw new Error(\`expected positive, got ${n}\`);`
`              ^`
`Error: expected positive, got -1`
`    at mustPositive (.../panic.js:3:15)`
`    at Object.<anonymous> (.../panic.js:9:1)`
___

#### Note: The stack trace lines and file paths will vary with each run and environment. The program prints `5` to stdout, then throws an unhandled error which Node.js reports to stderr before exiting with code 1. JavaScript uses `throw`/`try/catch` as the equivalent of Go's `panic`/`recover`. Go's `recover()` maps to a `try/catch` block in JavaScript.
___

###### This work and the accompanying code was originally from Mark McGranaghan at [https://github.com/mmcgrana/gobyexample](https://github.com/mmcgrana/gobyexample) and licensed under a Creative Commons Attribution 3.0 Unported License [http://creativecommons.org/licenses/by/3.0/](http://creativecommons.org/licenses/by/3.0/). It has been used to provide an example base for multiple languages to provide a basis of comparitive programming language study for syntax, language simplicity, number of lines of code and operations required to perform the same task, as well as compile and run speed combined.
