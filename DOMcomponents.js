const buildElement = (tag, content) => {
    const element = document.createElement([tag])
    element.textContent = content
    return element
}

const printTransaction = (transaction, patron, title, fee) => {
    const body = document.querySelector('body')
    const transactionArticle = document.createElement('article')
    transactionArticle.appendChild(buildElement('h3', `Transaction: ${transaction}`))
    transactionArticle.appendChild(buildElement('p', `Patron: ${patron.First} ${patron.Last}`))
    if (transaction === 'Checkout' || transaction === "Return") {
        transactionArticle.appendChild(buildElement('p',  `Title(s): ${title}`))
    }
    if (fee) {
        transactionArticle.appendChild(buildElement('p', 'Fee: $5.00'))
    }
    body.appendChild(transactionArticle)
}



