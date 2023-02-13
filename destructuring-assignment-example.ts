// Sử dụng destructuring-assignment trích xuất các phần tử trong mảng
// let names =["alpha","beta","gama","delta"];
// let [firstName, secondName] = names;
// console.log(firstName);
// console.log(secondName);

//# 1 hoặc có thể viết gọn lại như sau
// let [firstName, lastName] = ["alpha","beta","game"];

// # 2Sử dụng dấu phẩy để bỏ qua phần tử của mảng
// let [firstName,,LastName] = ["alpha","beta","game"];

// #3 Gán cho 1 phần tử từ mảng cho biến, phần còn lại gán cho biến duy nhất nhưng vẫn là mảng
// let [firstName,,...lastName] = ["alpha","beta","gama","delta"];
// console.log(firstName);//"alpha"
// console.log(lastName);//"gamma, delta"

//#4 Có thể hoán đổi bằng cách sử dụng destructuring assignment
// let [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];
// [firstName, secondName] = [secondName, firstName]
// console.log(firstName);//"beta"
// console.log(secondName);//"alpha"

//#5 Dữ liệu trích xuất từ một mảng trả về từ hàm
// const NamesList = () => {
//     return ["alpha", "beta", "gama", "delta"]
// }
// let [firstName,secondName] = NamesList();

//để gán các biến từ các đối tượng trong ES6 sử dụng destructuring assignment
// let marks = {x:21,y: -34, z: 47}
// const {x,y,z} = marks; // x =21, y = -34, z = 47

// Các đối tượng lồng nhau cũng có thể được trích xuất dữ liệu
// const marks ={
//     section1: {alpha : 15, beta: 16},
//     section2: {alpha:-31, beta:19}
// };
// const {section1 : {alpha: alpha1, beta: beta1}} = marks;
// console.log(alpha1, beta1); // 15, 16

// // Khai báo Default Parameters trong ES6
// class Geeks{
//     constructor(a,b = 3) {
//         console.log(a*b);
//     }
// }
// let obj = new Geeks(5);
// let obj1 = new Geeks(5, 4);

//lambda expression tạo nhanh mmotj hàm chức năng (bỏ ngoặc nhọn return)
//kết quả [1,4,9,16,25,36,49]