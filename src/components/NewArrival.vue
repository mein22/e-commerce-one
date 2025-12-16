<template>
  <section class="mt-20">
    <div class="flex items-center gap-2">
      <span class="w-3 h-6 bg-red-600 rounded"></span>
      <p class="text-red-600 font-medium">Featured</p>
    </div>
    <h2 class="text-2xl font-bold mt-2 mb-6">New Arrival</h2>
    <div class="grid grid-cols-2 gap-4">
      <!-- Left big image -->
      <img
        src="@/assets/arrival1.png"
        class="rounded-lg w-full h-full object-cover"
      />

      <!-- Right -->
      <div class="flex flex-col gap-4">
        <!-- Top wide image -->
        <img src="@/assets/arrival2.png" class="rounded-lg w-full" />

        <!-- Bottom images -->
        <div class="grid grid-cols-2 gap-4">
          <img src="@/assets/arrival3.png" class="rounded-lg w-full" />
          <img src="@/assets/arrival4.png" class="rounded-lg w-full" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NewArrival",
};
</script>
