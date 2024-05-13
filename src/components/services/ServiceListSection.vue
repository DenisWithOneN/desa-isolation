<script setup>
import ServiceCard from "../../components/homepage/AdvantageCard.vue";
</script>
<template>
  <section class="bg-desalightgray py-16">
    <div class="flex justify-center items-center">
      <div class="grid grid-cols-2 place-items-center gap-1 lg:grid-rows-2 lg:grid-cols-4 lg:gap-0 xl:gap-5">
        <ServiceCard
          v-for="i in 8"
          :icon="`bi bi-pencil`"
          :title="`service one`"
          :text="`Lorem ipsum dolor sit amet, `"
        />
      </div>
    </div>
  </section>
</template>
<style scoped></style>
