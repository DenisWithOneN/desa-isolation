<script setup>
import ProjectCard from "../homepage/ProjectCard.vue";
</script>
<template>
  <section class="bg-desalightgray py-24">
    <div class="container mx-auto flex flex-col items-center gap-10 px-10">
      <div class="flex flex-col items-center gap-2">
        <h2
          class="text-desadarkgreen text-2xl text-center font-black uppercase sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          proiecte
        </h2>
        <div class="bg-desalightgreen w-24 h-1" />
      </div>

      <div
        class="flex flex-col gap-14 md:flex-row md:flex-wrap md:justify-around w-full"
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  </section>
</template>
<style scoped></style>
