var array = [2, 5, 9, 15, 0, 4];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > 3) {
//         if (array[i] < 10) {
//             console.log(array[i]);
//         }

//     }
// }
var nums = []
for (let i in array) {
    if (array[i] > 3 && array[i] < 10) {
        nums.push(array[i])
    }
}


console.log(nums);