#### Go's `net/http` server maps to Bun `http.createServer`; this self-contained example starts a server, makes requests to `/hello` and `/headers`, prints the responses, then closes.
___
##### Run Command:

`$ bun http-server.js`

`$ bun http-server.ts`

##### Results:

`hello`
``
`connection: keep-alive`
`user-agent: Bun/1.4.5`
`accept: */*`
`host: localhost:8090`
`accept-encoding: gzip, deflate, br, zstd`
``
