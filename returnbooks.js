// When book is checked out, change boolean to false
function returnBook(Title){
    let matchingBook;
    let bookDB = library;
    let matchingBooks = bookDB.filter((Title) => {
        return Title === library.Title;
    });
    if (matchingBooks.length === 1) {
        matchingBook= matchingBooks[0];
    }
    if (matchingBook && !matchingBook.checkedOut) {
        matchingBook.checkOut = false;
        this.bookshelf = bookshelf.filter((book) => {
            return bookDB.title !== title;
        })
        return this.bookshelf;
    } else {
        return null;
    }
}
