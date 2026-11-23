#### On Windows, Bun `path.join` uses backslashes (`\`) as the separator, matching the OS convention. On Linux/macOS, forward slashes (`/`) are used — matching Go's output. `path.isAbsolute("/dir/file")` returns `true` on every platform, matching Go (on Windows a leading separator is treated as rooted on the current drive).
___
##### Run Command:

`$ bun file-paths.js`

`$ bun file-paths.ts`

##### Results:

`p: dir1\dir2\filename`
`dir1\filename`
`dir1\filename`
`Dir(p): dir1\dir2`
`Base(p): filename`
`false`
`true`
`.json`
`config`
`t\file`
`..\c\t\file`
