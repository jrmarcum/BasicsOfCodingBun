const f = parseFloat("1.234");
console.log(f);

const i = parseInt("123", 10);
console.log(i);

const d = parseInt("0x1c8", 16);
console.log(d);

const u = parseInt("789", 10);
console.log(u);

const k = parseInt("135", 10);
console.log(k, null);

const bad = parseInt("wat", 10);
if (isNaN(bad)) {
    console.log('strconv.Atoi: parsing "wat": invalid syntax');
}
