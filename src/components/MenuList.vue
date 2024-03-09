<template>
  <div
    class="mx-auto max-w-screen-2xl space-y-8 px-4 py-8 sm:px-8 sm:py-12 lg:space-y-12 lg:py-16 xl:py-24"
  >
    <div class="space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10">
      <h1 class="text-center font-dela text-2xl sm:text-4xl lg:text-5xl">
        MÓN CHÍNH
      </h1>
      <div class="grid gap-4 md:grid-cols-2"><mainitem /><mainitem /></div>
    </div>
    <div class="grid gap-4 md:grid-cols-2">
      <div class="space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10">
        <h1 class="text-center font-dela text-2xl sm:text-4xl lg:text-5xl">
          TRÁNG MIỆNG
        </h1>
        <div class="grid gap-4"><mainitem /><mainitem /></div>
      </div>
      <div class="space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10">
        <h1 class="text-center font-dela text-2xl sm:text-4xl lg:text-5xl">
          TRÁNG MIỆNG
        </h1>
        <div class="grid gap-4"><mainitem /><mainitem /></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import mainitem from "./MainItem.vue";
</script>
