// Index Page End
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


  
  const animateCounter = (element, targetValue, duration) => {
    const interval = 20; 
    const increment = Math.ceil((targetValue / duration) * interval);
    let currentValue = 0;

    const updateCounter = () => {
      currentValue += increment;
      if (currentValue > targetValue) {
        currentValue = targetValue;
      }
      element.textContent = currentValue;

      if (currentValue < targetValue) {
        setTimeout(updateCounter, interval);
      }
    };

    updateCounter();
  };

  
  const counters = document.querySelectorAll("[data-counter]");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counterElement = entry.target;
          const targetValue = parseInt(counterElement.getAttribute("data-target"));
          const duration = parseInt(counterElement.getAttribute("data-duration"));

          
          animateCounter(counterElement, targetValue, duration);
          observer.unobserve(counterElement);
        }
      });
    },
    {
      threshold: 0.5, 
    }
  );

  counters.forEach((counter) => observer.observe(counter));

});
// Index Page End

// jQuery Start
(function ($) {
  "use strict";

  $(".service-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 1000, 
    autoplaySpeed: 500, 
    smartSpeed: 500, 
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
// jQuery End
