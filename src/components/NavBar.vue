<template>
  <div class="bg-white-cream py-4 sm:py-6">
    <div class="space-y-2 text-center sm:space-y-4 lg:space-y-6">
      <router-link class="font-dela text-4xl sm:text-5xl xl:text-6xl" to="/"
        >MAGIC FOOD</router-link
      >
      <div
        class="space-x-8 text-lg font-bold sm:text-xl md:text-2xl xl:text-3xl"
      >
        <router-link
          class="link link-underline link-underline-black pb-0.5"
          to="/menu"
          >MENU</router-link
        >
        <router-link
          class="link link-underline link-underline-black pb-0.5"
          to="/cart"
          >CART</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup></script>
