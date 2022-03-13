let text        = document.getElementById('text');
let author      = document.getElementById('author');
//let newQuote    = document.getElementById('new-quote');

let Phrases     = [];

const getPhrases = async () => {
    Phrases = await fetch('https://type.fit/api/quotes')
        .then(resp => resp.json());
    
    randomPhrase();
    }
    
const randomPhrase = () => {
    const r = Math.round( Math.random() * (Phrases.length - 0) + 0 );
    
    text.innerText    = `${Phrases[r].text}`;
    author.innerText  = `Author: ${Phrases[r].author}`;
}

const main = () => {
    getPhrases();
}

window.onload = main;