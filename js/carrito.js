let cart = [];

function addToCart(button) {
    const product = button.parentElement;
    const name = product.getAttribute('data-name');
    const price = parseFloat(product.getAttribute('data-price'));
            
    const existingProduct = cart.find(item => item.name === name);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let totalPrice = 0;
       cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.onclick = () => {
            removeFromCart(item.name);
        };
        li.appendChild(removeButton);
           cartItems.appendChild(li);
        totalPrice += item.price * item.quantity;
       });
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
       updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('El carrito está vacío.');
        return;
    }
    alert('Compra realizada con éxito!');
    cart = [];
    updateCart();
}