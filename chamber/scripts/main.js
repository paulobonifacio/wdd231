document.addEventListener("DOMContentLoaded", () => {
    // Toggle navigation menu
    const hamButton = document.querySelector("#menu");
    const navigation = document.querySelector("nav");

    hamButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        hamButton.classList.toggle("open");
    });

    // Update footer with current year and last modified date
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

    document.getElementById('menu').addEventListener('click', function() {
        const navList = document.getElementById('nav-list');
        navList.classList.toggle('open');
        this.classList.toggle('open');
    });
});
