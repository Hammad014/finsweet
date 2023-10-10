document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const listItems = document.querySelector(".list-items");

    menuButton.addEventListener("click", function () {
        listItems.classList.toggle("active");
    });
});