const quotes = ["The only way to do great work is to love what you do.",
"In the end, we will remember not the words of our enemies, but the silence of our friends.",
"The greatest glory in living lies not in never falling, but in rising every time we fall.",
"You miss 100% of the shots you don't take.",
"The only limit to our realization of tomorrow will be our doubts of today.",
"The only true wisdom is in knowing you know nothing.",
"Success is not final, failure is not fatal: It is the courage to continue that counts.",
"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
"Life is what happens when you're busy making other plans.",
"The best way to predict the future is to create it.",
"The journey of a thousand miles begins with one step.",
"Believe you can and you're halfway there.",
"Happiness is not something ready-made. It comes from your own actions.",
"The only thing necessary for the triumph of evil is for good men to do nothing.",
"Be the change that you wish to see in the world.",
"It does not matter how slowly you go as long as you do not stop.",
"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
"The future belongs to those who believe in the beauty of their dreams.",
"The greatest glory in living lies not in never falling, but in rising every time we fall.",
"You must be the change you wish to see in the world."]

const authors = ["Steve Jobs", "Martin Luther King Jr.", "Nelson Mandela", "Wayne Gretzky", "Franklin D. Roosevelt", "Socrates", "Winston Churchill", "Ralph Waldo Emerson", "John Lennon", "Abraham Lincoln", "Lao Tzu", "Theodore Roosevelt", "Dalai Lama", "Edmund Burke", "Mahatma Gandhi", "Confucious", "Albert Schweitzer", "Eleanor Roosevelt", "Confucius", "Mahatma Gandhi"]

const result1 = document.getElementById("p1");

const result2 = document.getElementById("p2");

result1.innerHTML = quotes[Math.floor(Math.random() * quotes.length)]
    result2.innerHTML = `--- ${authors[Math.floor(Math.random() * authors.length)]}`

function generate()
{

    const result1 = document.getElementById("p1");

    const result2 = document.getElementById("p2");

    let n = Math.floor(Math.random() * quotes.length);

    result1.innerHTML = quotes[n]
    result2.innerHTML = `--- ${authors[n]}`

}


function copy()
{
    navigator.clipboard.writeText(document.getElementById("p1").innerHTML);
}