const now: Date = new Date();
console.log(now.toISOString());

const then: Date = new Date(Date.UTC(2009, 10, 17, 20, 34, 58, 651));
console.log(then.toISOString());

console.log(then.getUTCFullYear());
console.log(then.toLocaleString("en-US", { month: "long", timeZone: "UTC" }));
console.log(then.getUTCDate());
console.log(then.getUTCHours());
console.log(then.getUTCMinutes());
console.log(then.getUTCSeconds());
console.log(then.getUTCMilliseconds() * 1e6);
console.log("UTC");

const days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(days[then.getUTCDay()]);

console.log(then < now);
console.log(then > now);
console.log(then.getTime() === now.getTime());

const diffMs: number = now.getTime() - then.getTime();
console.log(diffMs / 1000 / 3600, "h");
console.log(diffMs / 1000 / 60, "m");
console.log(diffMs / 1000, "s");
console.log(diffMs * 1e6, "ns");

const addedDate: Date = new Date(then.getTime() + diffMs);
console.log(addedDate.toISOString());
const subtractedDate: Date = new Date(then.getTime() - diffMs);
console.log(subtractedDate.toISOString());
