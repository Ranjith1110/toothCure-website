document.addEventListener("DOMContentLoaded", () => {

    const textElement = document.getElementById("typing-text");
    const typingSpeed = 100; // Speed in milliseconds per character

    // Define text parts with color
    const textParts = [
        { text: "A ", color: "inherit" },
        { text: "Dental Service", color: "#5bd3c7" }, // Highlight color
        { text: " Provider!", color: "inherit" },
    ];

    let currentPartIndex = 0;
    let charIndex = 0;

    function typeText() {
        if (currentPartIndex < textParts.length) {
            const { text, color } = textParts[currentPartIndex];

            // Create a span for the current part if it doesn't exist
            let span = textElement.querySelector(`span[data-part="${currentPartIndex}"]`);
            if (!span) {
                span = document.createElement("span");
                span.setAttribute("data-part", currentPartIndex);
                span.style.color = color;
                textElement.appendChild(span);
            }

            // Add the next character
            span.textContent += text.charAt(charIndex);
            charIndex++;

            if (charIndex < text.length) {
                setTimeout(typeText, typingSpeed);
            } else {
                // Move to the next part
                charIndex = 0;
                currentPartIndex++;
                setTimeout(typeText, typingSpeed);
            }
        }
    }

    // Start the typing animation
    typeText();

    
});
