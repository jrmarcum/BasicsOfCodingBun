const now = new Date();

console.log(now.toISOString());

console.log(Math.floor(now.getTime() / 1000));
console.log(now.getTime());
console.log(now.getTime() * 1e6);

const fromSecs = new Date(Math.floor(now.getTime() / 1000) * 1000);
console.log(fromSecs.toISOString());

const fromNano = new Date(Math.floor(now.getTime() * 1e6 / 1e6));
console.log(fromNano.toISOString());
