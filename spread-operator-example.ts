const cars1 = ["AUDI","BMV","TATA","MERCEDES"];
const cars2 = [...cars1]
const cars3 = [...cars1,"NISSAN","TOYOTA"];

// spread-operator dung de sao chep mang
//them phan tu vao mang
//bang cach su dung dau ...

const cars4 =[...cars1,...cars3];// dùng để nối hai mảng với nhau

const cars5 ={
    Brand : "TOYOTA",
    Color : "RED"
}
const cars6 ={...cars5};//Sao chép đối tượng
const cars7 ={
    Brand : "Nissan",
    Color: "BLUE",
    Year : 2004
}
const cars8 = {...cars5,...cars7};//sao chép tất cả thuộc tính của 2 đối tượng sang đối tượng mới

//nếu hai đối tượng có cùng một thuộc tính, giá trị của thuộc tính
// đó trong đối tượng mới sẽ được ghi đè bởi giá trị của thuộc tính đó trong đối tượng cuối cùng mà bạn trải.

const car = "AUDI";
const  f = car.split("");

//không chuyển trực tiếp từ chuỗi sang mảng được cần thông qua hàm split

// const car = "AUDI";
// const carArray = [...car];
// console.log(carArray);

const numbers =[3,5,7,9,10]; // cấu trúc lại mảng 3,5,7 và 9, 10
 const [a,b,c,...others] = numbers;
console.log(a);
console.log(b);
console.log(c);
console.log(others);


