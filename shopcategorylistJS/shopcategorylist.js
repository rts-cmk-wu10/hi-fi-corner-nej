const CATEGORIES_UL = document.getElementById("categories__ul");

async function fetchCategories() {
    try {
        const response = await fetch("http://localhost:3000/categories");
        const categories = await response.json();

        categories.forEach((category, index) => {
            const LI = document.createElement("li");
            const SUB_UL = document.createElement("ul");
            LI.innerHTML = category.category;
            LI.className = "categories__ulItem";

            if (index === 0) LI.classList.add("categories__ulItem_active");

            LI.classList.add(`categories__${category.category}`);
            LI.id = category.category;

            LI.addEventListener("click", function () {
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
