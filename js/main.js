/****************** CONSOLE ********************/
console.log("hello");

console.warn("this is message warning");

console.error("đây là console.error");

/****************** BIẾN ********************/
// Biến: lưu/truy xuất giá trị và có thể đem đi sử dụng ở nhiều nơi

// Kiểu 1:
// khai báo tên biến
// cập nhật/gán giá trị cho biến
// let tenBien;
// tenBien = giaTri
let user1;
user1 = "abc";
console.log("user1: ", user1);
user1 = "xyz";
console.log("user1: ", user1);

/*
    Kiểu 2:
    vừa khai báo biến, vừa gán giá trị cho biến
    let tenBien = giaTri
*/
let user2 = "Nguyễn Văn A";
console.log("user2: ", user2);

// const(constant): hằng số không được gán lại giá trị, sử dụng khi giá trị không bị thay đổi
// const tenBien = giaTri
const PI = 3.14;
console.log("PI: ", PI);
// PI = 2;

const HANG_SO = 2;

/****************** quy tắc đặt tên biến- camelCase ********************/
let userName;
let luongCoBan;

/****************** Kiểu dữ liệu ********************/
// 1. Number: 1,2,3, 3.14 (dùng cho cả số nguyên lẫn số thực, dùng để tính toán)
let birthday = 1995;
console.log("birthday: ", birthday);

// 2. string: kiểu chuỗi, ký tự thường dùng để diễn đạt tên, email,sđt,...
let firstName = "Thy";
console.log("firstName: ", firstName);

// 3. boolean: true/false thường kết hợp với toán tủ so sánh
let isApproval = true;
console.log("isApproval: ", isApproval);

// 4. undefined: khi một biến được khai báo những chưa gán giá trị thì giá trị của nó sẽ là undefined
let lastName;
console.log("lastName: ", lastName);

// 5. null: biểu thị 1 giá trị không tồn tại
let shoppingCart = null;
console.log("shoppingCart: ", shoppingCart);

/****************** các loại toán tử ********************/
// 1. Toán tử toán học
let number1 = 30;
let number2 = 20;
let number3 = "10";

let sum = number1 + number2;
console.log("sum: ", sum);

let minus = number2 - number1;
console.log("minus: ", minus);

// phép nhân : *
let product = number1 * number2;
console.log("product: ", product);

// phép chia: /
let quotient = number1 / number2;
console.log("quotient: ", quotient);

// phép chia lấy dư: %
let mod = number1 % number2;
console.log("mod: ", mod);

// cộng 1 number với 1 string: chỉ xảy ra với phép cộng
// typeof: dùng để kiểm tra kiểu dữ liệu của 1 biến

console.log("kiểu dữ liệu của number3: ", typeof number3);

// cách convert dữ liệu từ string về number: parseInt(), variable * 1, +variable
// let number3Convert = parseInt(number3);
// let number3Convert = number3 * 1;
let number3Convert = +number3;

console.log("kiểu dữ liệu của number3Convert: ", typeof number3Convert);

let result = number1 + number3;
console.log("result: ", result); // => 3010

let result2 = number1 + number3Convert;
console.log("result2: ", result2); // => 40

let result3 = number1 / number3;
console.log("result3: ", result2);

// chuỗi + chuỗi
let string1 = "Hello";
let string2 = "BC77";
let string3 = "Cybersoft";

let totalString = string1 + " " + string2 + " " + string3;

console.log("totalString: ", totalString);

let totalString2 = "Hello " + "World";
console.log("totalString2: ", totalString2);

// Toán tử ++/--: tăng 1 hoặc giảm 1;
let number4 = 10;
console.log("number4++: ", number4++);
console.log("number4 sau khi chạy ++", number4);

// => 11
console.log("++number4: ", ++number4);

// let number5 = 3;
// // number5--; //=> 2
// --number5;
// console.log("number5--: ", number5--);

let numberA = 1;
let numberB = 3;

let resultAB = numberA++ + --numberB;
// 1        +  2 = 3
console.log("resultAB:  ", resultAB);

let resultAB2 = numberA++ + numberB--;
// 1        +  3 = 4
console.log("resultAB:  ", resultAB2);

// 2. Toán tử gán
// a = a + b => a += b
// a = a - b => a -= b
// a = a % b => a %= b

let number6 = 10;
// number6 = number6 + 10;
number6 += 10;
console.log("number6: ", number6);

//-------------------------------------
let a, b, c;
a = 10;
a += a; // a = a + a => a = 10 + 10 = 20
console.log("a: ", a); //=> 20

b = ++a + 5;
//b = 21 + 5 = 26;
c = a++ + 5;
// c = 21 + 5 = 26;
console.log("a", a); // a = 22;

a = 0;

console.log("b", b); // 26
console.log("c", c); //26

// promt
// let name = prompt("Nhập tên của bạn");
// alert("bạn đã nhập thành công");
// console.log("Tên bạn đã nhập", name);

// Khi nhận đề bài: input(dữ liệu đầu vào) => các bước xử lý(công thức tính toán) => output(kết quả trả ra)
/* Bài 1: tính lương nhân viên
     Bước 1: xác định input : số ngày làm, lương cơ bản 
     Bước 2: xử lý: lương nhân viên  = số ngày làm * lương cơ bản 
     Bước 3: xác định output : tên nhân viên và lương nhân viên 
*/
let tenNV = prompt("Nhập tên nhân viên");
console.log("tenNV: ", tenNV);
let soNgayLam = prompt("Nhập số ngày làm");
// console.log("soNgayLam: ", parseInt(soNgayLam));
let luongCB = prompt("nhập lương cơ bản");
// console.log("luongCB: ", parseInt(luongCB));

let luong = +soNgayLam * +luongCB;

console.log("tên nhân viên", tenNV, "lương: ", luong);
