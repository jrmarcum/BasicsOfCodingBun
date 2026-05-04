___
#### To run the program, make sure you are in the program's folder, then use the Run Command below.
___
##### Run Command:

`$ node random-numbers.js`

##### Results:

`81,87`
`0.6369986800554948`
`7.562567892023768,5.918789800890865`
`56,17`
`56,17`
___

#### Note: The first three lines of output (using `Math.random()`) will vary with each run. The last two lines use a seeded PRNG (mulberry32 with seed 42) and will always produce the same values, demonstrating that the same seed yields the same sequence. JavaScript's `Math.random()` cannot be seeded — a custom PRNG is required for reproducible random numbers.
___

###### This work and the accompanying code was originally from Mark McGranaghan at [https://github.com/mmcgrana/gobyexample](https://github.com/mmcgrana/gobyexample) and licensed under a Creative Commons Attribution 3.0 Unported License [http://creativecommons.org/licenses/by/3.0/](http://creativecommons.org/licenses/by/3.0/). It has been used to provide an example base for multiple languages to provide a basis of comparitive programming language study for syntax, language simplicity, number of lines of code and operations required to perform the same task, as well as compile and run speed combined.
