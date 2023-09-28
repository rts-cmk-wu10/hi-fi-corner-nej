const CATEGORIES_UL = document.getElementById("categories__ul");
let activeLI = null; // Use to store the list item with the active class later in the code

async function fetchCategories() {
    try {
        const response = await fetch("http://localhost:3000/categories");
        const categories = await response.json();

        categories.forEach((category, index) => {
            const LI = document.createElement("li");
            const SUB_UL = document.createElement("ul");
            LI.innerHTML = category.category;
            LI.className = "categories__ulItem";

            // add active class to the first list item, and place that item in activeLI variable
            if (index === 0) {
                LI.classList.add("categories__ulItem_active");
                activeLI = LI;
            }

            LI.classList.add(`categories__${category.category}`);
            LI.id = category.category;

            LI.addEventListener("click", function () {

                // if a active class has been assigned to a variable, remove it
                if (activeLI !== null) {
                    activeLI.classList.remove("categories__ulItem_active");
                }
                // assign the class to the clicked list item, and update variable
                LI.classList.add("categories__ulItem_active");
                activeLI = LI;

                if (category.subcategories && category.subcategories.length > 0 && !SUB_UL.hasChildNodes()) {
                    category.subcategories.forEach((sub) => {
                        const SUB_LI = document.createElement("li");
                        const SUB_A = document.createElement("a");
                        SUB_A.href = `#${sub}`;
                        SUB_A.textContent = sub;
                        SUB_LI.appendChild(SUB_A);
                        SUB_UL.appendChild(SUB_LI);
                    });
                }
            });

            CATEGORIES_UL.appendChild(LI);
            CATEGORIES_UL.appendChild(SUB_UL);
        });
    } catch (error) {
        console.error("Error fetching categories:", error);
    }
}

fetchCategories();


async function countProducts() {
    try {
        const response = await fetch("http://localhost:3000/products");
        const products = await response.json();
        const productCount = products.length;
        const productCountElement = document.querySelector(".products__count");
        
        productCountElement.textContent = productCount;
    }
    catch(error) {
        console.error("Error fetching products:", error);
    }
}

countProducts()
