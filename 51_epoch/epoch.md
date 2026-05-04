___
#### To run the program, make sure you are in the program's folder, then use the Run Command below.
___
##### Run Command:

`$ node epoch.js`

##### Results:

`2026-05-04T21:30:00.000Z`
`1746397800`
`1746397800000`
`1746397800000000000`
`2026-05-04T21:30:00.000Z`
`2026-05-04T21:30:00.000Z`
___

#### Note: All values will vary with each run since they reflect the current time. JavaScript represents Unix time in milliseconds (`Date.getTime()`). The nanosecond value is approximated by multiplying milliseconds by 1,000,000 since JavaScript's `Date` only has millisecond precision — unlike Go which has nanosecond precision via `time.UnixNano()`.
___

###### This work and the accompanying code was originally from Mark McGranaghan at [https://github.com/mmcgrana/gobyexample](https://github.com/mmcgrana/gobyexample) and licensed under a Creative Commons Attribution 3.0 Unported License [http://creativecommons.org/licenses/by/3.0/](http://creativecommons.org/licenses/by/3.0/). It has been used to provide an example base for multiple languages to provide a basis of comparitive programming language study for syntax, language simplicity, number of lines of code and operations required to perform the same task, as well as compile and run speed combined.
