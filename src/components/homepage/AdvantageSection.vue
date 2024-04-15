<script setup>
import AdvantageCard from "../homepage/AdvantageCard.vue";
import FillButton from "../general/FillButton.vue";
</script>
<template>
  <section>
    <div class="container mx-auto py-24">
      <div class="flex flex-col items-center gap-5">
        <div class="flex flex-col items-center">
          <p class="text-desadarkgray text-sm uppercase lg:text-md">servicii</p>
          <div class="bg-desalightgreen w-12 h-1 mt-1 lg:w-14"></div>
        </div>
        <h2
          class="text-desadarkgreen text-2xl text-center font-black uppercase sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          avantajele spumei<br />
          poliuretanice
        </h2>
      </div>

      <div class="flex justify-center mt-14">
        <div class="grid grid-cols-2 place-items-center gap-5">
          <AdvantageCard />
          <AdvantageCard />
          <div class="hidden col-span-2">avantajele spumei poliuretanice</div>
          <AdvantageCard />
          <AdvantageCard />
          <AdvantageCard />
          <AdvantageCard />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
