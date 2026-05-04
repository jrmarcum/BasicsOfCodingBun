___
#### To run the program, make sure you are in the program's folder, then use the Run Command below.
___
##### Run Command:

`$ node maps.js`

##### Results:

`map: { k1: 7, k2: 13 }`
`v1: 7`
`v3: 0`
`len: 2`
`map: { k1: 7 }`
`prs: false`
`map: { foo: 1, bar: 2 }`
___

#### Note: JavaScript plain objects are used here as the key-value map equivalent. Unlike Go maps, JavaScript object keys preserve insertion order. Accessing a missing key returns `undefined`; the program uses a conditional to return `0` to match Go's zero-value behavior.
___

###### This work and the accompanying code was originally from Mark McGranaghan at [https://github.com/mmcgrana/gobyexample](https://github.com/mmcgrana/gobyexample) and licensed under a Creative Commons Attribution 3.0 Unported License [http://creativecommons.org/licenses/by/3.0/](http://creativecommons.org/licenses/by/3.0/). It has been used to provide an example base for multiple languages to provide a basis of comparitive programming language study for syntax, language simplicity, number of lines of code and operations required to perform the same task, as well as compile and run speed combined.
