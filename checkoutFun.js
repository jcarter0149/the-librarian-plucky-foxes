let today = new Date();
const dd = today.getDate();
const mm = today.getMonth()+1;
const yyyy = today.getFullYear(); 
today = (mm + "/" + dd + "/" + yyyy)
const fortnite = new Date(Date.now() + 12096e5)

function checkOut(Title){
    let matchingBook;
    let bookDB = library;
    let matchingBooks = bookDB.filter((book) => {
        return book.Title === library.Title;
    }
);
    if (matchingBooks.length === 1) {
        matchingBook = matchingBooks [0];
}
    if (matchingBook && !matchingBook.checkedOut){
        matchingBook.checkedOut = true;
        this.bookshelf.push(matchingBook);
        return this.bookshelf && fortnite;
    }else {
        return null;
    }
}