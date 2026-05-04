___
#### To run the program, make sure you are in the program's folder, then use the Run Command below.
___
##### Run Command:

`$ node defer.js`

##### Results:

`counting`
`done`
`4`
`3`
`2`
`1`
`0`
___

#### Note: JavaScript has no built-in `defer` keyword. This lesson simulates Go's defer behavior using a `deferred` array that stores functions and executes them in LIFO (last-in, first-out) order after the main work completes. In real JavaScript code, `try/finally` is the idiomatic pattern for guaranteed cleanup (equivalent to the most common use of `defer` in Go).
___

###### This work and the accompanying code was originally from Mark McGranaghan at [https://github.com/mmcgrana/gobyexample](https://github.com/mmcgrana/gobyexample) and licensed under a Creative Commons Attribution 3.0 Unported License [http://creativecommons.org/licenses/by/3.0/](http://creativecommons.org/licenses/by/3.0/). It has been used to provide an example base for multiple languages to provide a basis of comparitive programming language study for syntax, language simplicity, number of lines of code and operations required to perform the same task, as well as compile and run speed combined.
