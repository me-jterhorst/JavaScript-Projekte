const BTN = document.querySelector('#btn');

const QUOTE = 
[
    {
        quote: "Success consists of going from failure to failure without loss of enthusiasm.",
        author: "-Winston Churchill-"
    },
    {
        quote: "Diplomacy is the art of telling people to go to hell in such a way that they ask for directions.",
        author: "-Winston Churchill-"
    },
    {
        quote: "Without training, they lacked knowledge. Without knowledge, they lacked confidence. Without confidence, they lacked victory",
        author: "-Julius Cesar-"
    },
    {
        quote: "Never interrupt your enemy, when he is making a mistake.",
        author: "-Napoleon Bonaparte-"
    },
    {
        quote: "The most effective way to do it is to do it.",
        author: "-Amelia Earhart-"
    },
    {
        quote: "In a gentle way, you can shake the world.",
        author: "-Mahatma Gandhi-"
    }
];

BTN.addEventListener('click', event =>
{
    let random = Math.floor(Math.random()* QUOTE.length);
    document.getElementById('quote').textContent = QUOTE[random].quote;
    document.getElementById('author').textContent = QUOTE[random].author;
})