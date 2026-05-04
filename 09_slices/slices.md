___
#### To run the program, make sure you are in the program's folder, then use the Run Command below.
___
##### Run Command:

`$ node slices.js`

##### Results:

`emp: [ '', '', '' ]`
`set: [ 'a', 'b', 'c' ]`
`get: c`
`len: 3`
`apd: [ 'a', 'b', 'c', 'd', 'e', 'f' ]`
`cpy: [ 'a', 'b', 'c', 'd', 'e', 'f' ]`
`sl1: [ 'c', 'd', 'e' ]`
`sl2: [ 'a', 'b', 'c', 'd', 'e' ]`
`sl3: [ 'c', 'd', 'e', 'f' ]`
`dcl: [ 'g', 'h', 'i' ]`
`2d: [ [ 0 ], [ 1, 2 ], [ 2, 3, 4 ] ]`
___

#### Note: JavaScript arrays are dynamic by default — there is no separate "slice" type as in Go. The spread operator (`...`) is used for copying, and `Array.prototype.slice()` provides sub-array views (returning new arrays, not memory-sharing slices as in Go).
___

###### This work and the accompanying code was originally from Mark McGranaghan at [https://github.com/mmcgrana/gobyexample](https://github.com/mmcgrana/gobyexample) and licensed under a Creative Commons Attribution 3.0 Unported License [http://creativecommons.org/licenses/by/3.0/](http://creativecommons.org/licenses/by/3.0/). It has been used to provide an example base for multiple languages to provide a basis of comparitive programming language study for syntax, language simplicity, number of lines of code and operations required to perform the same task, as well as compile and run speed combined.
