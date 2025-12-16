# Vue 3 + Vite

# Exclusive – E-Commerce Frontend (Vue 3)

Exclusive is a modern e-commerce frontend application built with Vue 3, Vue Router, Vuex, and Tailwind CSS.
The project demonstrates a complete authentication flow, protected routes, reusable product components, and a clean UI structure suitable for scaling into a full production application.

⚠️ Note: This project is currently a frontend implementation using mock authentication and a public products API. It is subject to further improvement, including real API integration, enhanced security, and backend connectivity in future versions.

# 🚀 Features
# 🔐 Authentication & Authorization

Login and Signup pages

Login state stored in Vuex and persisted via localStorage

Navigation guards preventing unauthorized access

Public and protected routes clearly separated

# 🏠Home vs Logged Home

Public Home (/)

Users can browse products

Cart, wishlist, and product interactions redirect to login

Logged Home (/loggedhome)

Full access to cart, wishlist, and product actions


# 🛍 Product Management

Reusable product components:

Flash Sale

Best Selling Products

Product Grid

Products fetched from https://fakestoreapi.com

Product preview (eye icon)

Add to cart / wishlist functionality


# 🛒 Cart & Wishlist

Add/remove items

Quantity update

Cart subtotal calculation

Shared cart state across pages


# 🔒 Route Protection

Protected routes:

/loggedhome

/cartpage

/wishlist

Public routes:

/

/about

/contact

/auth/login

/auth/signup



# 🧭 Global Navigation Guard

Users cannot access protected pages without authentication

Direct URL access is blocked for unauthorized users


# 🧱 Tech Stack

| Technology         | Description                   |
| ------------------ | ----------------------------- |
| **Vue 3**          | Frontend framework            |
| **Vue Router**     | Routing and navigation guards |
| **Vuex**           | Global state management       |
| **Tailwind CSS**   | Utility-first styling         |
| **Fake Store API** | Mock product data             |




# 📁 Project Structure

src/
├── assets/
├── components/
│   ├── Header.vue
│   ├── FlashSale.vue
│   ├── BestSelling.vue
│   ├── ProductGrid.vue
│   ├── RatingStars.vue
│   └── ...
├── layouts/
│   ├── GeneralLayout.vue
│   └── AuthLayout.vue
├── views/
│   ├── Home.vue
│   ├── LoggedHome.vue
│   ├── Login.vue
│   ├── Signup.vue
│   ├── CartPage.vue
│   ├── WishList.vue
│   └── ...
├── store/
│   └── index.js
├── router/
│   └── index.js
└── main.js


# 🔑 Authentication Flow

User visits /

Attempts to:

Add to cart

Add to wishlist

View product

User is redirected to /auth/login

On successful login:

User state is stored in Vuex

Redirected to /loggedhome

All protected features become available



# 🛡 Route Guard Implementation

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters.isLoggedIn;

  if (to.matched.some(route => route.meta.requiresAuth) && !isLoggedIn) {
    next("/auth/login");
  } else {
    next();
  }
});

Each protected route explicitly declares:
meta: { requiresAuth: true }


# ⚠️ Current Limitations

Authentication is mock-based

No backend or real user validation

Product data is fetched from a public API

No checkout or payment integration


# 🔮 Future Improvements (Planned)

✅ Real authentication API (JWT-based)

✅ Backend integration (Node.js / Laravel / Firebase)

✅ Persistent cart and wishlist per user

✅ Role-based access control

✅ Checkout & payment flow

✅ Product reviews & ratings from backend

✅ Admin dashboard

✅ Performance optimizations


# 🧪 Running the Project Locally

# Install dependencies
npm install

# Run development server
npm run dev


📌 Disclaimer

This project is a learning-focused and scalable frontend implementation.
It is intentionally structured to support future backend integration and real-world expansion.
Built as a part of Developers foundry fellowship frontend track assesment.

# 👤 Author
Yahaya Joseph
Frontend Developer – Vue.js


