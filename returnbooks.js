
let returnCheckedBook = (ID, title) => {
    let bookTitle = findBook(title);
    let bookShelf = findBookshelf(ID);
    bookTitle.checkedOut = false;
    bookTitle.dueDate = " ";
    bookShelf.pop(findBookOnBookshelf(ID, title))
}
