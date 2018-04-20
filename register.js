let patronCounter = 0
const patrons=[]

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
}






