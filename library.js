// const bookFactory = (Title, Author, Genre, ISBN, checkoutOut, dueDate) => {
//     const newBook = Object.create ({}, {
//         Title,
//         Author,
//         Genre,
//         ISBN,
//         checkOut, 
//         dueDate
//     })
//     library.push(newBook)
// } 



const myBook = Object.create({}, {
    Title: {
        enumerable: true, 
        writable: true, 
        value: 'Guns, Germs, and Steel'  
    }, 
    Author: {
        enumerable: true, 
        writable: true, 
        value: 'Jeremy Diamond'  
    }, 
    Genre: {
        enumerable: true, 
        writable: true, 
        value: 'Anthropology'  
    }, 
    ISBN: {
        enumerable: true, 
        writable: true, 
        value: 9781586638634  
    }, 
    checkedOut: {
        enumerable: true, 
        writable: true, 
        value: false  
    }, 
    dueDate: {
        enumerable: true, 
        writable: true, 
        value: ''  
    }
})