function readingStatus(books) {
    for (i in books) {
        Object.defineProperty(books[i], "daysAgo", {
            get() {
                const oneDay = 24 * 60 * 60 * 1000;
                return Math.round(Math.abs((new Date() - this.dateOfRead) / oneDay));
            }
        })
        if (books[i].haveRead) console.log(`${books[i].author} have read ${books[i].title} book ${books[i].daysAgo} ago`);
        else console.log(`${books[i].author} haven't read ${books[i].title} book yet`);
    }
}
var Books = [{
        author: 'Bill',
        title: 'The Road Ahead',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 10),
    },
    {
        author: 'Steve',
        title: 'Walter Isaacson',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 5)
    },
    {
        author: 'Jhon',
        title: 'The Hunger Games',
        haveRead: false,
        dateOfRead: NaN
    }
]
readingStatus(Books);