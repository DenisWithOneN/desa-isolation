<script setup>
defineProps({
  icon: String,
  title: String,
  text: String,
});
</script>
<template>
  <div class="bg-white flex flex-col items-start justify-center w-60 h-32 drop-shadow-xl p-2 sm:w-72 sm:h-32 md:w-72 md:h-40">
    <span class="bg-desalightgreen text-white rounded-full text-xl px-3 py-2 sm:text-2xl"
      ><i :class="icon"></i
    ></span>
    <h3 class="text-desalightgreen text-xl font-semibold sm:text-2xl md:text-3xl">{{ title }}</h3>
    <p class="text-desadarkgray text-sm sm:text-lg md:text-xl">{{ text }}</p>
  </div>
</template>
<style scoped></style>
