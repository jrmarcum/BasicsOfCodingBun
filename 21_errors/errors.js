function f1(arg) {
    if (arg === 42) {
        return { val: -1, err: new Error("can't work with 42") };
    }
    return { val: arg + 3, err: null };
}

class ArgError extends Error {
    constructor(arg, prob) {
        super(`${arg} - ${prob}`);
        this.arg = arg;
        this.prob = prob;
    }
}

function f2(arg) {
    if (arg === 42) {
        return { val: -1, err: new ArgError(arg, "can't work with 42") };
    }
    return { val: arg + 3, err: null };
}

for (const i of [7, 42]) {
    const { val, err } = f1(i);
    if (err) {
        console.log("f1 failed:", err.message);
    } else {
        console.log("f1 worked:", val);
    }
}

for (const i of [7, 42]) {
    const { val, err } = f2(i);
    if (err) {
        console.log("f2 failed:", err.message);
    } else {
        console.log("f2 worked:", val);
    }
}

const { err: e } = f2(42);
if (e instanceof ArgError) {
    console.log(e.arg);
    console.log(e.prob);
}
