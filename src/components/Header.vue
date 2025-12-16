<template>
  <div>
    <div class="bg-black text-white py-5">
      <div class="relative max-w-7xl mx-auto flex items-center px-6">
        <h4 class="absolute left-1/2 -translate-x-1/2 text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span class="underline cursor-pointer">Shop Now</span>
        </h4>

        <select
          id="language-selector"
          class="ml-auto bg-black text-white border border-white px-3 py-1 rounded"
        >
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
        </select>
      </div>
    </div>

    <!-- TOP NAVBAR -->
    <header class="border-b">
      <div
        class="max-w-7xl mx-auto flex items-center justify-between py-5 px-6"
      >
        <h1 class="text-2xl font-bold">Exclusive</h1>

        <nav class="hidden md:flex space-x-8 text-gray-700 font-medium">
          <RouterLink to="/" :class="linkClass('/')"> Home </RouterLink>
          <RouterLink to="/contact" :class="linkClass('/contact')">
            Contact
          </RouterLink>
          <RouterLink to="/about" :class="linkClass('/about')">
            About
          </RouterLink>
          <RouterLink to="/auth/signup" :class="linkClass('/auth/signup')">
            Sign Up
          </RouterLink>
          <RouterLink to="/auth/login" :class="linkClass('/auth/login')">
            Login
          </RouterLink>
        </nav>

        <!-- Search + Icons -->
        <div class="flex items-center space-x-4">
          <div class="relative hidden lg:block">
            <input
              type="text"
              placeholder="What are you looking for?"
              class="border rounded-lg pl-4 pr-10 py-2 w-72 text-sm"
            />
            <span
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              <img src="../assets/search.png" alt="search-icon" />
            </span>
          </div>

          <!-- HEART ICON -->
          <button
            v-if="!$route.meta?.hideHeaderIcons"
            class="relative"
            @click="handleWishlistClick"
          >
            <img src="../assets/icons/heart.png" />

            <span
              class="absolute -top-2 -right-2 bg-red-600 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center"
            >
              {{ wishlistCount }}
            </span>
          </button>

          <!-- CART ICON -->
          <button
            v-if="!$route.meta?.hideHeaderIcons"
            class="relative"
            @click="handleCartClick"
          >
            <img src="../assets/icons/cart.png" />

            <span
              v-if="cartCount > 0"
              class="absolute -top-2 -right-2 bg-red-600 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center"
            >
              {{ cartCount }}
            </span>
          </button>

          <!-- USER AVATAR & DROPDOWN -->
          <div class="relative">
            <div
              v-if="!$route.meta?.hideUserAvatar"
              @click="toggleDropdown"
              class="h-10 w-10 bg-red-500 rounded-full flex items-center justify-center cursor-pointer"
            >
              <img src="@/assets/icons/user.png" class="h-6" />
            </div>

            <!-- DROPDOWN -->
            <div
              v-if="isDropdownVisible"
              class="absolute right-0 mt-2 w-48 bg-gray-500 border border-gray-200 rounded-lg shadow-lg z-50"
            >
              <div
                v-for="(item, index) in dropdowns"
                :key="index"
                class="flex items-center space-x-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
                @click="handleDropdown(item)"
              >
                <img :src="item.src" alt="icon" class="w-5 h-5" />
                <span class="text-white">{{ item.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import order from "../assets/icons/order.png";
import cancelIcon from "../assets/icons/cancel-icon.png";
import reviews from "../assets/icons/reviews-icon.png";
import logout from "../assets/icons/logout-icon.png";
import { mapGetters } from "vuex";

export default {
  name: "Header",

  data() {
    return {
      isDropdownVisible: false,
      dropdowns: [
        { label: "My Orders", src: order },
        { label: "My Cancellations", src: cancelIcon },
        { label: "My Reviews", src: reviews },
        { label: "Logout", src: logout },
      ],
    };
  },
  computed: {
    ...mapGetters(["cartCount", "wishlistCount", "isLoggedIn"]),
    showDropdown() {
      return this.$store.state.showDropdown;
    },
    isPublicHome() {
      return this.$route.path === "/";
    },
  },

  methods: {
    linkClass(path) {
      return this.$route.path === path ? "underline" : "text-gray-700";
    },

    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },

    handleDropdown(item) {
      if (item.label === "Logout") {
        this.$store.dispatch("logout");
        this.$router.push("/");
      }
    },
    handleCartClick() {
      if (!this.isLoggedIn || this.isPublicHome) {
        this.$router.push("/auth/login");
        return;
      }
      this.$router.push("/cartpage");
    },

    handleWishlistClick() {
      if (!this.isLoggedIn || this.isPublicHome) {
        this.$router.push("/auth/login");
        return;
      }
      this.$router.push("/wishlist");
    },
  },
};
</script>
