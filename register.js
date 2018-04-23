let patronCounter = 0
const patrons=[]
function savePatrons() {localStorage.setItem('patrons', JSON.stringify(patrons))}
savePatrons()

// Function factory
function createPatron (First,Last,Address,favorite) {
    patronCounter++
    const newPatron = {
        First,
        Last,
        Address,
        favorite,
        ID: patronCounter,
        bookshelf:[]
    } 
    patrons.push(newPatron)
    savePatrons()
}






