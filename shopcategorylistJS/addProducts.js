const PRODUCTS_SECTION = document.querySelector(".products-section")

async function addProducts(){
    const response = await fetch("http://localhost:3000/products")
    const products = await response.json()
    PRODUCTS_SECTION.innerHTML = products.map(product => {
        return `
            <article class="productCard">
            <div>
                <div class="productImageWrapper">
                    <img class="productCard__image" src="./${product.image}" alt="loadede ikke">
                </div>
                <h3 class="productCard__title">${product.title}</h3>       
            </div>
                <div class="productCard__price">£${product.price}</div>
                <button class="productCard__button">Add to cart</button>
            </article>`
    }).join("")
}
async function addProductsCount(count) {
    const response = await fetch("http://localhost:3000/products");
    const products = await response.json();

    PRODUCTS_SECTION.innerHTML = ""; // Reset the products section HTML

    for (let i = 0; i < count; i++) {
        PRODUCTS_SECTION.innerHTML += `
            <article class="productCard">
                <div>
                    <div class="productImageWrapper">
                        <img class="productCard__image" src="./${products[i].image}" alt="loadede ikke">
                    </div>
                    <h3 class="productCard__title">${products[i].title}</h3>       
                </div>
                <div class="productCard__price">£${products[i].price}</div>
                <button class="productCard__button">Add to cart</button>
            </article>`;
    }
}

addProducts()

document.getElementById("addProductsCount").addEventListener("change", function (){
    if(this.value !== null) addProductsCount(this.value)
    else addProducts()
})