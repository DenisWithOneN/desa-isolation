<script setup>
import ProjectCard from './ProjectCard.vue';
</script>
<template>
    <section class="pb-14">
        <div class="flex flex-wrap justify-center gap-5 px-8 lg:gap-16">
            <ProjectCard v-for="item in 3" :projectName="`project`" :route="`/`"/>
        </div>
    </section>
</template>
<style scoped></style>