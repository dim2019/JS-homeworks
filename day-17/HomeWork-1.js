let nums = []

function getDivisors(number) {
    try {

        if (typeof number === 'string') {
            throw new Error("parameter type is not a Number")
        } else if (number === 0) {
            throw new Error("parameter can't be a 0")
        } else {
            for (let i = 1; i <= number; i++) {
                if (number % i == 0) {
                    nums.push(number / i)
                }

            }
            console.log(nums);
        }

    } catch (err) {
        console.log(err.message);
    }
}
getDivisors(32)