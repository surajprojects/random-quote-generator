// Targetting necessary elements
const quoteText = document.querySelector("#quoteText");
const quoteAuthor = document.querySelector("#quoteAuthor");
const getQuoteBtn = document.querySelector("#getQuoteBtn");

// Function to get new quote and update the data
async function getNewQuote() {
    try {
        const response = await fetch("https://dummyjson.com/quotes/random");
        const result = await response.json();
        if (response.ok) {
            quoteText.textContent = result.quote;
            quoteAuthor.textContent = result.author;
        }
    }
    catch (error) {
        console.error("Unable to get quote, something went wrong!!!");
    }
};

// Call getNewQuote function initialize the quote data at load
getNewQuote();

// Add event listener to get another quote
getQuoteBtn.addEventListener("click", function (e) {
    e.preventDefault();
    getNewQuote();
});