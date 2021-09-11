const arr = []
let reverse = (array) => {
    let removed
    try {
        if (typeof arr !== "object") {
            throw new TypeError('parameter required and has to be only array')
        } else if (arr == '') {
            throw new TypeError('passed empty array')
        } else {
            for (i in array) {
                removed = array.splice(i, 1);
                array.unshift(removed);
            }
        }
        return array.flat();
    } catch (err) {
        console.log(err.message);
    }
}
console.log(reverse(arr));