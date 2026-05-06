const s: string = "postgres://user:pass@host.com:5432/path?k=v#f";
const u: URL = new URL(s);

console.log(u.protocol.replace(":", ""));
console.log(u.username + ":" + u.password);
console.log(u.username);
console.log(u.password);
console.log(u.host);
console.log(u.hostname);
console.log(u.port);
console.log(u.pathname);
console.log(u.hash.replace("#", ""));
console.log(u.search.replace("?", ""));
console.log(Object.fromEntries(u.searchParams));
console.log(u.searchParams.get("k"));
