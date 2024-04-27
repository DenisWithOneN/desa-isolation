<script setup>
const props = defineProps({
  definition: String,
  text: String,
  icon: String,
});
</script>
<template>
  <div class="flex flex-col items-center">
    <span class="flex flex-col items-center">
      <div
        class="bg-white w-52 h-52 md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-72 xl:h-72 rounded-full flex justify-center items-center"
      >
        <span class="text-desalime text-8xl md:text-7xl lg:text-8xl xl:text-9xl"
          ><i :class="icon"></i
        ></span>
      </div>
      <div class="bg-white w-1 h-14"></div>
      <div class="bg-white w-4 h-4 rounded-full"></div>
    </span>

    <span class="flex flex-col items-center gap-2 mt-5">
      <p
        class="text-white text-2xl font-semibold text-center uppercase lg:text-3xl xl:text-4xl"
      >
        {{ definition }}
      </p>
      <div class="bg-desalime w-12 h-1 xl:w-16"></div>
    </span>

    <p
      class="text-white text-sm text-center max-w-lg px-3 mt-10 md:text-md lg:text-lg xl:text-xl"
    >
      {{ text }}
    </p>
  </div>
</template>
<style scoped></style>
