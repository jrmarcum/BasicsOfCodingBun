___
#### To run the program, make sure you are in the program's folder, then use the Run Command below.
___
##### Run Command:

`$ node environment-variables.js`

##### Results:

`FOO: 1`
`BAR: `
``
`PATH`
`COMPUTERNAME`
`...`
___

#### Note: The environment variable names printed after the blank line will vary by operating system and user environment. `process.env` in Node.js is the equivalent of `os.Environ()` in Go, providing access to all environment variables as a plain object. Setting `process.env.FOO = "1"` modifies the variable for the current process only, just like Go's `os.Setenv`.
___

###### This work and the accompanying code was originally from Mark McGranaghan at [https://github.com/mmcgrana/gobyexample](https://github.com/mmcgrana/gobyexample) and licensed under a Creative Commons Attribution 3.0 Unported License [http://creativecommons.org/licenses/by/3.0/](http://creativecommons.org/licenses/by/3.0/). It has been used to provide an example base for multiple languages to provide a basis of comparitive programming language study for syntax, language simplicity, number of lines of code and operations required to perform the same task, as well as compile and run speed combined.
