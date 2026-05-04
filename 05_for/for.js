let i = 1;
while (i <= 3) {
    console.log(i);
    i++;
}

for (let j = 7; j <= 9; j++) {
    console.log(j);
}

while (true) {
    console.log("loop");
    break;
}

for (let n = 0; n <= 5; n++) {
    if (n % 2 === 0) {
        continue;
    }
    console.log(n);
}
