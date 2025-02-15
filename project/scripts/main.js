document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", function () {
            menu.classList.toggle("show");
        });

        document.querySelectorAll("#menu a").forEach(item => {
            item.addEventListener("click", function () {
                menu.classList.remove("show");
            });
        });
    }

    const currentYear = document.getElementById("currentyear");
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    const lastModified = document.getElementById("lastModified");
    if (lastModified) {
        lastModified.textContent = `Last Modified: ${document.lastModified}`;
    }

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            window.location.href = "thankyou.html";
        });
    }
});
