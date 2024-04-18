<script setup>
import AdvantageCard from "../homepage/AdvantageCard.vue";
import FillButton from "../general/FillButton.vue";
</script>
<template>
  <section class="py-24">
    <div class="container mx-auto flex flex-col items-center gap-10 lg:px-10">
      <div class="flex flex-col items-center gap-5 lg:hidden">
        <div class="flex flex-col items-center">
          <p class="text-desadarkgray text-sm uppercase lg:text-md">servicii</p>
          <div class="bg-desalightgreen w-12 h-1 mt-1 lg:w-14"></div>
        </div>
        <h2
          class="text-desadarkgreen text-3xl text-center font-black uppercase sm:text-4xl md:text-5xl"
        >
          avantajele spumei<br />
          poliuretanice
        </h2>
      </div>

      <div class="flex flex-col items-center justify-center">
        <div
          class="grid grid-cols-2 place-items-stretch gap-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2"
        >
          <AdvantageCard />
          <AdvantageCard />
          <div
            class="hidden col-span-2 w-full h-full flex-col items-end gap-5 lg:flex"
          >
            <div class="flex flex-col items-end">
              <p class="text-desadarkgray text-sm uppercase xl:text-lg">
                servicii
              </p>
              <div class="bg-desalightgreen w-12 h-1 mt-1 lg:w-14" />
            </div>
            <h2
              class="text-desadarkgreen text-4xl font-black text-end uppercase xl:text-5xl 2xl:text-6xl"
            >
              avantajele spumei<br />
              poliuretanice
            </h2>
            <FillButton
              :text="`servicii`"
              :route="`/services`"
              class="hidden lg:block"
            ></FillButton>
          </div>
          <AdvantageCard />
          <AdvantageCard />
          <AdvantageCard />
          <AdvantageCard />
        </div>
      </div>
      <FillButton
        :text="`servicii`"
        :route="`/services`"
        class="lg:hidden"
      ></FillButton>
    </div>
  </section>
</template>
<style scoped></style>
