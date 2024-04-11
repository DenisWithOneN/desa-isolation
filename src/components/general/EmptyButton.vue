<script setup>
const props = defineProps({
  text: String,
  route: String,
});
</script>
<template>
  <button
    class="border-desalightgreen border-4 text-white flex justify-center items-center w-32 h-12 py-2 px-4"
  >
    <RouterLink :to="route">{{ text }}</RouterLink>
  </button>
</template>
<style scoped></style>
