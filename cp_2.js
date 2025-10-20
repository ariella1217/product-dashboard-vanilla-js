// Step 3: In cp_2.js, define a function fetchProductsThen():

// Function to fetch products using .then()
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
        .then(function(response) {
            return response.json();
        })
        .then(function(products) {
            products.forEach(function(product) {
                console.log(product.fields.name);
            });
        })
        .catch(function(error) {
            console.log('Error fetching products:', error);
        });
}

fetchProductsThen();

// Step 4: Create a function fetchProductsAsync():
async function fetchProductsAsync() {
    try {
        var response = await fetch('https://www.course-api.com/javascript-store-products');
        var products = await response.json();
        displayProducts(products);
    } catch (error) {
        handleError(error);
    }
}

// Step 5: Write displayProducts(products)
function displayProducts(products) {
    var container = document.getElementById('product-container');
    container.innerHTML = ''; // clear previous
    
    products.slice(0, 5).forEach(function(p) {
        var name = p.fields.name;
        var price = p.fields.price;
        var imageUrl = getImageUrl(p.fields);
        
        var card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = '<img class="product-image" src="' + imageUrl + '" alt="' + name + '">' +
                        '<div class="product-name">' + name + '</div>' +
                        '<div class="product-price">$' + (price / 100).toFixed(2) + '</div>';
        
        container.appendChild(card);
    });
}