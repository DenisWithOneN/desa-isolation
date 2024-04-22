<script setup>
defineProps({
  text: String,
});
</script>
<template>
  <div class="flex gap-3 items-center">
    <span class="text-white text-3xl xl:text-5xl"
      ><i class="bi bi-check2-square"></i
    ></span>
    <p
      class="text-white text-sm sm:text-md md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl"
    >
      {{ text }}
    </p>
  </div>
</template>
<style scoped></style>
