___
#### To run the program, make sure you are in the program's folder, then use the Run Command below.
___
##### Run Command:

`$ node command-line-subcommands.js foo -enable -name=joe a1 a2`

##### Results:

`subcommand 'foo'`
`  enable: true`
`  name: joe`
`  tail: [ 'a1', 'a2' ]`
___

##### Run Command:

`$ node command-line-subcommands.js bar -level=8 a1`

##### Results:

`subcommand 'bar'`
`  level: 8`
`  tail: [ 'a1' ]`
___

#### Note: JavaScript has no built-in subcommand routing. This lesson implements it manually by reading `process.argv[2]` as the subcommand name and parsing the remaining arguments with a custom `parseFlags` function. The `tail` array uses Node.js's inspection format (`[ 'a1', 'a2' ]`) whereas Go prints `[a1 a2]`.
___

###### This work and the accompanying code was originally from Mark McGranaghan at [https://github.com/mmcgrana/gobyexample](https://github.com/mmcgrana/gobyexample) and licensed under a Creative Commons Attribution 3.0 Unported License [http://creativecommons.org/licenses/by/3.0/](http://creativecommons.org/licenses/by/3.0/). It has been used to provide an example base for multiple languages to provide a basis of comparitive programming language study for syntax, language simplicity, number of lines of code and operations required to perform the same task, as well as compile and run speed combined.
