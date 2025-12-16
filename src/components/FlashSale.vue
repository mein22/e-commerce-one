<template>
  <section class="mt-20">
    <!-- Title -->
    <div class="flex items-center gap-2">
      <span class="w-3 h-6 bg-red-600 rounded"></span>
      <p class="text-red-600 font-medium">Today's</p>
    </div>

    <!-- Timer Row -->
    <div class="flex items-center justify-between mb-6 relative">
      <div class="flex items-center space-x-6">
        <h2 class="text-2xl font-bold mt-2 mb-4">Flash Sales</h2>

        <div
          v-for="(item, index) in timer"
          :key="index"
          class="text-center mb-5"
        >
          <p class="text-xs text-gray-500">{{ item.label }}</p>
          <p class="text-2xl font-bold">{{ item.value }}</p>
        </div>
      </div>

      <!-- Arrows -->
      <div class="flex space-x-2">
        <span
          @click="prevSlide"
          class="h-15 w-15 bg-[#F5F5F5] rounded-4xl flex items-center justify-center cursor-pointer hover:bg-red-500"
        >
          <img src="@/assets/icons/left.png" class="h-8" />
        </span>

        <span
          @click="nextSlide"
          class="h-15 w-15 bg-[#F5F5F5] rounded-4xl flex items-center justify-center cursor-pointer hover:bg-red-500"
        >
          <img src="@/assets/icons/right.png" class="h-8" />
        </span>
      </div>
    </div>

    <!-- Product Slider -->
    <div class="relative overflow-hidden">
      <!-- Slider Track -->
      <div
        class="flex transition-transform duration-500"
        :style="{ transform: `translateX(-${currentIndex * 25}%)` }"
      >
        <div
          v-for="product in allProducts.slice(0, 10)"
          :key="product.id"
          class="min-w-[25%] max-w-[25%] p-5 box-border"
        >
          <div
            @click="showButton(product.id)"
            class="relative bg-[#F5F5F5] p-1 rounded-lg hover:shadow-lg transition h-[85%] flex flex-col"
          >
            <span
              class="h-8 w-15 bg-red-600 rounded-sm flex items-center justify-center"
            >
              40%
            </span>

            <div class="absolute top-3 right-3 space-y-2 grid">
              <span
                @click.stop="addToWishlist(product)"
                class="p-2 bg-white shadow rounded-full hover:bg-red-500 cursor-pointer"
              >
                <img src="@/assets/icons/heart.png" />
              </span>
              <span
                @click="viewProduct(product.id)"
                class="p-2 bg-white shadow rounded-full hover:bg-red-500 cursor-pointer"
              >
                <img src="@/assets/icons/eye.png" />
              </span>
            </div>

            <img :src="product.image" class="h-50" />

            <button
              v-if="activeProduct === product.id"
              @click.stop="addToCart(product)"
              class="mt-auto bg-black text-white py-2 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
          <h4 class="font-semibold text-sm mt-0.5 line-clamp-1">
            {{ product.title }}
          </h4>
          <p class="text-red-600 font-bold">${{ product.price }}</p>
          <RatingStars :rating="product.rating" />
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-8">
      <button class="px-6 py-3 bg-red-600 text-white rounded-lg">
        View All Products
      </button>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import RatingStars from "../components/RatingStars.vue";

export default {
  name: "FlashSale",
  components: { RatingStars },

  data() {
    return {
      currentIndex: 0,
      timer: [
        { label: "Days", value: "03" },
        { label: "Hours", value: "23" },
        { label: "Minutes", value: "19" },
        { label: "Seconds", value: "56" },
      ],
    };
  },

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

    nextSlide() {
      if (this.currentIndex < 6) {
        this.currentIndex++;
      }
    },

    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
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
