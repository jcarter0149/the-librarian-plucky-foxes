const buildElement = (tag, content) => {
    const element = document.createElement([tag])
    element.textContent = content
    transactionArticle.appendChild(element)
}

const printTransaction = (transaction, patron, title, fee) => {
    const transactionArticle = document.createElement('article')
    buildElement('h3', `Transaction: ${transaction}`)
    buildElement('p', `Patron: ${patron}`)
    if (transaction === 'Checkout' || transaction === "Return") {
        buildElement('p',  `Title: ${title}`)
    }
    if fee {
        buildElement('p', 'Fee: $5.00')
    }
    body.appendChild(transactionArticle)
}



