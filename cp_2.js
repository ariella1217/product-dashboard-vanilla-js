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
            handleError(error);
        });
}

// Helper function to get image URL: MOVED HERE BEFORE STEP 4
function getImageUrl(fields) {
    return fields.image[0].url;
}

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

// Step 6: Reusable function to handle errors
function handleError(error) {
    console.log('An error occurred: ' + error.message);
}

// Call the async function
fetchProductsAsync();

// Step 7: Call both functions after page loads
document.addEventListener('DOMContentLoaded', function() {
    fetchProductsThen();
    fetchProductsAsync();
});