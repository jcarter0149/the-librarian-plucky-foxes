let today = new Date();
const dd = today.getDate();
const mm = today.getMonth()+1;
const yyyy = today.getFullYear(); 
today = (mm + "/" + dd + "/" + yyyy)
const fortnite = new Date(Date.now() + 12096e5)


const checkout = (id, title) => {
    const bookshelf = findBookshelf(id)
    const book = findBook([title])
    if (library.title === bookshelf.title)
    alert(`This book is currently checked out. It is due back ${fortnite}`
    )
    else (library.title !== bookshelf.title)
    library.dueDate = fortnite
    library.checkedOut = true
    bookshelf.push(library.title)
}


// const findBookshelf = (id) => {
//     const patron = patrons.find(patron => patron.ID === id)
//     const patronBookshelf = patron.bookshelf
//     return patronBookshelf
// }

// const findBook = title => {
//     const book = library.find(currentBook => book.Title === title)
//     return book
}



