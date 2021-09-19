Object.prototype.mergeDeepRight = function(args) {
    for (key in args) {
        if (args[key] == mergeDeepRight) continue
        else if (typeof args[key] === 'object') {
            if (Array.isArray(args[key])) {
                for (i of args[key]) {
                    this[key].push(i)
                }
                return this[key].reverse()
            } else if ((this.hasOwnProperty(key)) == false) {
                this[key] = {}
            }
            this[key].mergeDeepRight(args[key])
        } else this[key] = args[key]

    }
}

const data = {
    name: 'fred',
    age: 10,
    contact: {
        email: 'moo@example.com',
        meta: {
            verified: true,
            tags: ['important']
        }
    }
};
data.mergeDeepRight({
    age: 40,
    contact: {
        email: 'baa@example.com',
        favorite: true,
        meta: {
            tags: ['vip']
        }
    }
});
console.log(data.contact);