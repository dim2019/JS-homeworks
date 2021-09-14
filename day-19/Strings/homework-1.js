function rmHtmlTags(string) {
    if (typeof string !== 'string') throw new TypeError('param is not string')
    const RegExpHTMLTags = /<\/?[\w\s="/.':;#-\/]+>/gi;
    let HTMLText = string.replace(RegExpHTMLTags, '')
    return HTMLText

}
const HTML = rmHtmlTags('<p><strong><em>Content</em></strong></p>')
console.log(HTML);