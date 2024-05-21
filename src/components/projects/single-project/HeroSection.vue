<script setup>
import SmallTitle from "../../general/SmallTitle.vue";
import FillButton from "../../general/FillButton.vue"
import { useRoute } from "vue-router";
const route = useRoute();
const projectID = route.params.id;
</script>
<template>
  <section class="py-14">
    <div class="flex flex-col text-center justify-around items-center gap-10 px-8 lg:flex-row lg:text-start lg:gap-0">
      <div
        class="bg-desalightgray w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:order-last xl:w-96 xl:h-96"
      />
      <div class="flex flex-col items-center gap-3 lg:items-start">
        <SmallTitle :text="`despre proiect`" />
        <h1
          class="text-desalightgreen text-3xl font-black uppercase sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          project title
        </h1>
        <p
          class="text-desadarkgray text-sm max-w-xl md:text-base lg:text-lg xl:text-xl"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint dolorum
          modi asperiores, ad quas aspernatur, ipsam eius odio esse maiores ea,
          mollitia excepturi harum voluptatem eveniet cum laborum rerum ex.
        </p>
        <FillButton :text="`contact`" :route="`/contact`"/>
      </div>
      
    </div>
  </section>
</template>
<style scoped></style>
