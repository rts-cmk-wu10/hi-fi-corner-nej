const imageContainer = document.getElementById("imageContainer");
let images; // Define the images variable in a scope accessible to both functions

// Fetch the JSON data
fetch("/json-server-folder/db.json")
  .then((response) => response.json())
  .then((data) => {
    // Extract the 'products' array from the JSON data
    const products = data.products;

    // Loop through the products and create image elements
    products.forEach((productData) => {
      const img = document.createElement("img");
      img.classList.add("hifi__gallery-slider__img");
      img.src = productData.image; // Use the 'image' property from the product data
      img.alt = productData.title; // Use the 'title' property as alt text
      imageContainer.appendChild(img);
    });

    // After adding images to the container, initialize the slider
    images = document.querySelectorAll(".hifi__gallery-slider__img"); // Assign the images here
    initializeSlider();
  })
  .catch((error) => {
    console.error("Error fetching JSON data:", error);
  });

let currentImageIndex = 0;

function showImage() {
  // Remove --show class from all images
  images.forEach((img) => img.classList.remove("hifi__gallery-slider__img--show"));

  // Add --show class to the current image
  images[currentImageIndex].classList.add("hifi__gallery-slider__img--show");
}

function initializeSlider() {
  const prevArrow = document.querySelector(".arrow__left");
  const nextArrow = document.querySelector(".arrow__right");

  nextArrow.addEventListener("click", () => {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    showImage();
  });

  prevArrow.addEventListener("click", () => {
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    }
    showImage();
  });

  showImage();
}
