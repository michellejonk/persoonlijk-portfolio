document.addEventListener("DOMContentLoaded", () => {
    const projectenSection = document.querySelector("#projecten");

    // Fetch data from JSON file
    fetch("cards.json")
        .then((response) => response.json())
        .then((cards) => {
            // Generate cards dynamically
            cards.forEach((card) => {
                const cardElement = document.createElement("div");
                cardElement.classList.add("card");
                cardElement.innerHTML = `
                    <img src="${card.image}" alt="${card.title}">
                    <h1>${card.title}</h1>
                `;
                projectenSection.appendChild(cardElement);

                // Add click event to redirect to the specified page
                cardElement.addEventListener("click", () => {
                    if (card.link) {
                        window.location.href = card.link; // Redirect to the specified link in the JSON
                    } else {
                        console.error("No link provided for this card.");
                    }
                });
            });
        })
        .catch((error) => console.error("Error loading JSON:", error));
});


// Keep track of the last scroll position
let lastScrollTop = 0;

// Add an event listener to the window for the 'scroll' event
window.addEventListener('scroll', function() {
    // Get the current scroll position
    let currentScrollTop = window.scrollY || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        // User scrolled down
       const navbar = document.getElementById("navbar")
        navbar.style.backgroundColor = "rgb(24, 33, 52)";
    } else if (currentScrollTop < lastScrollTop) {
        // User scrolled up
        navbar.style.backgroundColor = "transparent";
    }

    // Update the last scroll position
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Ensure it doesn't go negative
});
