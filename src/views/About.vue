<template>
  <div class="bg-white min-h-screen pb-20">
    <!-- BREADCRUMB -->
    <p class="text-gray-500 p-10">
      Home / <span class="font-semibold">About</span>
    </p>

    <!-- SECTION 1: Our Story -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <!-- Left Text -->
      <div class="pl-10">
        <h1 class="text-3xl font-bold mb-6">Our Story</h1>
        <p class="text-gray-700 text-1.5xl leading-relaxed mb-4">
          Launced in 2015, Exclusive is South Asia’s premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region. .
        </p>

        <p class="text-gray-700 text-1.5xl leading-relaxed">
          Exclusive has more than 1 million products in offer, growing at a very
          fast pace. It offers a diverse assortment in categories ranging from
          consumer…
        </p>
      </div>

      <!-- Right Image -->
      <img
        src="@/assets/about/about-image.png"
        alt="About Image"
        class="rounded-lg w-full object-cover mr-auto"
      />
    </div>

    <!-- SECTION 2: Stats -->
    <div class="mt-20">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
        <!-- Box 1 -->
        <div
          class="border rounded-lg py-8 flex flex-col items-center text-center"
        >
          <div
            class="h-16 w-16 bg-black border-4 border-gray-300 rounded-full flex items-center justify-center mb-4"
          >
            <img src="@/assets/about/customer.png" class="h-8" />
          </div>
          <h3 class="text-2xl font-bold">10.5k</h3>
          <p class="text-gray-600 mt-1">Sellers active on our site</p>
        </div>

        <!-- Box 2 (Highlighted) -->
        <div
          class="border rounded-lg py-8 flex flex-col items-center text-center bg-red-500 text-white"
        >
          <div
            class="h-16 w-16 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center mb-4"
          >
            <img src="@/assets/about/revenue.png" class="h-8" />
          </div>
          <h3 class="text-2xl font-bold">33k</h3>
          <p class="mt-1">Monthly Products Sold</p>
        </div>

        <!-- Box 3 -->
        <div
          class="border rounded-lg py-8 flex flex-col items-center text-center"
        >
          <div
            class="h-16 w-16 bg-black border-4 border-gray-300 rounded-full flex items-center justify-center mb-4"
          >
            <img src="@/assets/about/seller.png" class="h-8" />
          </div>
          <h3 class="text-2xl font-bold">45.5k</h3>
          <p class="text-gray-600 mt-1">Customers active on our site</p>
        </div>

        <!-- Box 4 -->
        <div
          class="border rounded-lg py-8 flex flex-col items-center text-center"
        >
          <div
            class="h-16 w-16 bg-black border-4 border-gray-300 rounded-full flex items-center justify-center mb-4"
          >
            <img src="@/assets/about/money.png" class="h-8" />
          </div>
          <h3 class="text-2xl font-bold">25k</h3>
          <p class="text-gray-600 mt-1">Annual gross sale on our site</p>
        </div>
      </div>
    </div>

    <!-- SECTION 3: Team Members -->
    <div class="mt-20">
      <!-- Team Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <!-- Team 1 -->
        <div class="flex flex-col items-start">
          <div
            class="bg-gray-200 h-[360px] w-full flex justify-center items-end"
          >
            <img
              src="@/assets/about/person.png"
              class="h-[320px] object-contain"
            />
          </div>

          <h3 class="font-bold text-xl mt-4">Tom Cruise</h3>
          <p class="text-gray-500">Founder & Chairman</p>

          <div class="flex gap-4 mt-3">
            <img src="@/assets/icons/Icon-Twitter.png" class="w-5" />
            <img src="@/assets/icons/Icon-Linkedin.png" class="w-5" />
            <img src="@/assets/icons/icon-instagram.png" class="w-5" />
          </div>
        </div>

        <!-- Team 2 -->
        <div class="flex flex-col items-start">
          <div
            class="bg-gray-200 h-[360px] w-full flex justify-center items-end"
          >
            <img
              src="@/assets/about/person2.png"
              class="h-[320px] object-contain"
            />
          </div>

          <h3 class="font-bold text-xl mt-4">Emma Watson</h3>
          <p class="text-gray-500">Managing Director</p>

          <div class="flex gap-4 mt-3">
            <img src="@/assets/icons/Icon-Twitter.png" class="w-5" />
            <img src="@/assets/icons/Icon-Linkedin.png" class="w-5" />
            <img src="@/assets/icons/icon-instagram.png" class="w-5" />
          </div>
        </div>

        <!-- Team 3 -->
        <div class="flex flex-col items-start">
          <div
            class="bg-gray-200 h-[360px] w-full flex justify-center items-end"
          >
            <img
              src="@/assets/about/person3.png"
              class="h-[320px] object-contain"
            />
          </div>

          <h3 class="font-bold text-xl mt-4">Will Smith</h3>
          <p class="text-gray-500">Product Designer</p>

          <div class="flex gap-4 mt-3">
            <img src="@/assets/icons/Icon-Twitter.png" class="w-5" />
            <img src="@/assets/icons/Icon-Linkedin.png" class="w-5" />
            <img src="@/assets/icons/icon-instagram.png" class="w-5" />
          </div>
        </div>
      </div>

      <!-- Dots Indicator -->
      <div class="flex justify-center items-center gap-3 mt-10">
        <span class="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span class="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span class="w-3 h-3 bg-red-500 rounded-full"></span>
        <span class="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span class="w-3 h-3 bg-gray-300 rounded-full"></span>
      </div>
    </div>

    <!-- section 5 -->
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
          <img src="@/assets/icons/icon-secure.png" class="h-8" />
        </div>
        <h3 class="font-bold">MONEY BACK GUARANTEE</h3>
        <p class="text-gray-600 text-sm">We return money within 30 days</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>
