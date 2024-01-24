function ktNam(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
    console.log("thang 2 co 29 ngay");
  else console.log("thang 2 co 28 ngay");
}

let years = +prompt("nhap nam :");
let months = +prompt("Nhap thang: ");
switch (months) {
  case (1, 3, 5, 7, 8, 10, 12):
    console.log("thang có 31 ngày");
    break;
  case (4, 6, 9, 11):
    console.log("thang có 30 ngày");
    break;
  case 2:
    ktNam(years);
    break;
}
