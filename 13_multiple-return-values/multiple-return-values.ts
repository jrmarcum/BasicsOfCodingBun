function vals(): [number, number] {
    return [3, 7];
}

const [a, b]: [number, number] = vals();
console.log(a);
console.log(b);

const [, c]: [number, number] = vals();
console.log(c);
