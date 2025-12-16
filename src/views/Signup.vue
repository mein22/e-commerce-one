 <template>
  <div class="flex flex-col justify-center">
    <h2 class="text-3xl font-semibold mb-2">Create an account</h2>
    <p class="text-gray-600 mb-8">Enter your details below</p>

    <form @submit.prevent="signupUser" class="space-y-5">

      <input v-model="form.name" type="text" placeholder="Name" class="w-full border px-4 py-3 rounded-lg" />
      <input v-model="form.email" type="email" placeholder="Email or Phone Number" class="w-full border px-4 py-3 rounded-lg" />
      <input v-model="form.password" type="password" placeholder="Password" class="w-full border px-4 py-3 rounded-lg" />

      <button type="submit" class="w-full bg-red-600 text-white py-3 rounded-lg font-medium">
        Create Account
      </button>

      <button type="button" class="w-full border py-3 rounded-lg flex items-center justify-center space-x-3">
        <img src="../assets/Icon-Google.png" class="w-5" />
        <span>Sign up with Google</span>
      </button>

    </form>

    <p class="mt-6 text-sm">
      Already have account?
      <RouterLink to="/auth/login" class="text-red-600 ml-1">Login</RouterLink>
    </p>

  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Signup",

  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapActions(["login"]),

    signupUser() {
      this.login(this.form);
      this.$router.push("/");
    },
  },
};
</script>
