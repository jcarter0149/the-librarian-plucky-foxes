const findBookshelf = (id) => {
    const patron = patrons.find(patron => patron.ID === id)
    const patronBookshelf = patron.bookshelf
    return patronBookshelf
}

const findBook = title => {
    const book = library.find(currentBook => currentBook.Title === title)
    return book
}

const findBookOnBookshelf = (id, title) => {
     const book =  findBookshelf(id).find(currentBook => currentBook.Title === title)
     return book 
}

function findPatron(id) {
    return patrons.find(patron => patron.ID === id)
}


