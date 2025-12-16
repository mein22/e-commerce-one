<template>
  <section class="max-w-7xl mx-auto py-12 px-4">
    <!-- Header -->
    <div class="flex items-center justify-between mb-8">
      <div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-6 bg-red-600 rounded"></span>
          <p class="text-red-600 font-medium">Our Products</p>
        </div>
        <h2 class="text-2xl font-bold mt-2 mb-6">Explore Our Products</h2>
      </div>

      <div class="flex justify-end space-x-2">
        <span
          class="h-16 w-16 bg-[#F5F5F5] rounded-4xl flex items-center justify-center"
        >
          <img src="@/assets/icons/left.png" class="h-8" />
        </span>
        <span
          class="h-16 w-16 bg-[#F5F5F5] rounded-4xl flex items-center justify-center"
        >
          <img src="@/assets/icons/right.png" class="h-8" />
        </span>
      </div>
    </div>

    <!-- Product Row -->
    <div class="grid grid-cols-4 gap-6">
      <div
        v-for="product in allProducts.slice(0, 8)"
        :key="product.id"
        class="rounded-lg flex flex-col"
      >
        <!-- Gray div with Image + Icons -->
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
              <img src="@/assets/icons/heart.png" alt="heart" />
            </span>
            <span
              @click="viewProduct(product.id)"
              class="p-2 bg-white shadow rounded-full hover:bg-red-500 cursor-pointer"
            >
              <img src="@/assets/icons/eye.png" alt="eye" />
            </span>
          </div>

          <img :src="product.image" class="h-50 mx-auto" />

          <!-- btn  -->
          <button
            v-if="activeProduct === product.id"
            @click.stop="addToCart(product)"
            class="mt-auto bg-black text-white py-2 rounded-lg w-full"
          >
            Add to Cart
          </button>
        </div>
        <!-- Title and price -->
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
  name: "ProductGrid",
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
