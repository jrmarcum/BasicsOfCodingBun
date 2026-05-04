___
#### To run the program, make sure you are in the program's folder, then use the Run Command below.
___
##### Run Command:

`$ node url-parsing.js`

##### Results:

`postgres`
`user:pass`
`user`
`pass`
`host.com:5432`
`host.com`
`5432`
`/path`
`f`
`k=v`
`{ k: 'v' }`
`v`
___

#### Note: JavaScript's built-in `URL` class (WHATWG URL API) is available globally in Node.js v10+. It handles scheme, credentials, host, port, path, query, and fragment. The query parameters are accessed via `URLSearchParams`. Unlike Go's `url.ParseQuery` which returns `map[string][]string`, JavaScript's `URLSearchParams` returns single values by default.
___

###### This work and the accompanying code was originally from Mark McGranaghan at [https://github.com/mmcgrana/gobyexample](https://github.com/mmcgrana/gobyexample) and licensed under a Creative Commons Attribution 3.0 Unported License [http://creativecommons.org/licenses/by/3.0/](http://creativecommons.org/licenses/by/3.0/). It has been used to provide an example base for multiple languages to provide a basis of comparitive programming language study for syntax, language simplicity, number of lines of code and operations required to perform the same task, as well as compile and run speed combined.
