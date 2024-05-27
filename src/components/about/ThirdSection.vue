<script setup>
import FillButton from ".././general/FillButton.vue";
</script>
<template>
  <section class="py-14">
    <div
      class="text-desadarkgreen container mx-auto flex flex-col text-center items-center max-w-xl px-5 gap-5"
    >
      <h2
        class="text-3xl font-black uppercase sm:text-4xl md:text-5xl xl:text-6xl"
      >
        Valorile Noastre
      </h2>
      <p class="text-sm md:text-base lg:text-lg xl:text-xl">
        La DESA Isolation, integritatea, inovația și satisfacția clientului sunt
        la baza activității noastre. Credem că fiecare proiect este o
        oportunitate de a demonstra angajamentul nostru față de calitate și
        sustenabilitate. Investim constant în tehnologii avansate și instruirea
        echipei pentru a oferi cele mai eficiente soluții de izolație
        disponibile pe piață.
      </p>
      <div class="flex flex-col items-center gap-5 md:flex-row">
        <FillButton :text="`proiecte`" :route="`/projects`" />
        <FillButton :text="`contact`" :route="`/contact`" />
      </div>
    </div>
  </section>
</template>
<style scoped></style>
