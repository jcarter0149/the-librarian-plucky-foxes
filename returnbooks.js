const findcheckOut = id => {
let patronBookshelf
    patrons.forEach(
        patron => {
            if (patron.ID === checkOut)
            patronBookshelf = patron.bookshelf
        }
    )
    return patronBookshelf
 }
 
 const findBook = title => {
    let book
    library.forEach(
        currentBook => {
            if (book.Title === title)
            book === currentBook
        }
    )
    return bookToLibrary
 }
 
 function returnBook(id, title) {
 
    patronBookshelf(id).push(foundBook(title))
 }




// When book is checked out, change boolean to false
// function returnBook(Title){
//     let matchingBook;
//     let bookDB = library;
//     let matchingBooks = bookDB.filter((Title) => {
//         return Title === library.Title;
//     });
//     if (matchingBooks.length === 1) {
//         matchingBook= matchingBooks[0];
//     }
//     if (matchingBook && !matchingBook.checkedOut) {
//         matchingBook.checkOut = false;
//         this.bookshelf = bookshelf.filter((book) => {
//             return bookDB.title !== title;
//         })
//         return this.bookshelf;
//     } else {
//         return null;
//     }
// }
