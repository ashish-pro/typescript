// The bigint is a new primitive type in Typescript. It is available only if you target esnext in tsconfig.json. it represents the whole number. It can hold numbers larger than 253 – 1. The BigInt uses the arbitrary-precision arithmetic.


let bigInt1 = BigInt(945845);

let biInt2 = 123564564n;
console.log(bigInt1);

const safeInt = Number.MAX_SAFE_INTEGER;

console.log(safeInt);

const safeIntPlusOne = safeInt + 1;
const safeIntPlusTwo = safeInt + 2;

console.log(safeIntPlusOne);
console.log(safeIntPlusTwo);

console.log(safeIntPlusOne === safeIntPlusTwo);

let a: bigint = BigInt(1234548);

let b: bigint = 23456465n;

let c: bigint = a - b;

let e:bigint = 24551.2n;
let f = Math.log(a);
