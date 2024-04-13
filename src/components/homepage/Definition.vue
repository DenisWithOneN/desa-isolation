<script setup>
const props = defineProps({
  definition: String,
  text: String,
});
</script>
<template>
  <div class="flex flex-col items-center">
    <span class="flex flex-col items-center">
      <div class="bg-white w-52 h-52 rounded-full"></div>
      <div class="bg-white w-1 h-14"></div>
      <div class="bg-white w-4 h-4 rounded-full"></div>
    </span>

    <span class="flex flex-col items-center gap-2">
      <p class="text-white">{{ definition }}</p>
      <div class="bg-desalime w-12 h-1"></div>
    </span>

    <p class="text-white text-center mt-10">
      {{ text }}
    </p>
  </div>
</template>
<style scoped></style>
