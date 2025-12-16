<template>
  <div class="w-full bg-white text-gray-900">
    <!--  Main content -->
    <section
      class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6 py-10"
    >
      <!-- Category side bar -->
      <CategorySidebar />

      <!-- Hero Image -->
      <div class="md:col-span-3">
        <div class="relative bg-black text-white rounded-lg overflow-hidden">
          <img
            src="../assets/Hero.png"
            class="w-full h-72 object-cover opacity-80"
          />
          <div
            class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2"
          >
            <span class="w-3 h-3 bg-gray-300 rounded-full"></span>
            <span class="w-3 h-3 bg-gray-300 rounded-full"></span>
            <span class="w-3 h-3 bg-red-500 rounded-full"></span>
            <span class="w-3 h-3 bg-gray-300 rounded-full"></span>
          </div>
        </div>
      </div>
    </section>

    <!--  Flash sales  -->
    <section class="max-w-7xl mx-auto mt-10 px-4">
      <FlashSale />
    </section>

    <!--  Categories  -->
    <section class="max-w-7xl mx-auto mt-12 px-4">
      <CategoryList />
    </section>

    <!-- Best Selling -->
    <section class="max-w-7xl mx-auto mt-12 px-4">
      <BestSelling />
    </section>

    <!-- Speaker Hero  -->
    <section class="max-w-7xl mx-auto mt-12 px-4">
      <SpeakerHero />
    </section>

    <!--  Our Products  -->
    <section class="max-w-7xl mx-auto mt-12 px-4">
      <ProductGrid />
    </section>

    <!--  New Arrival -->
    <section class="max-w-7xl mx-auto mt-16 px-4">
      <NewArrival />
    </section>

    <section class="mt-35 grid grid-cols-3 gap-2 text-center">
      <div class="text-center">
        <div
          class="h-16 w-16 bg-black border-7 border-gray-400 rounded-4xl flex items-center justify-center mx-auto mb-3"
        >
          <img src="@/assets/icons/icon-delivery.png" class="h-8" />
        </div>
        <h3 class="font-bold">FREE AND FAST DELIVERY</h3>
        <p class="text-gray-600 text-sm">
          Free delivery for all orders over $140
        </p>
      </div>

      <div class="text-center">
        <div
          class="h-16 w-16 bg-black border-7 border-gray-400 rounded-4xl flex items-center justify-center mx-auto mb-3"
        >
          <img src="@/assets/icons/customer-service.png" class="h-8" />
        </div>
        <h3 class="font-bold">24/7 CUSTOMER SERVICE</h3>
        <p class="text-gray-600 text-sm">Friendly 24/7 customer support</p>
      </div>

      <div class="text-center">
        <div
          class="h-16 w-16 bg-black border-7 border-gray-400 rounded-4xl flex items-center justify-center mx-auto mb-3"
        >
          <img src="@/assets/icons/Icon-secure.png" class="h-8" />
        </div>
        <h3 class="font-bold">MONEY BACK GUARANTEE</h3>
        <p class="text-gray-600 text-sm">We return money within 30 days</p>
      </div>
    </section>
    <div class="flex justify-end mt-20 mb-1">
      <span
        class="h-13 w-13 bg-[#F5F5F5] rounded-4xl flex items-center justify-center mx-20 my-5"
      >
        <img src="@/assets/icons/arrow-up.png" class="h-5" />
      </span>
    </div>
  </div>
</template>

<script>
import FlashSale from "@/components/FlashSale.vue";
import CategoryList from "@/components/CategoryList.vue";
import ProductGrid from "@/components/ProductGrid.vue";
import NewArrival from "@/components/NewArrival.vue";
import BestSelling from "@/components/BestSelling.vue";
import CategorySidebar from "../components/CategorySidebar.vue";
import SpeakerHero from "../components/SpeakerHero.vue";

export default {
  name: "LoggedHome",
  data() {
    return {
      activeProduct: null, 
    };
  },
  components: {
    FlashSale,
    CategoryList,
    ProductGrid,
    NewArrival,
    BestSelling,
    CategorySidebar,
    SpeakerHero,
  },
};
</script>
