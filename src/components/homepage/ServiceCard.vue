<script setup>
const props = defineProps({
  icon: String,
  title: String,
  text: String,
});
</script>
<template>
  <div
    class="bg-white h-56 w-56 flex flex-col items-center justify-center drop-shadow-2xl p-2 md:w-60 md:h-60 lg:w-56 lg:h-56 xl:w-72 xl:h-72"
  >
    <div
      class="text-desalightgreen text-3xl mb-1 lg:text-4xl xl:text-5xl xl:mb-4"
    >
      <i :class="icon"></i>
    </div>
    <p
      class="text-desadarkgray text-md sm:text-lg xl:text-xl text-center font-bold"
    >
      {{ title }}
    </p>
    <p class="text-desadarkgray text-sm text-center px-2">
      {{ text }}
    </p>
  </div>
</template>
<style scoped></style>
