document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica del Panel Lateral Retráctil ---
    const sidebar = document.querySelector('.sidebar');
    const toggleSidebarBtn = document.querySelector('.toggle-sidebar');
    const mainContent = document.querySelector('.main-content');
    const navLinks = document.querySelectorAll('.sidebar ul li a');

    toggleSidebarBtn.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
        mainContent.classList.toggle('expanded');
        // Cambiar el texto del botón
        if (sidebar.classList.contains('hidden')) {
            toggleSidebarBtn.textContent = '☰ Mostrar Menú';
        } else {
            toggleSidebarBtn.textContent = '✕ Ocultar Menú';
        }
    });

    // Añadir clase 'active' al enlace de la página actual
    const currentPage = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // --- Lógica del Carrusel (solo en index.html) ---
    const carouselSlide = document.querySelector('.carousel-slide');
    if (carouselSlide) {
        const carouselImages = document.querySelectorAll('.carousel-slide img');
        const prevBtn = document.querySelector('.carousel-nav .prev');
        const nextBtn = document.querySelector('.carousel-nav .next');

        let currentIndex = 0;
        const totalImages = carouselImages.length;

        function updateCarousel() {
            carouselSlide.style.transform = `translateX(${-currentIndex * 100 / totalImages}%)`;
        }

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalImages;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            updateCarousel();
        });

        // Autoplay del carrusel
        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalImages;
            updateCarousel();
        }, 5000); // Cambia cada 5 segundos
    }

    // --- Lógica del Carrito de Compras ---
    let cart = JSON.parse(localStorage.getItem('sushiCart')) || [];

    const updateCartDisplay = () => {
        const cartItemsContainer = document.getElementById('cart-items-container');
        const cartTotalElement = document.getElementById('cart-total');
        if (cartItemsContainer && cartTotalElement) {
            cartItemsContainer.innerHTML = '';
            let total = 0;

            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p>El carrito está vacío.</p>';
            } else {
                cart.forEach(item => {
                    const itemElement = document.createElement('div');
                    itemElement.classList.add('cart-item');
                    itemElement.innerHTML = `
                        <div class="cart-item-info">
                            <h4>${item.name}</h4>
                            <p>$${item.price.toFixed(2)} c/u</p>
                        </div>
                        <div class="cart-item-controls">
                            <button data-id="${item.id}" data-action="decrease">-</button>
                            <span>${item.quantity}</span>
                            <button data-id="${item.id}" data-action="increase">+</button>
                            <button data-id="${item.id}" data-action="remove">X</button>
                        </div>
                    `;
                    cartItemsContainer.appendChild(itemElement);
                    total += item.price * item.quantity;
                });
            }
            cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
            localStorage.setItem('sushiCart', JSON.stringify(cart));
        }
    };

    // Añadir producto al carrito
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const productElement = event.target.closest('.product-card');
            const productId = productElement.dataset.id;
            const productName = productElement.dataset.name;
            const productPrice = parseFloat(productElement.dataset.price);

            const existingItem = cart.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    quantity: 1
                });
            }
            alert(`${productName} agregado al carrito!`);
            updateCartDisplay(); // Actualiza el carrito si estamos en la página del carrito
        });
    });

    // Manejar cambios en el carrito (aumentar, disminuir, eliminar)
    const cartContainer = document.getElementById('cart-items-container');
    if (cartContainer) {
        cartContainer.addEventListener('click', (event) => {
            const target = event.target;
            if (target.tagName === 'BUTTON') {
                const itemId = target.dataset.id;
                const action = target.dataset.action;

                const itemIndex = cart.findIndex(item => item.id === itemId);

                if (itemIndex > -1) {
                    if (action === 'increase') {
                        cart[itemIndex].quantity++;
                    } else if (action === 'decrease') {
                        cart[itemIndex].quantity--;
                        if (cart[itemIndex].quantity <= 0) {
                            cart.splice(itemIndex, 1); // Eliminar si la cantidad llega a 0
                        }
                    } else if (action === 'remove') {
                        cart.splice(itemIndex, 1);
                    }
                    updateCartDisplay();
                }
            }
        });
    }

    // Proceso de Checkout (ejemplo simple)
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Tu carrito está vacío. Agrega algunos productos antes de comprar.');
                return;
            }
            const orderNumber = Math.floor(100000000000 + Math.random() * 900000000000).toString(); // Número aleatorio de 12 dígitos
            alert(`¡Pedido realizado con éxito! Tu número de seguimiento es: ${orderNumber}. Puedes rastrearlo en la sección "Seguimiento".`);
            
            // Simular almacenamiento del pedido para seguimiento
            let orders = JSON.parse(localStorage.getItem('sushiOrders')) || [];
            orders.push({
                orderId: orderNumber,
                items: cart,
                status: 'Pendiente', // Estado inicial
                timestamp: new Date().toLocaleString()
            });
            localStorage.setItem('sushiOrders', JSON.stringify(orders));
            
            cart = []; // Vaciar carrito
            localStorage.removeItem('sushiCart');
            updateCartDisplay();
        });
    }

    // --- Lógica de Seguimiento de Pedido ---
    const trackOrderBtn = document.getElementById('track-order-btn');
    const orderIdInput = document.getElementById('order-id-input');
    const trackingResults = document.getElementById('tracking-results');

    if (trackOrderBtn && orderIdInput && trackingResults) {
        trackOrderBtn.addEventListener('click', () => {
            const orderId = orderIdInput.value.trim();
            if (orderId) {
                let orders = JSON.parse(localStorage.getItem('sushiOrders')) || [];
                const foundOrder = orders.find(order => order.orderId === orderId);

                if (foundOrder) {
                    trackingResults.innerHTML = `
                        <p>Estado del Pedido <strong>${foundOrder.orderId}</strong>:</p>
                        <p><strong>Estado:</strong> ${foundOrder.status}</p>
                        <p><strong>Fecha/Hora:</strong> ${foundOrder.timestamp}</p>
                        <p><strong>Productos:</strong></p>
                        <ul>
                            ${foundOrder.items.map(item => `<li>${item.name} (x${item.quantity}) - $${item.price.toFixed(2)} c/u</li>`).join('')}
                        </ul>
                        <p>¡Gracias por tu compra!</p>
                    `;
                } else {
                    trackingResults.innerHTML = '<p>No se encontró un pedido con ese número de seguimiento. Por favor, verifica e inténtalo de nuevo.</p>';
                }
            } else {
                trackingResults.innerHTML = '<p>Por favor, ingresa un número de seguimiento.</p>';
            }
        });
    }

    // Cargar el carrito cuando la página del carrito se cargue
    if (document.getElementById('cart-items-container')) {
        updateCartDisplay();
    }
});