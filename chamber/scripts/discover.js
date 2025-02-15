document.addEventListener("DOMContentLoaded", () => {
    setupMenu();
    loadPlaces();
});

function setupMenu() {
    const menuButton = document.getElementById("menu");
    const navList = document.querySelector("nav ul");

    if (menuButton && navList) {
        menuButton.addEventListener("click", () => {
            navList.classList.toggle("open");
            menuButton.classList.toggle("open");
        });
    } else {
        console.warn("Menu button or navigation list not found!");
    }
}

async function loadPlaces() {
    try {
        const response = await fetch("data/places.json");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const container = document.querySelector(".grid-container");

        data.places.forEach((place, index) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.style.gridArea = `card${index + 1}`;

            card.innerHTML = `
                <h2>${place.title}</h2>
                <figure>
                    <img src="${place.image}" alt="${place.title}">
                </figure>
                <address>${place.address}</address>
                <p>${place.description}</p>
                <a href="${place.link}" target="_blank">
                    <button>Learn More</button>
                </a>
            `;

            container.appendChild(card);
        });
    } catch (error) {
        console.error("Error loading places:", error);
    }
}
