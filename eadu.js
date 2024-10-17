function redirectToPage(url) {
    window.location.href = url;
}
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const product = event.target.closest('.product');
        const name = product.dataset.name;
        const price = product.dataset.price;

        // Alert the user that the product has been added to the cart
        alert(`Added ₹${name} - ₹${price} to cart!`);
        // Here you could add the item to a shopping cart array or object
        // Example: shoppingCart.push({ name, price });
    });
});
