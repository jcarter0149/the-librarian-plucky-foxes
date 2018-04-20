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
        value: ' A game of thrones: A Song of Ice and Fire Series, Book 1'  
    }, 
    Author: {
        enumerable: true, 
        writable: true, 
        value: 'George RR Martin'  
    }, 
    Genre: {
        enumerable: true, 
        writable: true, 
        value: 'Science Fiction'  
    }, 
    ISBN: {
        enumerable: true, 
        writable: true, 
        value: 9780553103540  
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

const firstBook = Object.create({}, {
    Title: {
        enumerable: true, 
        writable: true, 
        value: 'Welcome to the monkey house: Stories'  
    }, 
    Author: {
        enumerable: true, 
        writable: true, 
        value: 'Kurt Vonnegut'  
    }, 
    Genre: {
        enumerable: true, 
        writable: true, 
        value: 'Humor'  
    }, 
    ISBN: {
        enumerable: true, 
        writable: true, 
        value: 9780812993608  
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
const secondBook = Object.create({}, {
    Title: {
        enumerable: true, 
        writable: true, 
        value: "Let's explore diabetes with owls: Essays, Etc" 
    }, 
    Author: {
        enumerable: true, 
        writable: true, 
        value: 'David Sedaris'  
    }, 
    Genre: {
        enumerable: true, 
        writable: true, 
        value: 'Humor'  
    }, 
    ISBN: {
        enumerable: true, 
        writable: true, 
        value: 9780316154697  
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