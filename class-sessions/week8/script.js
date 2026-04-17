console.log('Page loaded successfully!');

document.addEventListener("DOMContentLoaded", function(){
   
    let button = document.querySelector("#addBtn");
    let sortOrder = "ASC";

    let products = [
        { name: "Laptop", price: 1200 },
        { name: "Phone", price: 800 },
        { name: "Tablet", price: 600 }
    ];

    let filteredProducts = [...products];
    
    function render() {

         let productList = document.querySelector("#productList");
         productList.innerHTML = "";
            
         filteredProducts.sort(function(p1, p2){
            return sortOrder === "ASC" ? p1.price - p2.price : p2.price - p1.price;
         });

         for (let i = 0; i < filteredProducts.length; i++){
            let li = document.createElement("li");
            li.textContent = `${filteredProducts[i].name}________${filteredProducts[i].price}$`;
            productList.appendChild(li);
         }

    }

    
    // data -> render -> UI


    button.addEventListener('click', function (){
        
        //read product name
        let nameInput = document.querySelector("#productName");
        let productName = nameInput.value;
    
        if (productName === undefined || productName.trim() === '') {
            return;
        }

        //read price
        let priceInput = document.querySelector("#productPrice");
        let productPrice = parseInt(priceInput.value);

        if (productPrice < 0) {
            return;
        }

        products.push({
            name: productName,
            price: productPrice,
        });
        render();
        nameInput.value = '';
        priceInput.value = '';
    });

    


    //Plan for today to add search and sort capabilities. Delete if time permits
    let filterBtn = document.querySelector("#filterBtn");
    
    filterBtn.addEventListener("click", () => {
        let priceFilterInput = document.querySelector("#priceFilterValue");
        let priceFilter = parseInt(priceFilterInput.value);

      

        filteredProducts = filteredProducts.filter(function(p){
            return p.price <= priceFilter;
        });

        render();

    });

    let toggleBtn = document.querySelector("#toggleSortOrderBtn");
    toggleBtn.addEventListener("click", () => {
        if (sortOrder === "ASC") {
            sortOrder = "DESC";
            toggleBtn.textContent = "Sort ▼";
        }
        else {
            sortOrder = "ASC";
            toggleBtn.textContent = "Sort ▲";
        }
        render();
    });

    render();
});
