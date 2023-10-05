var numberArr = [];

// Tính tổng số dương và có bao nhiêu số dương
function soDuong() {
  var soNguyen = document.getElementById("soNguyen").value;

  var NumbersArray = soNguyen.split(" ");
  console.log(NumbersArray);
  var tongSoNguyen = 0;
  var cacSoNguyen = 0;
  var minSoNguyen = 0;

  for (var i = 0; i < NumbersArray.length; i++) {
    if (NumbersArray[i] > 0) {
      tongSoNguyen += Number(NumbersArray[i]); // tổng số dương

      cacSoNguyen++; // các số dương

      minSoNguyen = Math.min(NumbersArray[i]); // số dương nhỏ nhất
    }
  }

  var minNumber = Math.min(...NumbersArray); // số nhỏ nhất

  document.getElementById(
    "result-tinh-Tong"
  ).innerHTML = `<h3> ${numberArr}</h3>
        <h2>1. Tổng số dương: ${tongSoNguyen}</h2>`;

  document.getElementById(
    "result-tong-duong"
  ).innerHTML = `<h3>2. Có ${cacSoNguyen} số dương</h3>`;

  document.getElementById(
    "result-nho-nhat"
  ).innerHTML = `<h3>3. Số ${minNumber} là số nhỏ nhất</h3>`;
  document.getElementById(
    "result-duong-nho-nhat"
  ).innerHTML = `<h3>4. Số ${minSoNguyen} là số dương nhỏ nhất</h3>`;

  // Số chẵn cuối cùng
  soChanCuoi(NumbersArray);
}

// // ****** Số dương nhỏ nhất *******
// function soDuongNho(NumbersArray) {
//   for (var i = 0; i < NumbersArray.length; i++) {
//     if (NumbersArray[i] > 0 && NumbersArray[i] < minSoNguyen) {
//       return minSoNguyen == NumbersArray[i]; // số dương nhỏ nhất
//     }
//   }
// }

// ****** Số chẵn cuối cùng ******
function soChanCuoi(NumbersArray) {
  var soChanCuoiCung = number[NumbersArray.length - 1];
  for (let i = 0; i < NumbersArray.length - 1; i++) {
    if (NumbersArray[i] % 2 == 0) {
      soChanCuoiCung = NumbersArray[i];
    }
  }
  document.getElementById(
    "result-chan-cuoi-cung"
  ).innerHTML = `<h3>5. Số ${soChanCuoiCung} là số chẵn cuối cùng</h3>`;
}
