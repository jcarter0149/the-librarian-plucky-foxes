
let returnCheckedBook = (title, ID) => {
    let title = findBook([title]);
    let bookShelf = findBookShelf([ID]);
    title.checkedOut = false;
    title.dueDate = " ";
    bookShelf.pop(findBookOnBookshelf([title])
}

