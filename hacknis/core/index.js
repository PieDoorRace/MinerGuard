document.addEventListener("DOMContentLoaded", function () {
    const pageLinks = document.querySelectorAll(".page-link");

    // Add a hover effect to page links
    pageLinks.forEach((link) => {
        link.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
        });

        link.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });
});


