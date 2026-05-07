console.log('Page loaded successfully!');

document.addEventListener("DOMContentLoaded", function(){
   
    let button = document.querySelector("#addBtn");
    let sortOrder = "ASC";

    let products = JSON.parse(localStorage.getItem("product-items")) || []; 

    function onProductsChange() {
        saveProducts();
        render();
    }

    function saveProducts() {
        localStorage.setItem("product-items", JSON.stringify(products));
    }
    
    function createItem(elType, text, index) {
        let el = document.createElement(elType);
        if (text) {
            el.textContent = text;
        }
        if (index !== undefined && index !== null && index >= 0) {
            el.dataset.index = index;
        }
        return el;
    }
    
    function removeProduct(index) {
        products.splice(index, 1);

        onProductsChange();
    }

    //let filteredProducts = [...products];
    
    function render() {

         let productList = document.querySelector("#productList");
         productList.innerHTML = "";
            
         products.sort(function(p1, p2){
            return sortOrder === "ASC" ? p1.price - p2.price : p2.price - p1.price;
         });

         for (let i = 0; i < products.length; i++) {

            let li = createItem("li", `${products[i].name}________${products[i].price}$`, i);
            productList.appendChild(li);

            // let li = createItem("li");
            // let div = createItem("div", null);            
            // let btn = createItem("button", "Remove");
            // btn.addEventListener('click', () => removeProduct(i)); 
            // let span = createItem("span", `${i + 1}.${products[i].name}________${products[i].price}$`);
            // div.appendChild(span);
            // div.appendChild(btn);
            // li.appendChild(div);
            // productList.appendChild(div);
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
        
        onProductsChange();

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

     let productList = document.querySelector("#productList");
     productList.addEventListener('click', function(event) {
        console.log(event.target);
        // if (event.target.dataset.index !== undefined) {
        //     removeProduct(event.target.dataset.index);
        // }
     });

    render();
});
