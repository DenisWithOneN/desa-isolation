<script setup>
const props = defineProps({
  icon: String,
  title: String,
  text: String,
});
</script>
<template>
  <div
    class="bg-white h-52 w-52 flex flex-col items-center justify-center drop-shadow-2xl lg:w-56 lg:h-56 xl:w-72 xl:h-72"
  >
    <div class="text-desalightgreen text-5xl mb-4">
      <i :class="icon"></i>
    </div>
    <p class="text-desadarkgray text-xl text-center font-bold">
      {{ title }}
    </p>
    <p class="text-desadarkgray text-sm text-center px-2">
      {{ text }}
    </p>
  </div>
</template>
<style scoped></style>
