(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();

})(jQuery);

// Texts with color changes for specific words
const texts = [
    [
        { text: "A ", class: "" }, // Normal text
        { text: "Dental Service ", class: "text-blue" }, // Highlighted word in blue
        { text: "Provider! ", class: "" } // Normal punctuation
    ]
];

let textIndex = 0;  // Which line we're typing
let wordIndex = 0;  // Which word in the line we're typing
let charIndex = 0;  // Which character in the current word
const typingSpeed = 150;  // Speed of typing

function typeEffect() {
    const typingTextElement = document.getElementById("typing-text");

    // Get the current line and word
    const currentLine = texts[textIndex];
    const currentWordObj = currentLine[wordIndex];
    const currentWord = currentWordObj.text;

    // Create a span for the word if it doesn't exist yet
    let currentSpan = typingTextElement.querySelectorAll('span')[wordIndex];
    if (!currentSpan) {
        currentSpan = document.createElement('span');
        currentSpan.className = currentWordObj.class;
        typingTextElement.appendChild(currentSpan);
    }

    // Type each character of the current word
    if (charIndex < currentWord.length) {
        currentSpan.innerHTML += currentWord.charAt(charIndex); // Append the next character
        charIndex++;
        setTimeout(typeEffect, typingSpeed); // Continue typing
    } else {
        // Move to the next word if available
        wordIndex++;
        if (wordIndex < currentLine.length) {
            charIndex = 0; // Reset the character index for the next word
            setTimeout(typeEffect, typingSpeed); // Continue typing the next word
        } else {
            // Move to the next line if available
            textIndex++;
            if (textIndex < texts.length) {
                wordIndex = 0; // Reset word index for the next line
                charIndex = 0; // Reset character index for the next line
                // Add a line break before the next line
                const lineBreak = document.createElement('br');
                typingTextElement.appendChild(lineBreak);
                setTimeout(typeEffect, 1000); // Pause for 1 second before typing the next line
            } else {
                // After all lines are typed, remove the cursor
                typingTextElement.style.borderRight = "none"; // Stop cursor when done typing
            }
        }
    }

    // Add blinking cursor effect only to the current line
    typingTextElement.classList.remove('blinking-cursor');
    if (wordIndex < currentLine.length) {
        typingTextElement.classList.add('blinking-cursor');
    }
}

// Start the typing effect when the page loads
window.onload = function () {
    typeEffect();
};

