let Errors = { errors: [], value: 0 };

function mix(...functions) {
    let result
    for (var cb = 0; cb < functions.length; cb++) {
        try {
            if (cb == 0) {
                result = functions[cb]()
            } else {
                result = functions[cb](result)
            }
        } catch (err) {
            Errors.errors.push({
                "name": err.name,
                "message": err.message,
                "stack": err.stack,
                "level": cb,
            })
        }
        Errors.value = result
    }
    console.log(Errors);
}
const mx = mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    throw new RangeError('Range is wrong');
}, (prev) => {
    return prev * 3;
})