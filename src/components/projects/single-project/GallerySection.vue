<script setup>
const images = [
  { url: "https://picsum.photos/200/300" },
  { url: "https://picsum.photos/200/400" },
];
</script>

<template>
  <section class="bg-desadarkgreen py-14">
    <div class="container mx-auto flex justify-center px-8">
      <div class="grid grid-cols-2 gap-5">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image.url"
          alt="Image"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
