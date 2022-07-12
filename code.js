var quotes = [
    "Be yourself; everyone else is already taken.", 
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "So many books, so little time.",
    "A room without books is like a body without a soul.",
    "You only live once, but if you do it right, once is enough.",
    "Be the change that you wish to see in the world.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "If you tell the truth, you don't have to remember anything.",
    "A friend is someone who knows all about you and still loves you.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
]
var authors = [
    "― Oscar Wilde",
    "― Albert Einstein",
    "― Frank Zappa",
    "― Marcus Tullius Cicero",
    "― Mae West",
    "― Mahatma Gandhi",
    "― Robert Frost",
    "― Mark Twain",
    "― Elbert Hubbard",
    "― Oscar Wilde",
]
function test() {
    var quote = document.getElementById("quote");
    var author = document.getElementById("author");
    var number = Math.floor(Math.random()*10);
    var text = "";
    var people = "";
    text += quotes[number];
    people += authors[number];
    quote.innerHTML = "'' " + text + "''";
    author.innerHTML = people;
}