let Errors = { errors: [] };

function mix(...functions) {
    let result
    let FuncValue = { value: 0 }
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
        FuncValue.value = result
    }
    console.log(Errors);
    console.log(FuncValue);
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