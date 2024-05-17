<script setup>
defineProps({
  text: String,
});
</script>
<template>
  <div class="flex flex-col items-center lg:items-start">
    <p class="text-white text-sm uppercase lg:text-md">{{ text }}</p>
    <div class="bg-white w-12 h-1 mt-1 lg:w-14"></div>
  </div>
</template>
<style scoped></style>
