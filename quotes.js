const quotes=[
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "The world is a book and those who do not travel read only one page.",
        author: "Saint Augustine",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "To traval is to Live",
        author: "Hans Christian Andersen",
    },
    {
        quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author:"Nelson Mandela",
    },
    {
        quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        author:"Steve Jobs",
    },
    {
        quote:"If life were predictable it would cease to be life, and be without flavor.",
        author:"Eleanor Roosevelt",
    },
    {
        quote:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author:"Oprah Winfrey",
    },
    {
        quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author:"James Cameron",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//array 안에 있는 element에 어떻게 접근하냐?
//함수를 만들어야함..

console.log(quotes[0]); //0부터 10사이의 숫자들에 접근
//Math.random()*10 //0에서 10사이의 숫자들을 얻을 수  있따.
//console.log(quotes[Math.floor(Math.random()*10)]); //array가 몇갠지 맨날 세기 귀찮으니까 배열의 길이를 알아내기..
//console.log(quotes[Math.floor(Math.random()*quotes.length)]);

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;