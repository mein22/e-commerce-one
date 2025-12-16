<template>
  <section
    class="w-full flex justify-center items-center bg-black py-16 px-6 relative"
  >
    <div class="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
      <!-- Left text -->
      <div class="text-white space-y-6">
        <p class="text-green-400 font-semibold text-lg">Categories</p>

        <h1 class="text-4xl md:text-6xl font-bold leading-tight">
          Enhance Your <br />
          Music Experience
        </h1>

        <!-- Countdown -->
        <div class="flex gap-4 mt-8">
          <div
            v-for="(item, index) in countdown"
            :key="index"
            class="bg-white text-black w-20 h-20 rounded-full flex flex-col justify-center items-center font-semibold text-center"
          >
            <span class="text-xl">{{ item.value }}</span>
            <span class="text-sm">{{ item.label }}</span>
          </div>
        </div>

        <button
          class="mt-8 bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-4 rounded-lg"
        >
          Buy Now!
        </button>
      </div>

      <!-- Right image -->
      <div class="relative flex justify-center items-center">
        <!--Blur image -->
        <img
          src="@/assets/elipse-blur.png"
          alt="blur"
          class="absolute inset-0 m-auto w-[200%] h-full z-0"
        />

        <!-- Speaker image -->
        <img
          src="@/assets/boombox.png"
          alt="Speaker"
          class="relative w-full max-w-lg drop-shadow-xl z-10"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const countdown = [
  { value: "23", label: "Hours" },
  { value: "05", label: "Days" },
  { value: "59", label: "Minutes" },
  { value: "35", label: "Seconds" },
];
</script>
