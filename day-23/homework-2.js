class DB {
    constructor() {
        this.map = new Map()
        this.NewArr = []
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
        let ArrayOfUsers = []
        this.map.forEach((value) => {
            ArrayOfUsers.push(value.name)
        })
        console.log(ArrayOfUsers);
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
    find(args) {
        this.NewArr = []
        this.map.forEach((value, key) => {
            if (1) {}
        })
    }
}
const db = new DB();
const person = {
    name: 'Pitter',
    age: 21,
    country: 'ge',
    salary: 500
};

const person2 = {
    name: 'amiran',
    lastname: 'gamyrelidze',
    age: 75,
    country: 'ge',
    salary: 500
};

const query = {
    name: 'Pitter',
    country: 'ua',
    age: {
        min: 21
    },
    salary: {
        min: 300,
        max: 600
    }
};
const id = db.create(person);
const id2 = db.create(person2);
const customers = db.find(query); // array of users