function zeroval(ival) {
    ival = 0;
}

function zeroref(obj) {
    obj.val = 0;
}

let i = 1;
console.log("initial:", i);

zeroval(i);
console.log("zeroval:", i);

const iRef = { val: i };
zeroref(iRef);
console.log("zeroref:", iRef.val);

console.log("reference:", iRef);
