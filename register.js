
const patrons=[]

// Function factory
function createPatron (First,Last,Address,ID,favorite,bookshelf) {
    const newPatron = {
        First,
        Last,
        Address,
        ID,
        favorite,
        bookshelf
    } 

    patrons.push(newPatron)
}






