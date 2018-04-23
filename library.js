const library = [
    {
        Title: "Guns, Germs, and Steel",
        Author: "Jeremy Diamond",
        Genre: "Anthropology",
        ISBN:  9781586638634,
        checkedOut: false,
        dueDate: ''
    },
    {
        Title: "Jurassic Park",
        Author: "Michael Crichton",
        Genre: "Science Fiction",
        ISBN:  9780784838068,
        checkedOut: false,
        dueDate: ''
    },
    
    {
        Title: "Ender's Game",
        Author: "Orson Scott Card",
        Genre: "Science Fiction",
        ISBN: 0312932081,
        checkedOut: false,
        dueDate: ''
    }, 
    {
        Title: "Accidentlly Married",
        Author: "R.R. Banks",
        Genre: "Romance",
        ISBN: 1987558936,
        checkedOut: false,
        dueDate: ""
    },
    {
        Title: "The House At Pooh Corner",
        Author: "A.A. Milne",
        Genre: "Children\'s literature",
        ISBN: 0140361227, 
        checkedOut: false,
        dueDate: ""  
    },  
    {
        Title: 'Killers of the Flower Moon',
        Author: ' David Grann',
        Genre: '20th Century U.S. History',
        ISBN: 9780307742483,
        checkedOut: false,
        dueDate: ""
    },

    {
        Title: 'Greeks Bearing Gifts',
        Author: 'Philip Kerr',
        Genre: 'Suspense & Thrillers',
        ISBN: 9780399177064,
        checkedOut: false,
        dueDate: ""
    },
    {
        Title: " Let's explore diabetes with owls: Essays, Etc",
        Author: "David Sedaris",
        Genre: "Humor",
        ISBN:  9780316154697,
        checkedOut: false,
        dueDate: ''
    },
    
    {
        Title: " A game of thrones: A Song of Ice and Fire Series, Book 1",
        Author: "George R. R. Martin",
        Genre: "Science Fiction",
        ISBN:9780553103540  ,
        checkedOut: false,
        dueDate: ''
    },
    
    {
        Title: " God bless you, Mr. Rosewater",
        Author: "Kurt Vonnegut",
        Genre: "Science Fiction",
        ISBN: 9780385333474,
        checkedOut: false,
        dueDate: ''
    }, 

]

localStorage.setItem('library', JSON.stringify(library))

const saveLibrary = () => {
    localStorage.setItem('library', JSON.stringify(library))
}
