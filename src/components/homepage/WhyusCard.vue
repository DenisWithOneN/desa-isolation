<script setup>
defineProps({
  text: String,
});
</script>
<template>
  <div
    class="bg-white flex gap-3 items-center rounded-md w-52 h-14 sm:w-60 md:w-72 md:h-16 xl:w-96 xl:h-20 p-2"
  >
    <span class="text-desalightgreen text-3xl xl:text-5xl"
      ><i class="bi bi-check-circle-fill"></i
    ></span>
    <p class="text-desalightgreen font-medium text-sm sm:text-base md:text-lg xl:text-xl">
      {{ text }}
    </p>
  </div>
</template>
<style scoped></style>
