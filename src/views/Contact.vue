<template>
  <div class="bg-white min-h-screen">
    <!-- BREADCRUMB -->
    <div class="max-w-7xl mx-auto px-6 py-18">
      <p class="text-gray-500 text-sm">
        Home / <span class="font-semibold text-black">Contact</span>
      </p>
    </div>

    <!-- MAIN CONTENT -->
    <div class="max-w-7xl mx-auto px-6 pb-20">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <!-- LEFT: CONTACT INFO -->
        <div class="rounded-lg p-8 space-y-8">
          <!-- Call To Us -->
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <span
                class="h-10 w-10 rounded-full bg-red-500 flex items-center justify-center"
              >
                <img src="@/assets/icons/callicon.png" class="h-5" />
              </span>
              <h3 class="font-semibold">Call To Us</h3>
            </div>

            <p class="text-gray-600 text-sm">
              We are available 24/7, 7 days a week.
            </p>
            <p class="text-gray-800 text-sm font-medium">
              Phone: +8801611112222
            </p>
          </div>

          <hr />

          <!-- Write To Us -->
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <span
                class="h-10 w-10 rounded-full bg-red-500 flex items-center justify-center"
              >
                <img src="@/assets/icons/email.png" class="h-5" />
              </span>
              <h3 class="font-semibold">Write To Us</h3>
            </div>

            <p class="text-gray-600 text-sm">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p class="text-gray-800 text-sm">Emails: customer@exclusive.com</p>
            <p class="text-gray-800 text-sm">Emails: support@exclusive.com</p>
          </div>
        </div>

        <!-- RIGHT: CONTACT FORM -->
        <div class="lg:col-span-2 rounded-lg p-8">
          <form class="space-y-6">
            <!-- Inputs -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <input
                type="text"
                placeholder="Your Name *"
                class="bg-gray-100 px-4 py-3 rounded outline-none"
              />
              <input
                type="email"
                placeholder="Your Email *"
                class="bg-gray-100 px-4 py-3 rounded outline-none"
              />
              <input
                type="text"
                placeholder="Your Phone *"
                class="bg-gray-100 px-4 py-3 rounded outline-none"
              />
            </div>

            <!-- Message -->
            <textarea
              rows="6"
              placeholder="Your Message"
              class="w-full bg-gray-100 px-4 py-3 rounded outline-none resize-none"
            ></textarea>

            <!-- Button -->
            <div class="flex justify-end">
              <button
                type="submit"
                class="bg-red-500 text-white px-8 py-3 rounded hover:bg-red-600 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
