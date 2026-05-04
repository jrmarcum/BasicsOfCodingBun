function fact(n) {
    if (n === 0) return 1;
    return n * fact(n - 1);
}

console.log(fact(7));

const fib = function(n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
};

console.log(fib(7));
