#### JavaScript is single-threaded, so goroutines are simulated with `setTimeout(fn, 0)` to defer work to the next event-loop iteration; output order is deterministic (deferred tasks run after all synchronous code completes).
___
##### Run Command:

`$ bun goroutines.js`

`$ bun goroutines.ts`

##### Results:

`direct : 0`
`direct : 1`
`direct : 2`
`async task : 0`
`async task : 1`
`async task : 2`
`going`
`done`
