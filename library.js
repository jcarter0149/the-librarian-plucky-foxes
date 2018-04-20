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

const firstBook = Object.create({}, {
    Title: {
        enumerable: true, 
        writable: true, 
        value: 'Killers of the Flower Moon'  
    }, 
    Author: {
        enumerable: true, 
        writable: true, 
        value: 'David Grann'  
    }, 
    Genre: {
        enumerable: true, 
        writable: true, 
        value: '20th Century U.S. History'  
    }, 
    ISBN: {
        enumerable: true, 
        writable: true, 
        value: 9780307742483  
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
        value: 'Greeks Bearing Gifts'  
    }, 
    Author: {
        enumerable: true, 
        writable: true, 
        value: 'Philip Kerr'  
    }, 
    Genre: {
        enumerable: true, 
        writable: true, 
        value: 'Suspense & Thriller'  
    }, 
    ISBN: {
        enumerable: true, 
        writable: true, 
        value: 9780399177064  
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