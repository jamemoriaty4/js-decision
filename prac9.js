let i = +prompt("nhap so thu 1");
let j = +prompt("nhap so thu 2");
let k = +prompt("nhap so thu 3");

const arr = [i, j, k];

arr.sort((i, j) => j - i);
console.log("Các số theo thứ tự giảm dần là:", arr[0], arr[1], arr[2]);
