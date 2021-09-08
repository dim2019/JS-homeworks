let array = [1, 2, 3]
var n = 0

function f(number) {
    try {
        if (typeof number !== 'object') {
            throw new TypeError("parameter type should be an array")
        } else if (number == '') {
            throw new TypeError("parameter can't be an empty")
        } else if (n < number.length) {
            console.log(number[n++]);
            f(number)
        }

    } catch (err) {
        console.log(err.message);
    }

}
f(array)