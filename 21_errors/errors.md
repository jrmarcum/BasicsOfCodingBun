___
#### To run the program, make sure you are in the program's folder, then use the Run Command below.
___
##### Run Command:

`$ node errors.js`

##### Results:

`f1 worked: 10`
`f1 failed: can't work with 42`
`f2 worked: 10`
`f2 failed: 42 - can't work with 42`
`42`
`can't work with 42`
___

#### Note: JavaScript typically uses `throw`/`try/catch` for error handling. This lesson demonstrates the Go idiom of returning errors as values by returning `{ val, err }` objects and using destructuring. Custom error types extend the built-in `Error` class. Type checking uses `instanceof` in place of Go's type assertion `e.(*argError)`.
___

###### This work and the accompanying code was originally from Mark McGranaghan at [https://github.com/mmcgrana/gobyexample](https://github.com/mmcgrana/gobyexample) and licensed under a Creative Commons Attribution 3.0 Unported License [http://creativecommons.org/licenses/by/3.0/](http://creativecommons.org/licenses/by/3.0/). It has been used to provide an example base for multiple languages to provide a basis of comparitive programming language study for syntax, language simplicity, number of lines of code and operations required to perform the same task, as well as compile and run speed combined.
