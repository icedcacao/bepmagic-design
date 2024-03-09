<template>
  <div class="bg-white-cream pb-8 lg:pb-12 lg:pt-6 xl:pb-16 xl:pt-10">
    <div class="mx-auto grid max-w-screen-2xl lg:grid-cols-2">
      <div
        class="flex flex-col justify-between space-y-4 px-4 sm:space-y-8 sm:px-8 md:px-12 lg:py-4"
      >
        <div
          class="font-dela text-3xl sm:text-6xl md:text-7xl lg:text-5xl xl:text-6xl 2xl:space-y-2 2xl:text-7xl"
        >
          <h2 class="text-center text-[#73a9ad] lg:text-left">NUTRIOUS</h2>
          <h2 class="text-center text-[#99bc85] lg:text-left">HEALTHY</h2>
          <h2 class="text-center text-[#d2745a] lg:text-left">DELICIOUS</h2>
          <h2 class="text-center text-[#eca869] lg:text-left">AFFORDABLE</h2>
        </div>
        <div class="flex justify-center lg:justify-start">
          <router-link
            class="border-[1.5px] border-black bg-orange px-6 py-1 text-xl font-medium text-white shadow-[4px_4px_0_rgb(0,0,0)] transition-all ease-out hover:translate-y-0.5 hover:shadow-[0px_0px_0px_rgb(0,0,0)] sm:text-2xl md:px-12 md:py-2 xl:border-2 xl:text-3xl"
            to="/menu"
            >EXPLORE NOW</router-link
          >
        </div>
      </div>
      <div class="hidden pr-12 lg:flex">
        <img
          class="h-auto w-full border-[1.5px] xl:border-2"
          src="/img/imgplaceholder.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
