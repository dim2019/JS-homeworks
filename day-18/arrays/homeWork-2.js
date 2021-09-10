const arr = [1, 2, 3]
let reverse = () => {
    var removed = []
    try {
        if (typeof arr !== "object") {
            throw new TypeError('parameter required and has to be only array')
        } else if (arr == '') {
            throw new TypeError('passed empty array')
        } else {
            while (arr.length > 0) {
                removed.push(arr.pop())
            }
            arr.unshift(removed)
            return arr.flat()
        }
    } catch (err) {
        console.log(err.message);
    }
}
console.log(reverse());