import { createStore } from "vuex";

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem("user")) || null,

    // CART
    cart: [],
    wishlist: [],

    // PRODUCTS
    products: [],

    activeProduct: null,
    showDropdown: true,
  },

  mutations: {
    // AUTH
    setUser(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    addToWishlist(state, product) {
      const exists = state.wishlist.find((p) => p.id === product.id);
      if (!exists) state.wishlist.push(product);
    },
    removeFromWishlist(state, id) {
      state.wishlist = state.wishlist.filter((item) => item.id !== id);
    },
    clearWishlist(state) {
      state.wishlist = [];
    },

    logout(state) {
      state.user = null;
      localStorage.removeItem("user");
    },

    // CART
    addToCart(state, product) {
      if (!product.quantity) product.quantity = 1;
      state.cart.push(product);
    },
    updateCartItemQuantity(state, item) {
      const existing = state.cart.find((p) => p.id === item.id);
      if (existing) existing.quantity = item.quantity;
    },

    // PRODUCTS
    setProducts(state, products) {
      state.products = products;
    },

    setActiveProduct(state, productId) {
      state.activeProduct = productId;
    },
    SET_DROPDOWN(state, value) {
      state.showDropdown = value;
    },
  },

  actions: {
    // FETCH PRODUCTS
    async fetchProducts({ commit }) {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        commit("setProducts", data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },

    login({ commit }, credentials) {
      // fake login (for now)
      const user = {
        id: 1,
        email: credentials.email,
      };

      commit("setUser", user);
    },
  },

  getters: {
    isLoggedIn: (state) => !!state.user,
    cartCount: (state) => state.cart.length,
    allProducts: (state) => state.products,
    activeProduct: (state) => state.activeProduct,
    wishlistCount: (state) => state.wishlist.length,
    cart: (state) => state.cart,
  },
});
