<script setup>
const contactMethods = [
  { icon: "bi bi-phone-fill", text: "+40 071 234 567" },
  { icon: "bi bi-envelope-fill", text: "desaisolation@gmail.com" },
  {
    icon: "bi bi-geo-alt-fill",
    text: "Bihor, Oradea, Strada John Avenue, nr 53",
  },
];
</script>
<template>
  <div
    class="bg-desadarkgreen flex flex-col justify-evenly p-3 w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80"
  >
    <h3
      class="text-desalightgreen text-2xl font-black uppercase md:text-3xl xl:text-4xl"
    >
      date de contact
    </h3>
    <div
      v-for="(method, index) in contactMethods"
      :key="index"
      class="text-white flex items-center gap-3"
    >
      <div
        class="bg-desalightgreen flex items-center justify-center rounded-full px-3 py-2"
      >
        <i :class="method.icon" />
      </div>
      <p class="text-sm md:text-base lg:text-lg xl:text-xl">{{ method.text }}</p>
    </div>
  </div>
</template>
<style scoped></style>
