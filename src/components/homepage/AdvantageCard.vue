<script setup>
defineProps({
  cardNr: String,
  icon: String,
  title: String,
  text: String,
});
</script>
<template>
  <div
    class="bg-white border-desadarkgray border flex flex-col p-2 sm:p-4 w-32 h-32 sm:w-52 sm:h-52 lg:w-56 lg:h-56 xl:w-72 xl:h-72 drop-shadow-lg"
  >
    <p class="text-desadarkgray text-sm xl:text-lg text-end">{{ cardNr }}</p>
    <div class="pt-0 md:pt-5 xl:pt-10 xl:px-2">
      <span
        class="text-desalightgreen text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl"
        ><i :class="icon"></i
      ></span>
      <p
        class="text-desalightgreen leading-none text-sm sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl font-semibold"
      >
        {{ title }}
      </p>
      <p
        class="text-desadarkgray leading-none text-sm sm:text-lg md:text-lg lg:text-xl xl:text-2xl"
      >
        {{ text }}
      </p>
    </div>
  </div>
</template>
<style scoped></style>
