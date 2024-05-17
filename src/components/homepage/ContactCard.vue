<script setup>
defineProps({
  icon: String,
  title: String,
  text: String,
});
</script>
<template>
  <div
    class="bg-white flex flex-col items-center justify-center w-60 h-36 drop-shadow-xl p-5 sm:w-66 md:w-72 md:h-40 lg:items-start"
  >
    <span
      class="bg-desalightgreen text-white rounded-full text-xl px-3 py-2 sm:text-2xl lg:text-3xl"
      ><i :class="icon"></i
    ></span>
    <h3 class="text-desalightgreen text-xl font-semibold md:text-2xl xl:text-3xl">
      {{ title }}
    </h3>
    <p class="text-desadarkgray text-sm sm:text-base md:text-lg xl:text-xl">{{ text }}</p>
  </div>
</template>
<style scoped></style>
