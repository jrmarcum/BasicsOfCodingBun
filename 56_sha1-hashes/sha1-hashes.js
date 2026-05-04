const crypto = require("crypto");

const s = "sha1 this string";

const h = crypto.createHash("sha1");
h.update(s);
const bs = h.digest("hex");

console.log(s);
console.log(bs);
