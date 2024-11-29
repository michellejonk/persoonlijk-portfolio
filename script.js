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

                // Add click event to each card
                cardElement.addEventListener("click", () => {
                    // Hide all cards
                    document.querySelectorAll("#projecten .card").forEach((c) => (c.style.display = "none"));

                    // Create an information section
                    let infoSection = document.querySelector("#info-section");
                    if (!infoSection) {
                        infoSection = document.createElement("div");
                        infoSection.id = "info-section";
                        infoSection.style.margin = "20px";
                        projectenSection.appendChild(infoSection);
                    }

                    // Add project-specific information
                    infoSection.innerHTML = `
                        <h2>${card.title}</h2>
                        <button id="back-button" style="margin-top: 20px;">Back</button>
                        <p id="project-info" style="border: 1px solid #ccc; padding: 10px;">
                            ${card.description}
                        </p>
                        <div id="carousel" style="margin: 20px 0; text-align: center;">
                            <button id="prev-btn" style="margin-right: 10px;">Previous</button>
                            <button id="next-btn" style="margin-left: 10px;">Next</button>
                        </div>
                    `;

                    // Set up carousel functionality
                    let currentImageIndex = 0;
                    const carouselDiv = infoSection.querySelector("#carousel");
                    const prevBtn = infoSection.querySelector("#prev-btn");
                    const nextBtn = infoSection.querySelector("#next-btn");

                    const updateMedia = () => {
                        // Remove the current media if it exists
                        const existingMedia = carouselDiv.querySelector("#carousel-media");
                        if (existingMedia) {
                            existingMedia.remove();
                        }

                        const currentMedia = card.carouselImages[currentImageIndex];
                        const isVideo = currentMedia.endsWith(".mp4");

                        // Create the new media element
                        const newElement = document.createElement(isVideo ? "video" : "img");
                        newElement.id = "carousel-media";
                        newElement.style.width = "1000px";
                        newElement.style.height = "400px";

                        if (isVideo) {
                            newElement.src = currentMedia;
                            newElement.autoplay = true;
                            newElement.loop = true;
                            newElement.controls = true;
                        } else {
                            newElement.src = currentMedia;
                            newElement.alt = `Project Media ${currentImageIndex + 1}`;
                        }

                        // Insert the new media element between the Previous and Next buttons
                        carouselDiv.insertBefore(newElement, nextBtn);
                    };

                    // Initialize the first media
                    updateMedia();

                    prevBtn.addEventListener("click", () => {
                        currentImageIndex =
                            (currentImageIndex - 1 + card.carouselImages.length) % card.carouselImages.length;
                        updateMedia();
                    });

                    nextBtn.addEventListener("click", () => {
                        currentImageIndex = (currentImageIndex + 1) % card.carouselImages.length;
                        updateMedia();
                    });

                    // Back button functionality
                    const backButton = infoSection.querySelector("#back-button");
                    backButton.addEventListener("click", () => {
                        // Show all cards
                        document.querySelectorAll("#projecten .card").forEach((c) => (c.style.display = "block"));

                        // Remove the information section
                        infoSection.remove();
                    });
                });
            });
        })
        .catch((error) => console.error("Error loading JSON:", error));
});
