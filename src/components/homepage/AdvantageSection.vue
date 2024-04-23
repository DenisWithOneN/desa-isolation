<script setup>
import AdvantageCard from "@/components/homepage/AdvantageCard.vue";
import FillButton from "@/components/general/FillButton.vue";
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
          <AdvantageCard
            :cardNr="`01`"
            :icon="`bi bi-thermometer-sun`"
            :title="`Izolație`"
            :text="`termică excelentă`"
          />
          <AdvantageCard
            :cardNr="`02`"
            :icon="`bi bi-house-gear`"
            :title="`Eficiență `"
            :text="`energetică crescută`"
          />
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
          <AdvantageCard
            :cardNr="`03`"
            :icon="`bi bi-infinity`"
            :title="`Etanșeitatea`"
            :text="`și continuitatea acoperirii`"
          />
          <AdvantageCard
            :cardNr="`04`"
            :icon="`bi bi-shield`"
            :title="`Rezistența`"
            :text="`împotriva factorilor chimici`"
          />
          <AdvantageCard
            :cardNr="`05`"
            :icon="`bi bi-speedometer`"
            :title="`Montajul`"
            :text="`rapid și eficient`"
          />
          <AdvantageCard
            :cardNr="`06`"
            :icon="`bi bi-volume-mute`"
            :title="`Izolare`"
            :text="`fonică și confort`"
          />
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
