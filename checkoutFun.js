let today = new Date();
const dd = today.getDate();
const mm = today.getMonth()+1;
const yyyy = today.getFullYear(); 
today = (mm + "/" + dd + "/" + yyyy)
const fortnite = new Date(Date.now() + 12096e5)

const findBookshelf = id => {
    let patronBookshelf
    patrons.forEach(
        patron => {
            if (patron.ID === id)
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
    return book
 }
 
 function checkout(id, title) {
 
    patronBookshelf(id).push(foundBook(title))
 }


    // let matchingBook;
//     let matchingBooks = library.filter((book) => {
//         return book.Title === library.Title;
//     }
// );
//     if (matchingBooks.length === 1) {
//         matchingBook = matchingBooks [0];
// }
//     if (matchingBook && !matchingBook.checkedOut){
//         matchingBook.checkedOut = true;
//         this.bookshelf.push(matchingBook);
//         return this.bookshelf && fortnite;
//     }else {
//         return null;
    // }

