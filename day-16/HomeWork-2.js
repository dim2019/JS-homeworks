var n = 1000;
let i = 0;
let numbers = [];
var num = 0;
// While ციკლით
// while (true) {
//     if (n / 2 < 50) {
//         break
//     } else {
//         n = n / 2
//         numbers.push(n)
//     }
//     i++
// }
//ოპტიმიზირებული//
while (n / 2 > 50) {
    n = n / 2
    num++

}
console.log(num);
// FOR ციკლით
// for (let i = 0; i < 1000; i++) {
//     if (n / 2 < 50) {
//         break
//     } else {
//         n = n / 2
//         numbers.push(n)
//     }
// }
// num += numbers.length
// console.log(num);