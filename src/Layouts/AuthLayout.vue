<template>
  <div class="min-h-screen flex flex-col bg-white">
    <!-- Header -->
    <Header />

    <!-- Main Auth Content -->
    <main class="flex-1 flex">
      <!-- Left Image -->
      <div v-if="showImage" class="w-3/5 pt-16">
        <img
          src="../assets/Side-Image.png"
          alt="Auth Image"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Right Content -->
      <div
        :class="showImage ? 'w-2/5' : 'w-full'"
        class="flex items-center justify-center p-10"
      >
        <router-view />
      </div>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "AuthLayout",
  components: {
    Header,
    Footer,
  },
  computed: {
    showImage() {
      return this.$route.name === "Signup" || this.$route.name === "Login";
    },
  },
};
</script>
