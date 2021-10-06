class DB {
    constructor() {
        this.map = new Map()
        this.NewArrOFUsers = []
    }
    create(obj) {
        if (typeof obj !== 'object') throw new TypeError('invaild Object')
        const id = `uniqueID_${Math.random().toString(36).substring(2, 8)}`
        this.map.set(id, obj)
        return id

    }
    read(id) {
        if (id == '') throw new TypeError('required id')
        else if (typeof id !== 'string') throw new TypeError('invaild id')
        return this.map.has(id) ? this.map : null

    }
    readAll(par) {
        par == undefined
        if (typeof par !== 'undefined') throw new TypeError('parameter is denied')

        this.map.forEach((value) => {
            this.NewArrOFUsers.push(value)
        })
        console.log(this.NewArrOFUsers);
    }
    update(id, obj) {
        if (typeof id == 'undefined' || typeof obj == 'undefined' && id == '' || obj == '') throw new TypeError('parameter is required')
        else if (!(this.map.has(id))) {
            throw new Error("non-existing id is passed")
        } else if (typeof id !== 'string') {
            throw new TypeError("id is passed with a type not a string")
        } else if (typeof obj !== 'object') {
            throw new TypeError("second parameter should be object")
        } else {
            this.map.forEach((value, key) => {
                if (key == id) {
                    Object.assign(value, obj)
                    console.log(key);
                }
            })
        }
    }
    delete(id) {
        if (!(this.map.has(id))) throw new TypeError('non-existent ID')
        else if (typeof id !== 'string') throw new TypeError('invaild id')
        else this.map.delete(id)
        console.log(true);
    }
}

const db = new DB();
const person = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500 // required field with type number
};
const person2 = {
    name: 'dima',
    lastname: 'mezvrishvili'
}
const person3 = {
    name: 'ioseb',
    lastname: 'Jugashvili'
}
const id = db.create(person);
// const id2 = db.create(person2);
// const id3 = db.create(person3);
const customer = db.read(id);
const customers = db.readAll(); // array of users
db.update(id, { age: 22 }); // id
db.delete(id); // true