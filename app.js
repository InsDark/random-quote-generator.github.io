const randomQuote = document.querySelector('#randomQuote')
let allQuotes = [
    {
        autor: 'Oscar Wilde',
        quote:  'Be yourself; everyone else is already taken.',
    },
    {
        autor: 'Marilyn Monroe',
        quote:  `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`,
    },
    {
        autor: 'Albert Einstein',
        quote:  `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`
    },
    {
        autor: 'Frank Zappa',
        quote:  'So many books, so little time.'
    }
]


randomQuote.addEventListener('click', () => {
    let quote = document.querySelector('.quote')
    let author = document.querySelector('.author')
    let quoteNumber = Math.floor(Math.random() * allQuotes.length)
    quote.textContent = allQuotes[quoteNumber].quote
    author.textContent = allQuotes[quoteNumber].autor
})