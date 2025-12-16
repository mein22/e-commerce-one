<template>
  <div class="max-w-7xl mx-auto py-10 px-6">
    <!-- Breadcrumb -->
    <p class="text-gray-500 mb-8">Home / Cart</p>

    <!-- CART ITEMS TABLE -->
    <div class="bg-white rounded-lg shadow p-6">
      <!-- Header Row -->
      <div class="grid grid-cols-4 gap-60 font-semibold pb-3">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>

      <!-- Cart Items -->
      <div
        v-for="item in cart"
        :key="item.id"
        class="grid grid-cols-4 gap-6 items-center py-4"
      >
        <!-- Product -->
        <div class="flex items-center gap-4">
          <img :src="item.image" class="h-16 w-16 object-contain" />
          <p class="font-medium">{{ item.title }}</p>
        </div>

        <!-- Price -->
        <p class="font-semibold">${{ item.price }}</p>
        <RatingStars :rating="item.rating" />

        <!-- Quantity -->
        <div>
          <select
            v-model="item.quantity"
            @change="updateQuantity(item)"
            class="border rounded px-2 py-1"
          >
            <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
          </select>
        </div>

        <!-- Subtotal -->
        <p class="font-semibold">${{ item.price * item.quantity }}</p>
      </div>
    </div>

    <!-- BUTTONS BELOW TABLE -->
    <div class="flex justify-between mt-6">
      <router-link to="/" class="border px-5 py-3 rounded hover:bg-gray-100">
        Return To Shop
      </router-link>

      <button
        class="border px-5 py-3 rounded hover:bg-gray-100"
        @click="updateCart"
      >
        Update Cart
      </button>
    </div>

    <!-- COUPON + CART TOTAL -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
      <!-- Coupon -->
      <div>
        <p class="font-semibold mb-3">Coupon Code</p>
        <div class="flex gap-3">
          <input
            type="text"
            class="border px-2 py-1 rounded w-[50%]"
            placeholder="Coupon Code"
          />
          <button class="bg-red-600 text-white px-7 py-2 rounded">
            Apply Coupon
          </button>
        </div>
      </div>

      <!-- Cart Total -->
      <div class="border rounded-lg p-5 pb-2 h-80 w-125 ml-auto">
        <p class="text-xl font-semibold mb-4">Cart Total</p>

        <div class="flex justify-between border-b pb-2 mb-3">
          <p>Subtotal:</p>
          <p class="font-semibold">${{ cartSubtotal }}</p>
        </div>

        <div class="flex justify-between border-b pb-2 mb-3">
          <p>Shipping:</p>
          <p class="font-semibold">Free</p>
        </div>

        <div class="flex justify-between pb-2 mb-1">
          <p>Total:</p>
          <p class="font-semibold">${{ cartSubtotal }}</p>
        </div>

        <div class="flex justify-center">
          <button class="bg-red-600 text-white w-[300px] py-2 mt-3 rounded">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import RatingStars from "../components/RatingStars.vue";

export default {
  components: { RatingStars },
  computed: {
    ...mapGetters(["cart"]),

    cartSubtotal() {
      return this.cart
        .reduce((sum, item) => sum + item.price * item.quantity, 0)
        .toFixed(2);
    },
  },

  methods: {
    ...mapMutations(["updateCartItemQuantity"]),

    updateQuantity(item) {
      this.updateCartItemQuantity(item);
    },

    updateCart() {
      // Optional: you can add toast here
      console.log("Cart updated");
    },
  },
};
</script>
