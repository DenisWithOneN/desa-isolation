<script setup>
const props = defineProps({
  text: String,
  route: String,
});
</script>
<template>
  <RouterLink
    class="bg-desalightgreen text-white font-semibold text-center w-32 h-12 flex items-center justify-center px-4"
    :to="route"
    >{{ text }}
  </RouterLink>
</template>
<style scoped></style>
