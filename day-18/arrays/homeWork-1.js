const arr = [
    [
        [1, 2],
        [1, 2]
    ],
    [
        [2, 1],
        [1, 2]
    ]
]
const f = (array) => {
    const res = [];
    try {
        if (!Array.isArray(array)) {
            throw new TypeError('First parameter required and has to be only array')
        } else if (array == '') {
            return 0
        } else {
            while (array.length > 0) {
                const Removed = array.pop();
                if (Array.isArray(Removed)) {
                    array.push(...Removed);
                } else if (typeof Removed === 'number') {
                    res.push(Removed);
                } else {
                    throw new TypeError('On any dimension (level) was found not a number or not a array')
                }
            }
            let sum = (acumulator, num = 0) => {
                return acumulator + num
            }
            console.log(res.reduce(sum));
        }
    } catch (err) {
        console.log(err.message);
    }
}
f(arr)