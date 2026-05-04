function mustPositive(n) {
    if (n <= 0) {
        throw new Error(`expected positive, got ${n}`);
    }
    return n;
}

console.log(mustPositive(5));

mustPositive(-1);
