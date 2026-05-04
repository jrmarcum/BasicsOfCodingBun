___
#### To run the program, make sure you are in the program's folder, then use the Run Command below.
___
##### Run Command:

`$ node writing-files.js`

##### Results:

`wrote 5 bytes`
`wrote 7 bytes`
`wrote 9 bytes`
___

#### Note: Node.js uses the `fs` module for file I/O. `writeFileSync` is the equivalent of Go's `os.WriteFile`; `openSync`/`writeSync` mirror `os.Create`/`f.Write`; `fsyncSync` mirrors `f.Sync()`. This program creates a `tmp/` directory and writes `tmp/dat`, `tmp/dat1`, and `tmp/dat2` — these paths are excluded by `.gitignore`.
___

###### This work and the accompanying code was originally from Mark McGranaghan at [https://github.com/mmcgrana/gobyexample](https://github.com/mmcgrana/gobyexample) and licensed under a Creative Commons Attribution 3.0 Unported License [http://creativecommons.org/licenses/by/3.0/](http://creativecommons.org/licenses/by/3.0/). It has been used to provide an example base for multiple languages to provide a basis of comparitive programming language study for syntax, language simplicity, number of lines of code and operations required to perform the same task, as well as compile and run speed combined.
