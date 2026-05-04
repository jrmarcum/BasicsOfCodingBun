___
#### To run the program, make sure you are in the program's folder, then use the Run Command below.
___
##### Run Command:

`$ node temporary-files-and-directories.js`

##### Results:

`Temp file name: C:\Users\user\AppData\Local\Temp\samplea1b2c3d4e5f6`
`Temp dir name: C:\Users\user\AppData\Local\Temp\sampledira1b2c3d4e5f6`
___

#### Note: Temp file and directory names will vary with each run due to the random hex suffix. On Linux/macOS the paths will be under `/tmp/`. Node.js does not have a built-in `os.CreateTemp` equivalent, so this lesson generates random filenames using `crypto.randomBytes` combined with `os.tmpdir()`. The files and directories are removed immediately after use via `try/finally`.
___

###### This work and the accompanying code was originally from Mark McGranaghan at [https://github.com/mmcgrana/gobyexample](https://github.com/mmcgrana/gobyexample) and licensed under a Creative Commons Attribution 3.0 Unported License [http://creativecommons.org/licenses/by/3.0/](http://creativecommons.org/licenses/by/3.0/). It has been used to provide an example base for multiple languages to provide a basis of comparitive programming language study for syntax, language simplicity, number of lines of code and operations required to perform the same task, as well as compile and run speed combined.
