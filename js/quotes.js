const quotes = [
    {
        quote: "1",
        author: "1ㄱ",
    },
    {
        quote: "2",
        author: "ㄴ",
    },
    {
        quote: "3",
        author: "ㄷ",
    },
    {
        quote: "4",
        author: "ㄹ",
    },
    {
        quote: "5",
        author: "ㅁ",
    },
    {
        quote: "6",
        author: "ㅂ",
    },
    {
        quote: "7",
        author: "ㅅ",
    },
    {
        quote: "8",
        author: "ㅇ",
    },
    {
        quote: "9",
        author: "ㅈ",
    },
    {
        quote: "10",
        author: "ㅊ",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;