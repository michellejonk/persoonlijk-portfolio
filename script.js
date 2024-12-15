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

                // Create an img element with default image
                const imgElement = document.createElement("img");
                imgElement.src = card.image;
                imgElement.alt = card.title;

                // Add the rest of the card content
                const h1Container = document.createElement("div");
                h1Container.id = "h1container";
                h1Container.innerHTML = `
                    <div>
                        <h1>${card.title}</h1>
                    </div>
                `;

                cardElement.appendChild(imgElement);
                cardElement.appendChild(h1Container);

                projectenSection.appendChild(cardElement);

                // Add click event to redirect to the specified page
                cardElement.addEventListener("click", () => {
                    if (card.link) {
                        window.location.href = card.link; // Redirect to the specified link in the JSON
                    } else {
                        console.error("No link provided for this card.");
                    }
                });

                // Image switching based on screen size
                const updateImage = () => {
                    imgElement.src = window.innerWidth <= 1000 ? card.mobileImage : card.image;
                };

                // Initial update and resize listener
                updateImage();
                window.addEventListener("resize", updateImage);
            });
        })
        .catch((error) => console.error("Error loading JSON:", error));
});

// Navbar scroll behavior
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    let currentScrollTop = window.scrollY || document.documentElement.scrollTop;

    if (window.innerWidth > 768) {
        const navbar = document.getElementById("navbar");

        if (currentScrollTop > lastScrollTop) {
            navbar.style.backgroundColor = "rgb(24, 33, 52)";
        } else if (currentScrollTop < lastScrollTop) {
            navbar.style.backgroundColor = "transparent";
        }

        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    } else {
        document.getElementById("navbar").style.backgroundColor = "rgb(24, 33, 52)";
    }
});

// Toggle nav-links visibility
document.getElementById("menu-toggle").addEventListener("click", function () {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
});
