<template>
  <div class="p-10">
    <p class="text-gray-500 mb-8">
      Account / Gaming / <span class="font-semibold">{{ product.title }}</span>
    </p>

    <div
      v-if="product"
      class="grid grid-cols-1 lg:grid-cols-[140px_1fr_1fr] gap-10"
    >
      <!-- Small Images -->
      <div class="flex flex-col gap-4">
        <img
          v-for="(img, index) in productImages"
          :key="index"
          :src="img"
          class="w-28 h-28 object-contain cursor-pointer rounded bg-[#F5F5F5] p-4"
          @click="currentImage = img"
        />
      </div>

      <!-- Main Image -->
      <div>
        <img
          :src="currentImage || product.image"
          class="w-full h-[420px] object-contain rounded bg-[#F5F5F5] p-5"
        />
      </div>

      <!-- RIGHT: Product Information -->
      <div class="pr-10">
        <h1 class="text-2xl font-semibold">{{ product.title }}</h1>

        <!-- Rating -->
        <div class="flex gap-6">
          <RatingStars :rating="product.rating" />
          <span class="text-green-500">| in stock</span>
        </div>
        <p class="text-lg text-red-600 font-bold mt-2">$ {{ product.price }}</p>

        <p class="mt-4 text-gray-600">{{ product.description }}</p>

        <div class="w-full max-w-md space-y-6">
          <!-- Colours -->
          <div class="flex gap-6">
            <p class="font-medium text-lg">Colours:</p>
            <div class="flex items-center space-x-3 mt-2">
              <button
                class="w-5 h-5 rounded-full border-4 border-black bg-[#A0BCE0]"
              ></button>
              <button
                class="w-5 h-5 rounded-full border border-gray-400 bg-[#db4444]"
              ></button>
            </div>
          </div>

          <!-- Sizes -->
          <div>
            <p class="font-medium text-lg">Size:</p>
            <div class="flex space-x-3 mt-3">
              <button class="px-4 py-2 border rounded-md text-sm">XS</button>
              <button class="px-4 py-2 border rounded-md text-sm">S</button>
              <button
                class="px-4 py-2 rounded-md text-sm bg-red-500 text-white border border-red-500"
              >
                M
              </button>
              <button class="px-4 py-2 border rounded-md text-sm">L</button>
              <button class="px-4 py-2 border rounded-md text-sm">XL</button>
            </div>
          </div>

          <!-- Quantity + Buy -->
          <div class="flex items-center space-x-3">
            <!-- Quantity box -->
            <div class="flex items-center border rounded-md overflow-hidden">
              <button class="px-4 py-2 border-r">−</button>
              <span class="px-4 py-2">2</span>
              <button class="px-4 py-2 border-l bg-red-500 text-white">
                +
              </button>
            </div>

            <!-- Buy Now button -->
            <button
              class="flex-1 bg-red-500 text-white font-medium py-3 rounded-md"
            >
              Buy Now
            </button>

            <!-- Heart icon -->
            <button class="p-3 border rounded-md">
              <img src="@/assets/icons/heart.png" alt="" />
            </button>
          </div>

          <!-- Delivery Info -->
          <div class="border rounded-lg divide-y">
            <div class="p-4 flex space-x-3">
              <span><img src="@/assets/icons/delivery.png" alt="" /></span>
              <div>
                <p class="font-medium">Free Delivery</p>
                <a class="underline text-sm text-black"
                  >Enter your postal code for Delivery Availability</a
                >
              </div>
            </div>

            <div class="p-4 flex space-x-3">
              <span><img src="@/assets/icons/return.png" alt="" /></span>
              <div>
                <p class="font-medium">Return Delivery</p>
                <a class="underline text-sm text-black"
                  >Free 30 Days Delivery Returns. Details</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- RELATED ITEMS -->
    <div class="mt-30">
      <div class="flex items-center gap-2">
        <span class="w-3 h-6 bg-red-600 rounded"></span>
        <p class="text-red-600 font-medium">Related item</p>
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
      <div
        v-for="item in related.slice(0, 4)"
        :key="item.id"
        class="cursor-pointer"
        @click="showButton(item.id)"
      >
        <!-- PRODUCT BOX -->
        <div
          class="relative bg-[#F5F5F5] p-5 rounded-lg hover:shadow-lg transition h-[260px] flex flex-col justify-between group"
        >
          <!-- DISCOUNT TAG -->
          <span
            class="h-7 w-14 bg-red-600 text-white text-sm rounded-sm flex items-center justify-center"
          >
            40%
          </span>

          <!-- Icons -->
          <div class="absolute top-3 right-3 space-y-2 grid">
            <span
              @click.stop="addToWishlist(item)"
              class="p-2 bg-white shadow rounded-full hover:bg-red-500 cursor-pointer"
            >
              <img src="@/assets/icons/heart.png" alt="" />
            </span>

            <span
              @click.stop="viewProduct(item.id)"
              class="p-2 bg-white shadow rounded-full hover:bg-red-500 cursor-pointer"
            >
              <img src="@/assets/icons/eye.png" alt="" />
            </span>
          </div>

          <!-- PRODUCT IMAGE -->
          <img :src="item.image" class="h-32 mx-auto object-contain mb-10" />

          <!-- ADD TO CART BUTTON -->
          <button
            v-if="$store.state.activeProduct === item.id"
            @click.stop="addToCart(item)"
            class="bg-black text-white py-2 rounded-lg mt-3 transition"
          >
            Add To Cart
          </button>
        </div>

        <!-- TITLE + PRICE -->
        <h4 class="font-semibold text-sm mt-2 line-clamp-1">
          {{ item.title }}
        </h4>

        <p class="text-red-600 font-bold">${{ item.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import RatingStars from "@/components/RatingStars.vue";

export default {
  data() {
    return {
      currentImage: null,
      related: [],
    };
  },
  components: { RatingStars },
  computed: {
    id() {
      return Number(this.$route.params.id);
    },

    product() {
      return this.$store.state.products.find((p) => p.id === this.id);
    },

    productImages() {
      return [
        this.product.image,
        this.product.image,
        this.product.image,
        this.product.image,
      ];
    },
  },

  methods: {
    addToCart(product) {
      this.$store.commit("addToCart", product);
    },
    showButton(productId) {
      this.$store.commit("setActiveProduct", productId);
    },
    viewProduct(id) {
      this.$store.commit("setActiveProduct", id);
      this.$router.push(`/product/${id}`);
    },

    loadRelated() {
      const items = this.$store.state.products;

      // Same category products excluding the current item
      let relatedItems = items.filter(
        (p) => p.category === this.product.category && p.id !== this.product.id
      );

      // If fewer than 4, fill with random products from other categories
      if (relatedItems.length < 4) {
        const filler = items
          .filter((p) => p.id !== this.product.id && !relatedItems.includes(p))
          .sort(() => Math.random() - 0.5)
          .slice(0, 4 - relatedItems.length);

        relatedItems = [...relatedItems, ...filler];
      }

      // 3️⃣ Shuffle final list and take 4
      this.related = relatedItems.sort(() => Math.random() - 0.5).slice(0, 4);
    },
  },

  mounted() {
    this.currentImage = this.product.image;
    this.loadRelated();
  },
};
</script>
