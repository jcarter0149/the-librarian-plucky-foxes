buildElement = (tag, content) => {
    const element = document.createElement([tag])
    element.textContent = content
    transactionArticle.appendChild(element)
}

const printTransaction = (Transaction, Patron, Title, Fee) => {
    const transactionArticle = document.createElement('article')
    buildElement('h3', `Transaction: ${Transaction}`)
    buildElement('p', `Patron: ${Patron}`)
    buildElement('p',  `Title: ${Title}`)
    buildElement('p', `Fee: ${Fee}`)
    body.appendChild(transactionArticle)
}



