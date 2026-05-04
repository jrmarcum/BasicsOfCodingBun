___
#### To run the program, make sure you are in the program's folder, then use the Run Command below.
___
##### Run Command:

`$ node command-line-flags.js -word=opt -numb=7 -fork -svar=flag`

##### Results:

`word: opt`
`numb: 7`
`fork: true`
`svar: flag`
`tail: []`
___

#### Note: JavaScript has no built-in `flag` package equivalent. This lesson parses `process.argv` manually, supporting `-key=value` and bare `-flag` syntax. For production use, libraries such as `minimist` or `yargs` provide more complete flag parsing. The output format exactly matches Go's `flag` package output.
___

###### This work and the accompanying code was originally from Mark McGranaghan at [https://github.com/mmcgrana/gobyexample](https://github.com/mmcgrana/gobyexample) and licensed under a Creative Commons Attribution 3.0 Unported License [http://creativecommons.org/licenses/by/3.0/](http://creativecommons.org/licenses/by/3.0/). It has been used to provide an example base for multiple languages to provide a basis of comparitive programming language study for syntax, language simplicity, number of lines of code and operations required to perform the same task, as well as compile and run speed combined.
