function intSeq() {
    let i = 0;
    return function() {
        i++;
        return i;
    };
}

const nextInt = intSeq();
console.log(nextInt());
console.log(nextInt());
console.log(nextInt());

const newInts = intSeq();
console.log(newInts());
