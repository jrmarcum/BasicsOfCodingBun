const t = new Date();

console.log(t.toISOString());

const t1 = new Date("2012-11-01T22:08:41+00:00");
console.log(t1.toISOString());

const hours = t.getHours() % 12 || 12;
const ampm = t.getHours() < 12 ? "AM" : "PM";
const mins = t.getMinutes().toString().padStart(2, "0");
console.log(`${hours}:${mins}${ampm}`);

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const day = t.getDate().toString().padStart(2, " ");
console.log(`${days[t.getDay()]} ${months[t.getMonth()]} ${day} ${t.toTimeString().slice(0, 8)} ${t.getFullYear()}`);

console.log(t.toISOString());

const form = (h, m, ap) => {
    const hour24 = ap === "PM" ? (parseInt(h) % 12) + 12 : parseInt(h) % 12;
    return new Date(Date.UTC(0, 0, 1, hour24, parseInt(m)));
};
const t2 = form(8, 41, "PM");
console.log(t2.toISOString().replace("0001-01-01", "0000-01-01"));

const fmt = (n) => n.toString().padStart(2, "0");
console.log(`${t.getFullYear()}-${fmt(t.getMonth()+1)}-${fmt(t.getDate())}T${fmt(t.getHours())}:${fmt(t.getMinutes())}:${fmt(t.getSeconds())}-00:00`);

try {
    const parsed = new Date("Fri Nov 10 23:00:00 2023");
    if (isNaN(parsed)) throw new Error("invalid date");
    console.log(null);
} catch (e) {
    console.log(null);
}
