<template>
  <footer class="bg-black text-white mt-16 pt-12 pb-10">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-25 px-6">
      <div>
        <h2 class="text-xl font-semibold mb-4">Exclusive</h2>
        <h3 class="font-semibold mb-4">Subscribe</h3>
        <p class="text-sm">Get 10% off your first order</p>
        <!-- Email input -->
        <div class="hidden md:block relative w-45">
          <input
            type="email"
            placeholder="Enter your email"
            class="mt-3 border rounded-lg pl-4 pr-10 py-3 w-full text-sm"
          />

          <!-- Send Icon -->
          <img
            src="../assets/icons/icon-send.png"
            alt="search-icon"
            class="absolute right-3 top-1/2 -translate-y-[35%] w-5 h-5"
          />
        </div>
      </div>

      <div>
        <h3 class="font-semibold mb-4">Support</h3>
        <p class="text-sm leading-6">
          111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.<br /><br />
          exclusive@gmail.com<br /><br />
          +88015-88888-9999
        </p>
      </div>

      <div>
        <h3 class="font-semibold mb-4">Account</h3>
        <p class="text-sm leading-6">
          My Account.<br /><br />
          Login/Register<br /><br />
          Cart<br /><br />
          Whitelist<br /><br />
          Shop
        </p>
      </div>

      <div>
        <h3 class="font-semibold mb-4">Quick Link</h3>
        <ul class="space-y-2 text-sm">
          <li>Privacy Policy</li>
          <li>Terms Of Use</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold mb-4">Download App</h3>
        <img src="../assets/qr-code.png" class="w-24 mb-4" />
        <div class="flex space-x-3">
          <img src="../assets/googleplay.png" class="w-28" />
          <img src="../assets/appstore.png" class="w-28" />
        </div>
        <div class="flex space-x-5 mt-5">
          <img src="../assets/icons/Icon-Facebook.png" class="w-25" />
          <img src="../assets/icons/Icon-Twitter.png" class="w-25" />
          <img src="../assets/icons/icon-instagram.png" class="w-25" />
          <img src="../assets/icons/Icon-Linkedin.png" class="w-25" />
        </div>
      </div>
    </div>

    <p class="text-center text-xs mt-15 text-gray-500">
      © Copyright Ramel 2022. All rights reserved
    </p>
  </footer>
</template>
