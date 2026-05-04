const strs = ["c", "a", "b"];
strs.sort();
console.log("Strings:", strs);

const ints = [7, 2, 4];
ints.sort((a, b) => a - b);
console.log("Ints:   ", ints);

const isSorted = ints.every((v, i, arr) => i === 0 || arr[i - 1] <= v);
console.log("Sorted: ", isSorted);
