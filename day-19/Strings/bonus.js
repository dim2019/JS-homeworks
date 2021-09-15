function searchWord(text, word) {
    if (typeof text !== 'string' || typeof word !== 'string') throw new TypeError('params are not strings')
    else if (text.includes(word))
        var count = (text, word) => {
            return text.split(word).length - 1;
        }
    return (`"'${word}' was found ${count(text, word)} times."`)
}
const HTML = searchWord('The quick brown fox', 'fox')
console.log(HTML);