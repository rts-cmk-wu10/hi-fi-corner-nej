const UNDER1000 = document.getElementById("under1000");
const UNDER2000 = document.getElementById("under2000");
const UNDER3000 = document.getElementById("under3000");
const UNDER4000 = document.getElementById("under4000");

async function getPrices() {
    const RESPONSE = await fetch("http://localhost:3000/products");
    const products = await RESPONSE.json();

    const priceRanges = {
        under1000: 0,
        under2000: 0,
        under3000: 0,
        under4000: 0
    };

    products.forEach((product) => {
        const price = product.price;

        if (price <= 1000) priceRanges.under1000++;
        else if (price <= 2000) priceRanges.under2000++;
        else if (price <= 3000) priceRanges.under3000++;
        else if (price <= 4000) priceRanges.under4000++;
    });

    UNDER1000.innerHTML = priceRanges.under1000;
    UNDER2000.innerHTML = priceRanges.under2000;
    UNDER3000.innerHTML = priceRanges.under3000;
    UNDER4000.innerHTML = priceRanges.under4000;
}

getPrices();

const MANUFACTURER_UL = document.getElementById("manu__ul");

async function getManufacturers() {
    const RESPONSE = await fetch("http://localhost:3000/manufacturers");
    const MANUFACTURERS = await RESPONSE.json();

    countManufacturers()

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

// object to keep count of the manufactures in the products array
const manufacturerCounts = {};
function countManufacturers() {
    return new Promise(function(resolve, reject) {
        fetch("http://localhost:3000/products")
            .then(function(response) {
                return response.json();
            })
            .then(function(products) {
                products.forEach(function(product) {
                    manufacturer = product.manufacturer;
                    if (manufacturerCounts[manufacturer]) manufacturerCounts[manufacturer]++;
                    else manufacturerCounts[manufacturer] = 1;
                });
                resolve();
            })
            .catch(function(error) {
                reject(error);
            });
    });
}
// ".then" is important because it will count the manufactures in the products array,
// before the manufacturers are added to the manufacturers list
// otherwise it will run at the same time, and sometimes not be done counting before adding undefined numbers to the manufacturers list
countManufacturers().then(function() {
    getManufacturers();
});


async function manu(){
    const manufactures123 = document.querySelector(".manufactureres__ul")
    const response = await fetch("http://localhost:3000/manufacturers")
    const manufactures = await response.json()
    
    manufactures.forEach(manu => {
        const LI = document.createElement("li");
        LI.innerHTML = manu.manufacturer;
        manufactures123.appendChild(LI);
    })
}
manu();

