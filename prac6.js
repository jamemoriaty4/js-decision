let height = +prompt("nhap chieu cao");
let weight = +prompt("nhap chieu can nang");
let BMI = weight / (height * height);

BMI >= 40
  ? console.log("béo phì độ 3")
  : BMI > 35
  ? console.log("béo phì độ 2")
  : BMI > 30
  ? console.log("béo phì độ 1")
  : BMI > 25
  ? console.log("tiền béo phì")
  : BMI > 18.5
  ? console.log("bthg")
  : console.log("gầy");
