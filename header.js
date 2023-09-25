const menuItems = document.querySelectorAll(".hifi__menu__link");

function showLink() {
    // Remove --link__active class from all menu items
    menuItems.forEach((item) => item.classList.remove("link__active"));

    // Add --link__active class to the corresponding menu item
    menuItems[currentImageIndex].classList.add("link__active");
}

// Rest of your code remains the same