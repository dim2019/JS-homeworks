Object.prototype.mergeDeepRight = function(args) {
    for (key in args) {
        if (args[key] == mergeDeepRight) continue
        else if (typeof args[key] !== 'object') this[key] = args[key]
        else {
            if (Array.isArray(args[key])) {
                for (i of args[key]) {
                    this[key].unshift(i)
                }

            } else if ((this.hasOwnProperty(key)) == false) {
                this[key] = {}
            }
            this[key].mergeDeepRight(args[key])
        }

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
console.log(JSON.stringify(data))