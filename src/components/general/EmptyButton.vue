<script setup>
const props = defineProps({
  text: String,
});
</script>
<template>
  <div
    class="border-desalightgreen border-4 flex justify-center items-center w-32 h-12 py-2 px-4"
  >
    <button class="text-white">{{ text }}</button>
  </div>
</template>
<style scoped></style>
