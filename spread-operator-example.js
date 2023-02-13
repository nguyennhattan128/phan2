var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var cars1 = ["AUDI", "BMV", "TATA", "MERCEDES"];
var cars2 = __spreadArray([], cars1, true);
var cars3 = __spreadArray(__spreadArray([], cars1, true), ["NISSAN", "TOYOTA"], false);
// spread-operator dung de sao chep mang
//them phan tu vao mang
//bang cach su dung dau ...
var cars4 = __spreadArray(__spreadArray([], cars1, true), cars3, true); // dùng để nối hai mảng với nhau
var cars5 = {
    Brand: "TOYOTA",
    Color: "RED"
};
var cars6 = __assign({}, cars5); //Sao chép đối tượng
var cars7 = {
    Brand: "Nissan",
    Color: "BLUE",
    Year: 2004
};
var cars8 = __assign(__assign({}, cars5), cars7); //sao chép tất cả thuộc tính của 2 đối tượng sang đối tượng mới
//nếu hai đối tượng có cùng một thuộc tính, giá trị của thuộc tính
// đó trong đối tượng mới sẽ được ghi đè bởi giá trị của thuộc tính đó trong đối tượng cuối cùng mà bạn trải.
var car = "AUDI";
var f = car.split("");
//không chuyển trực tiếp từ chuỗi sang mảng được cần thông qua hàm split
// const car = "AUDI";
// const carArray = [...car];
// console.log(carArray);
var numbers = [3, 5, 7, 9, 10];
var a = numbers[0], b = numbers[1], c = numbers[2], others = numbers.slice(3);
console.log(a);
console.log(b);
console.log(c);
console.log(others);
