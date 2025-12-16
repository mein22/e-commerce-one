<template>
  <div class="flex items-center gap-1">
    <span
      v-for="n in 5"
      :key="n"
      class="fa-star"
      :class="{
        'fa-solid text-yellow-400': n <= fullStars,
        'fa-regular text-yellow-400': n > fullStars,
      }"
    ></span>

    <span class="text-gray-500 text-sm ml-1">
      ({{ rating.count }} reviews)
    </span>
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Object,
      required: true,
    },
  },
  computed: {
    fullStars() {
      return Math.round(this.rating.rate);
    },
  },
};
</script>
