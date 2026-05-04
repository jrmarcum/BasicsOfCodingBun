___
#### To run the program, make sure you are in the program's folder, then use the Run Command below.
___
##### Run Command:

`$ node pointers.js`

##### Results:

`initial: 1`
`zeroval: 1`
`zeroref: 0`
`reference: { val: 0 }`
___

#### Note: JavaScript has no pointers. Primitive values (numbers, strings, booleans) are always passed by value. Objects are passed by reference. This lesson demonstrates the equivalent concept: `zeroval` receives a copy of the number (no effect on the original), while `zeroref` receives an object reference and mutates it, mirroring Go's pointer receiver behavior. There are no memory addresses to print.
___

###### This work and the accompanying code was originally from Mark McGranaghan at [https://github.com/mmcgrana/gobyexample](https://github.com/mmcgrana/gobyexample) and licensed under a Creative Commons Attribution 3.0 Unported License [http://creativecommons.org/licenses/by/3.0/](http://creativecommons.org/licenses/by/3.0/). It has been used to provide an example base for multiple languages to provide a basis of comparitive programming language study for syntax, language simplicity, number of lines of code and operations required to perform the same task, as well as compile and run speed combined.
