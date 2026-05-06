const re: RegExp = /p([a-z]+)ch/;

console.log(re.test("peach"));

console.log(re.test("peach"));

const matchStr: RegExpMatchArray | null = "peach punch".match(re);
console.log(matchStr![0]);

const idx: number = "peach punch".search(re);
console.log([idx, idx + matchStr![0].length]);

const submatch: RegExpExecArray | null = re.exec("peach punch");
console.log([submatch![0], submatch![1]]);

console.log([submatch!.index, submatch!.index + submatch![0].length,
    submatch!.index + 1, submatch!.index + 1 + submatch![1].length]);

const allMatches: RegExpMatchArray | null = "peach punch pinch".match(/p([a-z]+)ch/g);
console.log(allMatches);

const gre: RegExp = /p([a-z]+)ch/g;
const allIdx: number[][] = [];
let m: RegExpExecArray | null;
while ((m = gre.exec("peach punch pinch")) !== null) {
    allIdx.push([m.index, m.index + m[0].length,
        m.index + 1, m.index + 1 + m[1].length]);
}
console.log(allIdx);

const gre2: RegExp = /p([a-z]+)ch/g;
const twoMatches: string[] = [];
while ((m = gre2.exec("peach punch pinch")) !== null && twoMatches.length < 2) {
    twoMatches.push(m[0]);
}
console.log(twoMatches);

console.log(re.test("peach"));

console.log(re.toString());
console.log("a peach".replace(re, "<fruit>"));
console.log("a peach".replace(re, (match: string): string => match.toUpperCase()));
