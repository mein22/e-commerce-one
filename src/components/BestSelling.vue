<template>
  <section class="max-w-7xl mx-auto py-12 px-4">
    <!-- Header -->
    <div class="flex items-center justify-between mb-8">
      <div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-6 bg-red-600 rounded"></span>
          <p class="text-red-600 font-medium">This Month</p>
        </div>
        <h2 class="text-2xl font-bold mt-2 mb-6">Best Selling Products</h2>
      </div>

      <button
        class="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium transition"
      >
        View All
      </button>
    </div>

    <!-- PRODUCT GRID -->
    <div class="grid grid-cols-4 gap-6">
      <div
        v-for="product in allProducts.slice(4, 8)"
        :key="product.id"
        class="rounded-lg flex flex-col"
      >
        <!-- TOP GRAY DIV -->
        <div
          @click="showButton(product.id)"
          class="relative bg-[#F5F5F5] p-5 rounded-lg hover:shadow-lg transition"
        >
          <!-- Icons -->
          <div class="absolute top-3 right-3 space-y-2 grid">
            <span
              @click.stop="addToWishlist(product)"
              class="p-2 bg-white shadow rounded-full hover:bg-red-500 cursor-pointer"
            >
              <img src="@/assets/icons/heart.png" alt="" />
            </span>

            <span
              @click="viewProduct(product.id)"
              class="p-2 bg-white shadow rounded-full hover:bg-red-500 cursor-pointer"
            >
              <img src="@/assets/icons/eye.png" alt="" />
            </span>
          </div>

          <!-- IMAGE -->
          <img :src="product.image" class="h-50 mx-auto" />

          <!-- button -->
          <button
            v-if="activeProduct === product.id"
            @click.stop="addToCart(product)"
            class="mt-auto bg-black text-white py-2 rounded-lg w-full"
          >
            Add to Cart
          </button>
        </div>

        <!-- TITLE + PRICE -->
        <h4 class="font-semibold text-sm mt-3 line-clamp-1">
          {{ product.title }}
        </h4>
        <p class="text-red-600 font-bold">${{ product.price }}</p>
        <RatingStars :rating="product.rating" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import RatingStars from "./RatingStars.vue";

export default {
  name: "BestSellingProducts",
  components: { RatingStars },
  computed: {
    ...mapGetters(["allProducts", "activeProduct", "isLoggedIn"]),
  },

  created() {
    this.fetchProducts();
  },

  methods: {
    ...mapActions(["fetchProducts"]),

    requireAuth() {
      if (!this.isLoggedIn || this.$route.path === "/") {
        this.$router.push("/auth/login");
        return false;
      }
      return true;
    },
    showButton(productId) {
      this.$store.commit("setActiveProduct", productId);
    },
    addToCart(product) {
      if (!this.requireAuth()) return;
      this.$store.commit("addToCart", product);
    },
    addToWishlist(product) {
      if (!this.requireAuth()) return;
      this.$store.commit("addToWishlist", product);
    },

    viewProduct(id) {
      if (!this.requireAuth()) return;

      this.$store.commit("setActiveProduct", id);
      this.$router.push(`/product/${id}`);
    },
  },
};
</script>
