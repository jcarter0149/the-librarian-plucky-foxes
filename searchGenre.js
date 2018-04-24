
const searchGenre = (id, genre) => {
    const bookList = library.filter((k) => k.Genre === genre).map(k => k.Title).join(', ')
    printTransaction("Genre Search", findPatron(id), bookList, false)
}