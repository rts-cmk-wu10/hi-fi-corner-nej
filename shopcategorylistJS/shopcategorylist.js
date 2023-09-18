const CATEGORIES_UL = document.getElementById("categories__ul")

const categories = [
    {
        name: "amplifier",
        subcategories: ["integrated amplifiers", "power amplifiers", "preamplifiers"]
    },
    {
        name: "Speakers",
        subcategories: ["integrated amplifiers", "power amplifiers", "preamplifiers"]
    },    {
        name: "Turntables",
        subcategories: ["integrated amplifiers", "power amplifiers", "preamplifiers"]
    },    {
        name: "CD Players",
        subcategories: ["integrated amplifiers", "power amplifiers", "preamplifiers"]
    },    {
        name: "Streamers",
        subcategories: ["integrated amplifiers", "power amplifiers", "preamplifiers"]
    },    {
        name: "Cables",
        subcategories: ["integrated amplifiers", "power amplifiers", "preamplifiers"]
    },    {
        name: "Furniture",
        subcategories: ["integrated amplifiers", "power amplifiers", "preamplifiers"]
    },    {
        name: "Headphones",
        subcategories: ["integrated amplifiers", "power amplifiers", "preamplifiers"]
    },    {
        name: "Home Cinema",
        subcategories: ["integrated amplifiers", "power amplifiers", "preamplifiers"]
    },    {
        name: "Ceiling Speakers",
        subcategories: ["integrated amplifiers", "power amplifiers", "preamplifiers"]
    },    {
        name: "TV",
        subcategories: ["integrated amplifiers", "power amplifiers", "preamplifiers"]
    },    {
        name: "Vinyl",
        subcategories: ["integrated amplifiers", "power amplifiers", "preamplifiers"]
    },    {
        name: "Outlet - Save ££££",
        subcategories: ["integrated amplifiers", "power amplifiers", "preamplifiers"]
    }
]
categories.forEach(category => {
    const LI = document.createElement("li")
    LI.innerText = category.name
    LI.className = "categories__ulItem"
    CATEGORIES_UL.appendChild(LI)
})