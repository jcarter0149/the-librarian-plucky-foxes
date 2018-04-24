
let returnCheckedBook = (ID, title) => {
    let bookTitle = findBook(title);
    let bookShelf = findBookshelf(ID);
    if (!bookTitle.checkedOut) {
        alert('Book not checked out!')
    } else {
        const fee = (Date.parse(bookTitle.dueDate)) < (Date.parse(new Date()))
        bookTitle.checkedOut = false;
        bookTitle.dueDate = " ";
        bookShelf.pop(findBookOnBookshelf(ID, title))
        printTransaction("Return", findPatron(ID), bookTitle.Title, fee)
        saveLibrary()
        savePatrons()
    }
}
