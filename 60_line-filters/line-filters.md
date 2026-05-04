___
#### To run the program, make sure you are in the program's folder, then use the Run Command below.
___
##### Run Command:

`$ printf "hello\nfilter\n" | node line-filters.js`

##### Results:

`HELLO`
`FILTER`
___

#### Note: On Windows, use `echo hello | node line-filters.js` or PowerShell's `"hello`nfilter`n" | node line-filters.js`. The program reads from stdin line by line using the `readline` module and converts each line to uppercase — the equivalent of Go's `bufio.Scanner` reading from `os.Stdin`.
___

###### This work and the accompanying code was originally from Mark McGranaghan at [https://github.com/mmcgrana/gobyexample](https://github.com/mmcgrana/gobyexample) and licensed under a Creative Commons Attribution 3.0 Unported License [http://creativecommons.org/licenses/by/3.0/](http://creativecommons.org/licenses/by/3.0/). It has been used to provide an example base for multiple languages to provide a basis of comparitive programming language study for syntax, language simplicity, number of lines of code and operations required to perform the same task, as well as compile and run speed combined.
