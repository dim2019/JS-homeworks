const compose = (...functions) => {
    let str = ''
    for (let i = 0; i < functions.length; i++) {
        if (typeof str === 'undefined') {
            str = functions[i]()
        } else {
            str = functions[i](str)
        }
    }
    let reved = str.split('').reverse().join('')
    return last => {
        return last + reved
    }
}
const composed = compose((str) => {
    return str + 'c';
}, (str) => {
    return str + 'b';
})('a')
console.log(composed);