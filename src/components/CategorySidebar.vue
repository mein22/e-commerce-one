<template>
  <div class="border-r pr-6 space-y-4 col-span-1">
    <CategoryItem text="Woman's Fashion" />
    <CategoryItem text="Men's Fashion" />
    <CategoryItem text="Electronics" />
    <CategoryItem text="Home & Lifestyle" />
    <CategoryItem text="Medicine" />
    <CategoryItem text="Sports & Outdoor" />
    <CategoryItem text="Baby's & Toys" />
    <CategoryItem text="Groceries & Pets" />
    <CategoryItem text="Health & Beauty" />
  </div>
</template>

<script>
import CategoryItem from "@/components/CategoryItem.vue";

export default {
  name: "CategorySidebar",
  components: {
    CategoryItem,
  },
};
</script>
