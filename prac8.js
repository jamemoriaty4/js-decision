let toan = +prompt("nhap diem toan");
let van = +prompt("nhap diem van");
let anh = +prompt("nhap diem anh");

let dtb = (toan + anh + van) / 3;

dtb < 10
  ? console.log("xep loai gio")
  : dtb < 8
  ? console.log("xep loai kha")
  : dbt < 6.5
  ? console.log("xep loai Tb")
  : console.log("xep loai yeu");
