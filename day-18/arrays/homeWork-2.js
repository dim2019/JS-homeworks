const arr = {}
let reverse = (array) => {
    let removed
    try {
        if (!Array.isArray(array)) {
            throw new TypeError('First parameter required and has to be only array')
        } else if (arr == '') {
            throw new TypeError('passed empty array')
        } else {
            for (i in array) {
                removed = array.splice(i, 1);
                array.unshift(removed);
            }
        }
        console.log(array.flat())
    } catch (err) {
        console.log(err.message);
    }
}
reverse(arr)