class Validator {
    constructor(string) {
        this.string = string
    }
    isEmail(email) {
        let regexEmail = /^\S+@\S+\.\S+$/;
        if (email == '') return false
        else if (!(regexEmail.test(email))) return false
        else return true
    }
    isDomain(domain) {
        var regexDomain = new RegExp(/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/);
        if (domain == '') return false
        else if (!(regexDomain.test(domain))) return false
        else return true
    }
    isDate(date) {
        let regexDate = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
        if (date == '') return false
        else if (!(regexDate.test(date))) return false
        else return true

    }
    isPhone(PhoneNumber) {
        let regexPhone = /^[+]*[(]{0,1}[995]{1,3}[)]{0,1}[-\s\./0-9]*$/g
        if (PhoneNumber == '') return false
        else if (!(regexPhone.test(PhoneNumber))) return false
        else return true
    }
}
var validator = new Validator();

console.log(validator.isEmail('jshtml@mail.ru'));
console.log(validator.isDomain('jshtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+(995)598-183-704'))