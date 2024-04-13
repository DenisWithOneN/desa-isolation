<script setup>
const props = defineProps({
  icon: String,
  title: String,
  text: String,
});
</script>
<template>
  <div class="bg-desagray h-52 w-52 flex flex-col items-center justify-center">
    <div class="text-desalightgreen text-5xl mb-4">
      <i :class="icon"></i>
    </div>
    <p class="text-xl text-center font-semibold">{{ title }}</p>
    <p class="text-sm text-center px-2">
      {{ text }}
    </p>
  </div>
</template>
<style scoped></style>
