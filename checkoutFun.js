const fortnite = getDate(Date.now() + 12096e5)

function getDate (currentDate){
    let today = new Date(currentDate);
    const dd = today.getDate();
    const mm = today.getMonth()+1;
    const yyyy = today.getFullYear(); 
    return  (mm + "/" + dd + "/" + yyyy)
}

const checkout = (id, title) => {
    const bookshelf = findBookshelf(id)
    const book = findBook(title)
    if (book.checkedOut)
    alert(`This book is currently checked out. It is due back ${book.dueDate}`
    )
    else {
    book.dueDate = fortnite
    book.checkedOut = true
    bookshelf.push(book)
    printTransaction("Checkout", findPatron(id), book.Title, false)
    }
    savePatrons()
    saveLibrary()
}




