<script setup>
import { RouterLink } from "vue-router";
defineProps({
  projectName: String,
  route: String,
});
</script>

<template>
  <div class="flex flex-col items-center">
    <div
      class="bg-gray-500 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80"
    ></div>
    <RouterLink
      class="bg-desalightgreen flex items-center justify-center w-40 h-16 -mt-8 sm:w-44 sm:h-18 sm:-mt-9 md:w-48 md:h-20 md:-mt-10 lg:w-52 lg:h-22 lg:-mt-11 xl:w-56 xl:h-24 xl:-mt-12"
      :to="route"
    >
      <p
        class="text-white text-xl uppercase font-bold sm:text-2xl md:text-3xl lg:text-4xl"
      >
        {{ projectName }}
      </p>
    </RouterLink>
  </div>
</template>

<style scoped></style>
