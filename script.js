// Cart logic
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update the cart icon with the number of items
function updateCartIcon() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Add event listeners to all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const product = {
            id: e.target.dataset.id,
            name: e.target.dataset.name,
            price: parseFloat(e.target.dataset.price),
        };

        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartIcon();
        alert(`${product.name} added to cart!`);
    });
});

// Initial call to update cart icon on page load
updateCartIcon();
