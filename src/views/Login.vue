<template>
  <div class="flex flex-col justify-center">
    <h2 class="text-3xl font-semibold mb-2">Sign in to your account</h2>
    <p class="text-gray-600 mb-8">Enter your details below</p>

    <form @submit.prevent="loginUser" class="space-y-5">
      <input
        v-model="form.email"
        type="email"
        placeholder="Email or Phone Number"
        class="w-full border px-4 py-3 rounded-lg"
      />

      <input
        v-model="form.password"
        type="password"
        placeholder="Password"
        class="w-full border px-4 py-3 rounded-lg"
      />

      <div class="flex justify-between items-center pt-2">
        <button
          type="submit"
          class="w-1/2 bg-red-600 text-white py-3 rounded-lg font-medium"
        >
          Sign in
        </button>

        <router-link
          to="/forgot-password"
          class="text-red-600 text-sm font-medium hover:underline"
        >
          Forgot Password?
        </router-link>
      </div>
    </form>
  </div>
</template>


<script>
import { mapActions } from "vuex";

export default {
  name: "Login",

  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapActions(["login"]),

    async loginUser() {
      await this.login(this.form);

      // redirect ONLY after login
      this.$router.push("/loggedhome");
    },
  },
};
</script>

