___
#### To run the program, make sure you are in the program's folder, then use the Run Command below.
___
##### Run Command:

`$ node string-formatting.js`

##### Results:

`{1 2}`
`{x:1 y:2}`
`{ x: 1, y: 2 }`
`object`
`true`
`123`
`1110`
`!`
`1c8`
`78.900000`
`1.234000e+08`
`1.234000E+08`
`"string"`
`"\"string\""`
`6865782074686973`
`|    12|   345|`
`|  1.20|  3.45|`
`|1.20  |3.45  |`
`|   foo|     b|`
`|foo   |b     |`
`a string`
`an error`
___

#### Note: The last line (`an error`) is written to stderr, not stdout. JavaScript uses template literals for string interpolation, `padStart`/`padEnd` for width formatting, `toFixed` for float precision, `toString(base)` for base conversions, and `util.inspect` for object representation. Unlike Go's `%T`, `typeof` returns generic type categories (`"object"`, `"number"`) rather than package-qualified type names.
___

###### This work and the accompanying code was originally from Mark McGranaghan at [https://github.com/mmcgrana/gobyexample](https://github.com/mmcgrana/gobyexample) and licensed under a Creative Commons Attribution 3.0 Unported License [http://creativecommons.org/licenses/by/3.0/](http://creativecommons.org/licenses/by/3.0/). It has been used to provide an example base for multiple languages to provide a basis of comparitive programming language study for syntax, language simplicity, number of lines of code and operations required to perform the same task, as well as compile and run speed combined.
