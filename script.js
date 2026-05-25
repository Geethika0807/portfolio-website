// Welcome message
alert("Welcome to my portfolio website!");

// Smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });

    });

});
// Dark mode toggle

const darkModeButton = document.getElementById("dark-mode-toggle");

darkModeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});
// Typing Animation

const text = [
    "Python Automation Learner",
    "Beginner Web Developer",
    "Building Real Projects"
];

let count = 0;
let index = 0;

let currentText = "";
let letter = "";

function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.getElementById("typing-text").textContent = letter;

    if (letter.length === currentText.length) {

        count++;

        index = 0;

        setTimeout(type, 1000);

    } else {

        setTimeout(type, 100);

    }

}

type();