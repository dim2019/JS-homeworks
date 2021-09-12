const arr = [1, 2, 3];
let rotate = (array, number, direction = 'right') => {
    try {
        if (!Array.isArray(array) || array == '') {
            throw new TypeError('First parameter required and has to be only array')
        } else if (typeof number !== 'number' || number == '') {
            throw new TypeError('second parameter required and has to be number')
        } else if (typeof direction !== 'string') {
            throw new TypeError('third parameter optional and has to be only string')
        } else if (direction == 'left') {
            console.log([
                [...array.slice(number, array.length)],
                [...array.slice(0, number)]
            ].flat());
        } else {
            console.log([
                [...array.slice(array.length - number)],
                [...array.slice(0, array.length - number)]
            ].flat());
        }
    } catch (err) {
        console.log(err.message);
    }
}

rotate(arr, 2, 'left')