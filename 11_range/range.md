#### JavaScript plain objects and the `for...of` loop over `Object.entries()` and `Object.keys()` preserve insertion order, making map iteration deterministic — unlike Go's non-deterministic map range. The final loop iterates over the string `'ts'`, printing the Unicode code point of each character (`t`=116, `s`=115).
___
##### Run Command:

`$ bun range.js`

`$ bun range.ts`

##### Results:

`sum: 9`
`index: 1`
`a -> apple`
`b -> banana`
`key: a`
`key: b`
`0 116`
`1 115`
