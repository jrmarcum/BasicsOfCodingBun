function sum(...nums) {
    process.stdout.write("[" + nums.join(" ") + "] ");
    const total = nums.reduce((acc, n) => acc + n, 0);
    console.log(total);
}

sum(1, 2);
sum(1, 2, 3);

const nums = [1, 2, 3, 4];
sum(...nums);
