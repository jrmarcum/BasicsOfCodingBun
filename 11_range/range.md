___
#### To run the program, make sure you are in the program's folder, then use the Run Command below.
___
##### Run Command:

`$ node range.js`

##### Results:

`sum: 6`
`index: 1`
`a -> apple`
`b -> banana`
`key: a`
`key: b`
`0 103`
`1 111`
___

#### Note: JavaScript plain objects and the `for...of` loop over `Object.entries()` and `Object.keys()` preserve insertion order, making map iteration deterministic — unlike Go's non-deterministic map range. The final loop iterates over the string `'go'`, printing the Unicode code point of each character (`g`=103, `o`=111).
___

###### This work and the accompanying code was originally from Mark McGranaghan at [https://github.com/mmcgrana/gobyexample](https://github.com/mmcgrana/gobyexample) and licensed under a Creative Commons Attribution 3.0 Unported License [http://creativecommons.org/licenses/by/3.0/](http://creativecommons.org/licenses/by/3.0/). It has been used to provide an example base for multiple languages to provide a basis of comparitive programming language study for syntax, language simplicity, number of lines of code and operations required to perform the same task, as well as compile and run speed combined.
