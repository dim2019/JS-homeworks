const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let reverse = (array) => {
    try {
        if (!Array.isArray(array)) {
            throw new TypeError('First parameter required and has to be only array')
        } else if (arr == '') {
            throw new TypeError('passed empty array')
        } else {
            for (let i = array.length - 1; i >= 0; i--) {
                var n = array[i];
                array.push(n)
            }
            array.splice(0, array.length / 2)
            console.log(array);
        }
    } catch (err) {
        console.log(err.message);
    }
}
reverse(arr)