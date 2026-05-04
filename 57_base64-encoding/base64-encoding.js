const data = "abc123!?$*&()'-=@~";

const sEnc = Buffer.from(data).toString("base64");
console.log(sEnc);
const sDec = Buffer.from(sEnc, "base64").toString();
console.log(sDec);
console.log();

const uEnc = Buffer.from(data).toString("base64url");
console.log(uEnc);
const uDec = Buffer.from(uEnc, "base64url").toString();
console.log(uDec);
