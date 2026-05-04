___
#### To run the program, make sure you are in the program's folder, then use the Run Command below.
___
##### Run Command:

`$ node ../59_writing-files/writing-files.js`

___

##### Run Command:

`$ node reading-files.js`

##### Results:

`hello`
`go`
`5 bytes: hello`
`2 bytes @ 6: go`
`1 bytes @ 8: `
`5 bytes: hello`
___

#### Note: Run the writing-files lesson first to create the `tmp/dat` file that this program reads. Node.js uses the `fs` module with synchronous APIs (`readFileSync`, `openSync`, `readSync`) as the equivalent of Go's `os.ReadFile`, `os.Open`, and `io.Reader`. Seeking to a byte offset is done by passing the position as the last argument to `fs.readSync`.
___

###### This work and the accompanying code was originally from Mark McGranaghan at [https://github.com/mmcgrana/gobyexample](https://github.com/mmcgrana/gobyexample) and licensed under a Creative Commons Attribution 3.0 Unported License [http://creativecommons.org/licenses/by/3.0/](http://creativecommons.org/licenses/by/3.0/). It has been used to provide an example base for multiple languages to provide a basis of comparitive programming language study for syntax, language simplicity, number of lines of code and operations required to perform the same task, as well as compile and run speed combined.
