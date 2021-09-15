function readingStatus(books) {
    for (i in books) {
        if (books[i].haveRead) console.log(`'${books[i].author} have read ${books[i].title} book'`);
        else console.log(`'${books[i].author} haven't read ${books[i].title} book yet'`);
    }

}
var Books = [{
        author: 'Bill',
        title: 'The Road Ahead',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 10)
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