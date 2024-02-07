document.addEventListener("DOMContentLoaded", function() {
    fetch("include/header.html")
        .then(response => response.text())
        .then(header => {
            document.querySelector("header").innerHTML = header;
        });

    fetch("include/footer.html")
        .then(response => response.text())
        .then(footer => {
            document.querySelector("footer").innerHTML = footer;
        });
});