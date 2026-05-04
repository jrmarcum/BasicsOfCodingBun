function vals() {
    return [3, 7];
}

const [a, b] = vals();
console.log(a);
console.log(b);

const [, c] = vals();
console.log(c);
