<script setup>
const images = [
  { url: "https://picsum.photos/200/300" },
  { url: "https://picsum.photos/200/400" },
  { url: "https://picsum.photos/200/400" },
  { url: "https://picsum.photos/200/400" },
  { url: "https://picsum.photos/200/400" },
  { url: "https://picsum.photos/200/400" },
];
</script>

<template>
  <section class="bg-desadarkgreen py-14">
    <div class="container mx-auto flex justify-center px-8">
      <div class="grid grid-cols-2 gap-5 md:grid-cols-3">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image.url"
          alt="Image"
          class="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
