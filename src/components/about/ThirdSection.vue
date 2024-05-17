<script setup>
import FillButton from ".././general/FillButton.vue";
</script>
<template>
  <section class="py-14">
    <div
      class="container mx-auto flex flex-col text-center items-center px-8 gap-5"
    >
      <h2
        class="text-desadarkgreen text-3xl font-black uppercase max-w-xl sm:text-4xl md:text-5xl xl:text-6xl"
      >
        lorem ipsum dolor sit amet consectetur
      </h2>
      <p
        class="text-desadarkgreen text-sm max-w-xl md:text-base lg:text-lg xl:text-xl"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem numquam ex
        aliquid debitis cum saepe totam dolores voluptate dolorum, amet quia
        alias iste quam, hic dolore animi nisi? Suscipit, enim?
      </p>
      <div class="flex flex-col items-center gap-5 md:flex-row">
        <FillButton :text="`proiecte`" :route="`/projects`" />
        <FillButton :text="`contact`" :route="`/contact`" />
      </div>
    </div>
  </section>
</template>
<style scoped></style>
