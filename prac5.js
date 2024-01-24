let x = +prompt("nhap so thu 1");
let y = +prompt("nhap so thu 2");
let z = +prompt("nhap so thu 3");

let max = x > y ? (x > z ? x : z) : y > z ? y : z;

console.log(max);
