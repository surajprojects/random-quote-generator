const btnNewQuote = document.querySelector("#btnNewQuote");
const quoteContent = document.querySelector("#quoteContent");
const authorName = document.querySelector("#authorName");

async function getNewQuote() {
    try {
        const response = await fetch('https://dummyjson.com/quotes/random');
        const result = await response.json();
        if (response.ok) {
            quoteContent.textContent = result.quote;
            authorName.textContent = result.author;
        }
    }
    catch (error) {
        console.error("Unable to get quote, something went wrong!!!");
    }
};

getNewQuote();

btnNewQuote.addEventListener("click", function (e) {
    e.preventDefault();
    getNewQuote();
});
