<script setup>
import ProjectCard from "./ProjectCard.vue";
import { ref } from "vue";
const projects = ref([
  {
    id: 1,
    name: "Project #1",
  },
  {
    id: 2,
    name: "Project #2",
  },
  {
    id: 3,
    name: "Project #3",
  },
]);
</script>
<template>
  <section class="pb-14">
    <div class="flex flex-wrap justify-center gap-5 px-8 lg:gap-16">
      <ProjectCard
        v-for="project in projects"
        :projectName="`project`"
        :route="`/projects/${project.id}`"
      />
    </div>
  </section>
</template>
<style scoped></style>
