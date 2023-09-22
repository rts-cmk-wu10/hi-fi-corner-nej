const CATEGORIES_UL = document.getElementById("categories__ul")
fetch("http://localhost:3000/categories")
    .then(response => response.json())
    .then(category => {
        category.forEach((category, index) =>{
           const LI = document.createElement("li")
            const SUB_UL = document.createElement("ul")
            LI.innerHTML = category.category
            LI.className = "categories__ulItem"
            
            if (index === 0) LI.classList.add("categories__ulItem_active")
            
            LI.classList.add(`categories__${category.category}`)
            LI.id = category.category
            let hasBeenAppended = false
            LI.addEventListener("click", function(){
                if(category.subcategories !== undefined && !hasBeenAppended){
                    category.subcategories.forEach(sub => {
                        console.log(123)
                        const SUB_LI = document.createElement("li")
                        const SUB_A = document.createElement("a")
                        SUB_A.href = `#${sub}`
                        SUB_A.innerHTML = sub
                        SUB_LI.appendChild(SUB_A)

                        SUB_UL.appendChild(SUB_LI)
                    })
                }

                    hasBeenAppended = true
                
            })
            
            CATEGORIES_UL.appendChild(LI)
            CATEGORIES_UL.appendChild(SUB_UL)
       })
    })
