<template>
  <section class="mt-20">
    <div class="flex items-center gap-2">
      <span class="w-3 h-6 bg-red-600 rounded"></span>
      <p class="text-red-600 font-medium">Categories</p>
    </div>

    <!-- Title and arrows -->
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-bold mt-2 mb-6">Browse By Category</h2>

      <div class="flex space-x-2">
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

    <div class="grid grid-cols-6 gap-6">
      <div
        v-for="cat in categories"
        :key="cat.name"
        class="border rounded-lg p-6 flex flex-col items-center cursor-pointer hover:bg-red-500 hover:text-white transition"
      >
        <img :src="cat.icon" class="h-8 mb-3" />
        <p>{{ cat.name }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import phone from "@/assets/icons/phone.png";
import computer from "@/assets/icons/computer.png";
import watch from "@/assets/icons/watch.png";
import camera from "@/assets/icons/camera.png";
import headphone from "@/assets/icons/headphone.png";
import gamepad from "@/assets/icons/gamepad.png";

export default {
  name: "CategoryList",
  data() {
    return {
      categories: [
        { name: "Phones", icon: phone },
        { name: "Computers", icon: computer },
        { name: "SmartWatch", icon: watch },
        { name: "Camera", icon: camera },
        { name: "Headphones", icon: headphone },
        { name: "Gaming", icon: gamepad },
      ],
    };
  },
};
</script>
