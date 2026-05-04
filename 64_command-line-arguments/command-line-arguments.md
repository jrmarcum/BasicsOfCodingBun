___
#### To run the program, make sure you are in the program's folder, then use the Run Command below.
___
##### Run Command:

`$ node command-line-arguments.js a b c d`

##### Results:

`[ 'C:\\Program Files\\nodejs\\node.exe', 'D:\\...\\command-line-arguments.js', 'a', 'b', 'c', 'd' ]`
`[ 'a', 'b', 'c', 'd' ]`
`c`
___

#### Note: The full paths in the first line will vary by system. In Node.js, `process.argv[0]` is the path to the `node` executable and `process.argv[1]` is the script path — so user arguments start at index 2. In Go, `os.Args[0]` is the compiled binary name and user arguments start at index 1. The third user argument (`c`, at `process.argv[4]`) matches Go's `os.Args[3]`.
___

###### This work and the accompanying code was originally from Mark McGranaghan at [https://github.com/mmcgrana/gobyexample](https://github.com/mmcgrana/gobyexample) and licensed under a Creative Commons Attribution 3.0 Unported License [http://creativecommons.org/licenses/by/3.0/](http://creativecommons.org/licenses/by/3.0/). It has been used to provide an example base for multiple languages to provide a basis of comparitive programming language study for syntax, language simplicity, number of lines of code and operations required to perform the same task, as well as compile and run speed combined.
