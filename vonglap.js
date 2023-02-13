// function Get(){
//     for (let i = 0; i <11 ; i+=2) {
//         console.log(i + "")
//     }
// }
// Get();
// for(let i of ["ha noi",20.32,3000]){
//     console.log(i +" ")
// }
var obj = { name: 'Peter', age: 25, salary: 3000 };
for (var i in obj) {
    console.log(obj[i]);
}
