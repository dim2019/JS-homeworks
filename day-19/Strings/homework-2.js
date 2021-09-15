function extractCurrencyValue(source) {
    if (typeof source !== 'string') throw new TypeError("first parameter isn't string")
    let str = source.substring(1)
    return parseInt(str)
}
const value = extractCurrencyValue('$120')
console.log(value);