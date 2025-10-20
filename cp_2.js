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

// Function to display products
function displayProducts(products) {
    console.log('Displaying products:', products);
}

fetchProductsAsync();