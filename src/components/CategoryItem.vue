<template>
  <div
    class="flex items-center justify-between cursor-pointer text-sm font-semibold hover:font-medium"
  >
    <span>{{ text }}</span>
    <span><img src="../assets/icons/arrow.png" alt="" /></span>
  </div>
</template>

<script>
export default {
  name: "CategoryItem",
  props: {
    text: String,
  },
};
</script>
