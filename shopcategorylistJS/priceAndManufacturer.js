const PRICE_UL = document.querySelector(".price__ul");
const UNDER1000 = document.getElementById("under1000");
const UNDER2000 = document.getElementById("under2000");
const UNDER3000 = document.getElementById("under3000");
const UNDER4000 = document.getElementById("under4000");

async function getPrices() {
    const RESPONSE = await fetch("http://localhost:3000/products");
    const products = await RESPONSE.json();

    let under1000_count = 0;
    let under2000_count = 0;
    let under3000_count = 0;
    let under4000_count = 0;

    products.forEach((product) => {
        console.log(product.title)
        price = product.price;

        if (price <= 1000) under1000_count++;
        if (price > 1000 && price <= 2000) under2000_count++;
        if (price > 2000 && price <= 3000) under3000_count++;
        if (price > 3000 && price <= 4000) under4000_count++;
    });
    UNDER1000.innerHTML = under1000_count;
    UNDER2000.innerHTML = under2000_count;
    UNDER3000.innerHTML = under3000_count;
    UNDER4000.innerHTML = under4000_count;
}

getPrices();

const MANUFACTURER_UL = document.getElementById("manu__ul");

async function getManufacturers() {
    const RESPONSE = await fetch("http://localhost:3000/manufacturers");
    const MANUFACTURERS = await RESPONSE.json();


    MANUFACTURERS.forEach((manufacturer) => {
        manufacturer = manufacturer.manufacturer;

        const LI = document.createElement("li");
        const a = document.createElement("a");
        a.innerHTML = `${manufacturer} (${manufacturerCounts[manufacturer]})`;
        a.href = "#";
        LI.appendChild(a);
        MANUFACTURER_UL.appendChild(LI);
    });
}

// counts how many times a manufacture shows up in the products array
const manufacturerCounts = {};
async function countManufacturers() {
    const RESPONSE = await fetch("http://localhost:3000/products");
    const products = await RESPONSE.json();

      products.forEach((product) => {
        manufacturer = product.manufacturer;
        if (manufacturerCounts[manufacturer]) manufacturerCounts[manufacturer]++;
        else manufacturerCounts[manufacturer] = 1;
    })
}
countManufacturers();
getManufacturers();
countManufacturers()
