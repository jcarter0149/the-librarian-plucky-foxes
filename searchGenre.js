
const searchGenre = (genre) => {
    const bookList = []
    library.forEach(
        (k) => {
            if (k.Genre === genre) {
                bookList.push(k)
            }
    })
    return bookList
}