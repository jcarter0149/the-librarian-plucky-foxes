
const searchGenre = (id, genre) => {
    const bookList = []
    library.forEach(
        (k) => {
            if (k.Genre === genre) {
                bookList.push(k)
            }
    })
    let genreListing = ''
    bookList.forEach(
        (k) => {
            if (bookList.indexOf(k) < (bookList.length - 1)) {
                genreListing += k.Title + ", " 
            } else {
                genreListing += k.Title
            }
        }
    )
    printTransaction("Genre Search", findPatron(id), genreListing, false)
}