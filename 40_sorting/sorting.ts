const strs: string[] = ["c", "a", "b"];
strs.sort();
console.log("Strings:", strs);

const ints: number[] = [7, 2, 4];
ints.sort((a: number, b: number): number => a - b);
console.log("Ints:   ", ints);

const isSorted: boolean = ints.every((v: number, i: number, arr: number[]): boolean => i === 0 || arr[i - 1] <= v);
console.log("Sorted: ", isSorted);
