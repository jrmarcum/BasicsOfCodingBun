const deferred = [];

function defer(fn) {
    deferred.push(fn);
}

function runDeferred() {
    for (let i = deferred.length - 1; i >= 0; i--) {
        deferred[i]();
    }
    deferred.length = 0;
}

console.log("counting");
for (let i = 0; i < 5; i++) {
    const n = i;
    defer(() => console.log(n));
}
console.log("done");
runDeferred();
