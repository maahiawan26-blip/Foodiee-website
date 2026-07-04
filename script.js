// document.addEventListener("DOMContentLoaded", () => {
//     // 1. MOBILE MENU TOGGLE WITH CORRECTION
//     const mobileMenu = document.getElementById('mobile-menu');
//     const navLinks = document.querySelector('.nav-links');

//     if (mobileMenu && navLinks) {
//         mobileMenu.addEventListener('click', () => {
//             navLinks.classList.toggle('active');
            
//             // Icon toggle correction
//             const icon = mobileMenu.querySelector('i');
//             if (icon) {
//                 icon.classList.toggle('fa-bars');
//                 icon.classList.toggle('fa-xmark');
//             }
//         });
//     }

//     // Navigation links click logic
//     document.querySelectorAll('.nav-links a').forEach(link => {
//         link.addEventListener('click', () => {
//             navLinks.classList.remove('active');
//             const icon = mobileMenu.querySelector('i');
//             if (icon) {
//                 icon.classList.add('fa-bars');
//                 icon.classList.remove('fa-xmark');
//             }
//         });
//     });
// });


// // REGISTER GSAP PLUGINS AT THE TOP
// gsap.registerPlugin(ScrollTrigger);

// // 1. DYNAMIC RESPONSIVE MOBILE NAVIGATION TRACKER
// const mobileMenu = document.getElementById('mobile-menu');
// const navLinks = document.querySelector('.nav-links');

// mobileMenu.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
//     const icon = mobileMenu.querySelector('i');
//     icon.classList.toggle('fa-bars');
//     icon.classList.toggle('fa-xmark');
// });

// // Close mobile navigation layout upon selecting targets
// document.querySelectorAll('.nav-links a').forEach(link => {
//     link.addEventListener('click', () => {
//         navLinks.classList.remove('active');
//         const icon = mobileMenu.querySelector('i');
//         icon.classList.add('fa-bars');
//         icon.classList.remove('fa-xmark');
//     });
// });

// // 2. LIVE SECTIONS SEARCH ENGINE INTERACTION PIPELINE
// const searchInput = document.querySelector('.search-container input');
// const searchBtn = document.querySelector('.btn-search');

// searchBtn.addEventListener('click', () => {
//     const rawValue = searchInput.value.trim();
//     if (rawValue) {
//         alert(`Searching backend nodes for: "${rawValue}" in your perimeter...`);
//     } else {
//         alert('Please specify a destination delivery point first.');
//     }
// });

// // 3. COMPLETE LIVE UPDATE ADD TO CART ENGINE
// let globalCartItemsCount = 0;
// const uiCartBadge = document.getElementById('cart-badge');
// const allAddToCartButtons = document.querySelectorAll('.btn-add-cart');

// allAddToCartButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         // Increment global counter metrics
//         globalCartItemsCount++;
//         uiCartBadge.innerText = globalCartItemsCount;

//         // Micro GSAP scale bubble effect on the Navbar badge icon
//         gsap.fromTo('#cart-badge', 
//             { scale: 0.5 }, 
//             { scale: 1.3, duration: 0.15, yoyo: true, repeat: 1, ease: "power2.out" }
//         );

//         // Interactive visual feedback changing target configurations
//         const persistentStateText = button.innerHTML;
//         button.innerHTML = 'Added to Basket <i class="fa-solid fa-check"></i>';
//         button.style.backgroundColor = '#ffffff';
//         button.style.color = '#000000';
//         button.style.borderColor = '#ffffff';

//         // Gracefully reset buttons state structural layouts
//         setTimeout(() => {
//             button.innerHTML = persistentStateText;
//             button.style.backgroundColor = '';
//             button.style.color = '';
//             button.style.borderColor = '';
//         }, 1200);
//     });
// });

// // 4. ELITE GSAP SMOOTH SCROLL ANIMATION SUITE
// // Initial load entrance transitions
// gsap.from('.hero-content h1', { opacity: 0, y: 60, duration: 1.2, ease: "power4.out" });
// gsap.from('.hero-content p', { opacity: 0, y: 40, duration: 1.2, delay: 0.2, ease: "power4.out" });
// gsap.from('.search-container', { opacity: 0, scale: 0.9, duration: 0.9, delay: 0.4, ease: "back.out(1.7)" });
// gsap.from('.hero-image', { opacity: 0, x: 80, rotate: 3, duration: 1.4, delay: 0.3, ease: "power3.out" });

// // Scroll trigger pipelines for repetitive multi-card grids
// gsap.from('.category-card', {
//     scrollTrigger: {
//         trigger: '.categories',
//         start: 'top 85%'
//     },
//     opacity: 0,
//     y: 40,
//     stagger: 0.08,
//     duration: 0.7,
//     ease: "power2.out"
// });

// gsap.from('.restaurant-card', {
//     scrollTrigger: {
//         trigger: '.restaurants',
//         start: 'top 80%'
//     },
//     opacity: 0,
//     y: 60,
//     stagger: 0.15,
//     duration: 0.9,
//     ease: "power3.out"
// });

// gsap.from('.dish-card', {
//     scrollTrigger: {
//         trigger: '.dishes',
//         start: 'top 80%'
//     },
//     opacity: 0,
//     y: 70,
//     stagger: 0.12,
//     duration: 1,
//     ease: "power3.out"
// });


// // item page ki hai js

// document.addEventListener("DOMContentLoaded", () => {
    
//     // 1. MOBILE MENU TOGGLE
//     const mobileMenu = document.getElementById('mobile-menu');
//     const navLinks = document.querySelector('.nav-links');

//     if (mobileMenu && navLinks) {
//         mobileMenu.addEventListener('click', () => {
//             navLinks.classList.toggle('active');
//             const icon = mobileMenu.querySelector('i');
//             if (icon) {
//                 icon.classList.toggle('fa-bars');
//                 icon.classList.toggle('fa-xmark');
//             }
//         });
//     }

//     // 2. SIDEBAR CART PANEL TOGGLE SYSTEM
//     const cartWidget = document.querySelector('.cart-widget');
//     const cartSidebar = document.getElementById('cart-sidebar');
//     const closeCart = document.getElementById('close-cart');
//     const cartOverlay = document.getElementById('cart-overlay');

//     function openCartPanel() {
//         cartSidebar.classList.add('open');
//         cartOverlay.classList.add('show');
//     }

//     function closeCartPanel() {
//         cartSidebar.classList.remove('open');
//         cartOverlay.classList.remove('show');
//     }

//     if(cartWidget) cartWidget.addEventListener('click', openCartPanel);
//     if(closeCart) closeCart.addEventListener('click', closeCartPanel);
//     if(cartOverlay) cartOverlay.addEventListener('click', closeCartPanel);


//     // 3. CART SYSTEM ENGINE & MATHEMATICAL BILL COMPUTATION
//     let cartArray = [];
//     const uiCartBadge = document.getElementById('cart-badge');
//     const cartItemsContainer = document.getElementById('cart-items-container');
//     const billSubtotal = document.getElementById('bill-subtotal');
//     const totalAmount = document.getElementById('total-amount');

//     const allAddToCartButtons = document.querySelectorAll('.btn-add-cart');

//     allAddToCartButtons.forEach(button => {
//         button.addEventListener('click', (e) => {
//             // Find parent dish card structure dynamically
//             const dishCard = e.target.closest('.dish-card');
//             const itemName = dishCard.querySelector('h3').innerText;
//             const itemPriceText = dishCard.querySelector('.price').innerText;
//             const itemImgSrc = dishCard.querySelector('.dish-img-container img').src;
            
//             // Clean dynamic text strings to extract pure integer number integers
//             const itemPrice = parseInt(itemPriceText.replace(/[^\d]/g, ''));

//             // Check if item already exists in current session array configurations
//             const existingItem = cartArray.find(item => item.name === itemName);

//             if (existingItem) {
//                 existingItem.qty++;
//             } else {
//                 cartArray.push({
//                     name: itemName,
//                     price: itemPrice,
//                     img: itemImgSrc,
//                     qty: 1
//                 });
//             }

//             updateCartUI();

//             // Micro GSAP scale feedback on top widget icon
//             gsap.fromTo('#cart-badge', { scale: 0.5 }, { scale: 1.3, duration: 0.15, yoyo: true, repeat: 1 });
            
//             // Temporary button animation text
//             const persistentStateText = button.innerHTML;
//             button.innerHTML = 'Added! <i class="fa-solid fa-check"></i>';
//             setTimeout(() => { button.innerHTML = persistentStateText; }, 1000);
//         });
//     });

//     // Function to calculate totals and refresh the tracking UI panels
//     function updateCartUI() {
//         // Calculate dynamic live badges count
//         let totalItemsCount = cartArray.reduce((sum, item) => sum + item.qty, 0);
//         uiCartBadge.innerText = totalItemsCount;

//         if (cartArray.length === 0) {
//             cartItemsContainer.innerHTML = `<div class="empty-cart-msg">Your basket is empty. Add some delicious food!</div>`;
//             billSubtotal.innerText = "Rs. 0";
//             totalAmount.innerText = "Rs. 0";
//             return;
//         }

//         // Clear and rebuild list elements
//         cartItemsContainer.innerHTML = "";
//         let calculatedSubtotal = 0;

//         cartArray.forEach((item, index) => {
//             calculatedSubtotal += (item.price * item.qty);

//             const itemHTML = `
//                 <div class="cart-item-card">
//                     <img src="${item.img}" alt="${item.name}">
//                     <div class="item-details">
//                         <h4>${item.name}</h4>
//                         <p class="item-price">Rs. ${(item.price * item.qty).toLocaleString()}</p>
//                         <div class="item-qty-controls">
//                             <button class="btn-qty decrease-btn" data-index="${index}">-</button>
//                             <span>${item.qty}</span>
//                             <button class="btn-qty increase-btn" data-index="${index}">+</button>
//                         </div>
//                     </div>
//                 </div>
//             `;
//             cartItemsContainer.insertAdjacentHTML('beforeend', itemHTML);
//         });

//         // Compute final slip receipts metrics
//         let deliveryFee = 50; 
//         billSubtotal.innerText = `Rs. ${calculatedSubtotal.toLocaleString()}`;
//         totalAmount.innerText = `Rs. ${(calculatedSubtotal + deliveryFee).toLocaleString()}`;

//         // Bind control adjustments hooks dynamically
//         addItemControlListeners();
//     }

//     function addItemControlListeners() {
//         document.querySelectorAll('.increase-btn').forEach(btn => {
//             btn.addEventListener('click', (e) => {
//                 const idx = e.target.getAttribute('data-index');
//                 cartArray[idx].qty++;
//                 updateCartUI();
//             });
//         });

//         document.querySelectorAll('.decrease-btn').forEach(btn => {
//             btn.addEventListener('click', (e) => {
//                 const idx = e.target.getAttribute('data-index');
//                 if (cartArray[idx].qty > 1) {
//                     cartArray[idx].qty--;
//                 } else {
//                     cartArray.splice(idx, 1); // Remove item from arrays entirely if count drops below 1
//                 }
//                 updateCartUI();
//             });
//         });
//     }

//     // 4. GSAP ENTRANCE ANIMATIONS
//     gsap.registerPlugin(ScrollTrigger);
//     gsap.from('.hero-content h1', { opacity: 0, y: 60, duration: 1.2, ease: "power4.out" });
//     gsap.from('.hero-content p', { opacity: 0, y: 40, duration: 1.2, delay: 0.2, ease: "power4.out" });
//     gsap.from('.search-container', { opacity: 0, scale: 0.9, duration: 0.9, delay: 0.4, ease: "back.out(1.7)" });
//     gsap.from('.hero-image', { opacity: 0, x: 80, rotate: 3, duration: 1.4, delay: 0.3, ease: "power3.out" });

//     gsap.from('.category-card', {
//         scrollTrigger: { trigger: '.categories', start: 'top 85%' },
//         opacity: 0, y: 40, stagger: 0.08, duration: 0.7, ease: "power2.out"
//     });
//     gsap.from('.restaurant-card', {
//         scrollTrigger: { trigger: '.restaurants', start: 'top 80%' },
//         opacity: 0, y: 60, stagger: 0.15, duration: 0.9, ease: "power3.out"
//     });
//     gsap.from('.dish-card', {
//         scrollTrigger: { trigger: '.dishes', start: 'top 80%' },
//         opacity: 0, y: 70, stagger: 0.12, duration: 1, ease: "power3.out"
//     });
// });




// new code past


document.addEventListener("DOMContentLoaded", () => {

    // MOBILE MENU
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener("click", () => {
            navLinks.classList.toggle("active");

            const icon = mobileMenu.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-xmark");
            }
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");

                const icon = mobileMenu.querySelector("i");
                if (icon) {
                    icon.classList.add("fa-bars");
                    icon.classList.remove("fa-xmark");
                }
            });
        });
    }

    // SEARCH BUTTON
    const searchBtn = document.querySelector(".btn-search");
    const searchInput = document.querySelector(".search-container input");

    if (searchBtn && searchInput) {
        searchBtn.addEventListener("click", () => {
            const value = searchInput.value.trim();

            if (value) {
                alert(`Searching for: ${value}`);
            } else {
                alert("Please enter location");
            }
        });
    }

    // CART SIDEBAR
    const cartWidget = document.querySelector(".cart-widget");
    const cartSidebar = document.getElementById("cart-sidebar");
    const closeCart = document.getElementById("close-cart");
    const cartOverlay = document.getElementById("cart-overlay");

    function openCart() {
        cartSidebar.classList.add("open");
        cartOverlay.classList.add("show");
    }

    function closeCartPanel() {
        cartSidebar.classList.remove("open");
        cartOverlay.classList.remove("show");
    }

    if (cartWidget) cartWidget.addEventListener("click", openCart);
    if (closeCart) closeCart.addEventListener("click", closeCartPanel);
    if (cartOverlay) cartOverlay.addEventListener("click", closeCartPanel);

    // ADD TO CART SYSTEM
    let cartItems = [];

    const cartBadge = document.getElementById("cart-badge");
    const cartContainer = document.getElementById("cart-items-container");
    const subtotal = document.getElementById("bill-subtotal");
    const total = document.getElementById("total-amount");

    const addButtons = document.querySelectorAll(".btn-add-cart");

    addButtons.forEach(button => {

        button.addEventListener("click", (e) => {

            const card = e.target.closest(".dish-card");

            const name = card.querySelector("h3").innerText;
            const priceText = card.querySelector(".price").innerText;
            const image = card.querySelector("img").src;

            const price = parseInt(priceText.replace(/[^\d]/g, ""));

            const existing = cartItems.find(item => item.name === name);

            if (existing) {
                existing.qty++;
            } else {
                cartItems.push({
                    name,
                    price,
                    image,
                    qty: 1
                });
            }

            updateCart();

            button.innerHTML = 'Added <i class="fa-solid fa-check"></i>';

            setTimeout(() => {
                button.innerHTML = 'Add to Cart <i class="fa-solid fa-cart-plus"></i>';
            }, 1000);

        });

    });

    function updateCart() {

        let itemCount = 0;
        let subtotalAmount = 0;

        cartContainer.innerHTML = "";

        cartItems.forEach((item, index) => {

            itemCount += item.qty;
            subtotalAmount += item.price * item.qty;

            cartContainer.innerHTML += `
                <div class="cart-item-card">
                    <img src="${item.image}">
                    <div class="item-details">
                        <h4>${item.name}</h4>
                        <p class="item-price">Rs. ${item.price * item.qty}</p>

                        <div class="item-qty-controls">
                            <button class="btn-qty minus" data-index="${index}">-</button>
                            <span>${item.qty}</span>
                            <button class="btn-qty plus" data-index="${index}">+</button>
                        </div>
                    </div>
                </div>
            `;
        });

        if (cartItems.length === 0) {
            cartContainer.innerHTML =
                `<div class="empty-cart-msg">Your basket is empty.</div>`;
        }

        cartBadge.innerText = itemCount;

        subtotal.innerText = `Rs. ${subtotalAmount}`;

        total.innerText = `Rs. ${subtotalAmount + 50}`;

        attachQtyButtons();
    }

    function attachQtyButtons() {

        document.querySelectorAll(".plus").forEach(btn => {
            btn.addEventListener("click", () => {

                const index = btn.dataset.index;

                cartItems[index].qty++;

                updateCart();
            });
        });

        document.querySelectorAll(".minus").forEach(btn => {
            btn.addEventListener("click", () => {

                const index = btn.dataset.index;

                if (cartItems[index].qty > 1) {
                    cartItems[index].qty--;
                } else {
                    cartItems.splice(index, 1);
                }

                updateCart();
            });
        });
    }

    // GSAP ANIMATION
    if (typeof gsap !== "undefined") {

        gsap.from(".hero-content h1", {
            opacity: 0,
            y: 50,
            duration: 1
        });

        gsap.from(".hero-content p", {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.3
        });

        gsap.from(".hero-image", {
            opacity: 0,
            x: 100,
            duration: 1.2
        });

    }

});

// map

const searchBtn = document.querySelector(".btn-search");
const searchInput = document.querySelector(".search-container input");

searchBtn.addEventListener("click", () => {

    const location = searchInput.value.trim();

    if(location !== ""){

        const googleMapUrl =
        `https://www.google.com/maps/search/${encodeURIComponent(location)}`;

        window.open(googleMapUrl, "_blank");

    }else{
        alert("Please enter location");
    }

});


// toggal button

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon = themeToggle.querySelector("i");

    if(document.body.classList.contains("light-mode")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

});