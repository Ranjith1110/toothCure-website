document.addEventListener("DOMContentLoaded", () => {

    const textElement = document.getElementById("typing-text");
    const typingSpeed = 100;

    const textParts = [
        { text: "A ", color: "inherit" },
        { text: "Dental Service", color: "#5bd3c7" },
        { text: " Provider!", color: "inherit" },
    ];

    let currentPartIndex = 0;
    let charIndex = 0;

    function typeText() {
        if (currentPartIndex < textParts.length) {
            const { text, color } = textParts[currentPartIndex];

            let span = textElement.querySelector(`span[data-part="${currentPartIndex}"]`);
            if (!span) {
                span = document.createElement("span");
                span.setAttribute("data-part", currentPartIndex);
                span.style.color = color;
                textElement.appendChild(span);
            }
            
            span.textContent += text.charAt(charIndex);
            charIndex++;

            if (charIndex < text.length) {
                setTimeout(typeText, typingSpeed);
            } else {
                charIndex = 0;
                currentPartIndex++;
                setTimeout(typeText, typingSpeed);
            }
        }
    }

    typeText();

});


(function ($) {
    "use strict";

    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

})(jQuery);
