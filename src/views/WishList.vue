<template>
  <div class="max-w-7xl mx-auto py-10 px-4">
    <!-- PAGE TITLE -->
    <div class="flex justify-between items-center my-6">
      <h1 class="text-2xl font-bold mb-6">Wishlist ({{ wishlistCount }})</h1>
      <!-- MOVE ALL BUTTON -->
      <div>
        <button
          @click="moveAllToCart"
          class="border bg-white hover:bg-red-600 text-black px-6 py-2 rounded-md font-medium transition"
        >
          Move All To Bag
        </button>
      </div>
    </div>

    <!-- WISHLIST GRID -->
    <div class="grid grid-cols-4 gap-6">
      <div
        v-for="product in wishlist"
        :key="product.id"
        class="rounded-lg flex flex-col"
      >
        <div
          class="relative bg-[#F5F5F5] p-5 rounded-lg hover:shadow-lg transition"
        >
          <!-- Remove from wishlist button -->
          <button
            @click="removeFromWishlist(product.id)"
            class="absolute top-3 right-3 bg-white shadow p-2 rounded-full hover:bg-red-200 transition"
          >
            <img src="../assets/icons/delete.png" alt="" />
          </button>

          <!-- IMAGE -->
          <img :src="product.image" class="h-40 mx-auto" />

          <!-- ADD TO CART -->
          <button
            @click.stop="addToCart(product)"
            class="mt-4 bg-black text-white py-2 rounded-lg w-full"
          >
            Add To Cart
          </button>
        </div>

        <!-- TITLE + PRICE -->
        <h4 class="font-semibold text-sm mt-3 line-clamp-1">
          {{ product.title }}
        </h4>
        <p class="text-red-600 font-bold">${{ product.price }}</p>
      </div>
    </div>

    <!-- JUST FOR YOU SECTION -->
    <div class="mt-12">
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center gap-2">
          <span class="w-3 h-6 bg-red-600 rounded"></span>
          <p class="text-red-600 font-medium">Just For You</p>
        </div>

        <button
          class="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-md font-medium transition"
        >
          See All
        </button>
      </div>

      <!-- JUST FOR YOU GRID -->
      <div class="grid grid-cols-4 gap-6">
        <div
          v-for="product in randomFour"
          :key="product.id"
          class="rounded-lg flex flex-col"
        >
          <div
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
            <img :src="product.image" class="h-40 mx-auto" />

            <!-- BUTTON -->
            <button
              @click.stop="addToCart(product)"
              class="mt-4 bg-black text-white py-2 rounded-lg w-full"
            >
              Add To Cart
            </button>
          </div>

          <h4 class="font-semibold text-sm mt-3 line-clamp-1">
            {{ product.title }}
          </h4>
          <p class="text-red-600 font-bold">${{ product.price }}</p>
          <RatingStars :rating="product.rating" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import RatingStars from "../components/RatingStars.vue";

export default {
  name: "WishlistPage",
  components: { RatingStars },

  computed: {
    ...mapGetters(["wishlistCount", "allProducts"]),

    wishlist() {
      return this.$store.state.wishlist;
    },

    randomFour() {
      return this.allProducts.slice(0, 4);
    },
  },

  methods: {
    addToCart(product) {
      this.$store.commit("addToCart", product);
    },

    addToWishlist(product) {
      this.$store.commit("addToWishlist", product);
    },

    removeFromWishlist(id) {
      this.$store.commit("removeFromWishlist", id);
    },

    moveAllToCart() {
      this.wishlist.forEach((product) => {
        this.$store.commit("addToCart", product);
      });
      this.$store.commit("clearWishlist");
    },
  },
};
</script>
