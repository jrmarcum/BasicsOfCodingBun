___
#### To run the program, make sure you are in the program's folder, then use the Run Command below.
___
##### Run Command:

`$ node time-formatting-parsing.js`

##### Results:

`2026-05-04T21:30:00.000Z`
`2012-11-01T22:08:41.000Z`
`9:30PM`
`Sun May  4 21:30:00 2026`
`2026-05-04T21:30:00.000Z`
`0000-01-01T20:41:00.000Z`
`2026-05-04T21:30:00-00:00`
`null`
___

#### Note: Time-dependent lines will vary with each run. JavaScript does not have a reference-time layout string like Go's `Mon Jan 2 15:04:05 MST 2006`; formatting is done manually using Date getter methods and template literals. The `Intl.DateTimeFormat` API is another option for locale-aware formatting.
___

###### This work and the accompanying code was originally from Mark McGranaghan at [https://github.com/mmcgrana/gobyexample](https://github.com/mmcgrana/gobyexample) and licensed under a Creative Commons Attribution 3.0 Unported License [http://creativecommons.org/licenses/by/3.0/](http://creativecommons.org/licenses/by/3.0/). It has been used to provide an example base for multiple languages to provide a basis of comparitive programming language study for syntax, language simplicity, number of lines of code and operations required to perform the same task, as well as compile and run speed combined.
