<script setup>
import WhyusCard from "../homepage/WhyusCard.vue";
import WhyusReviewCard from "../homepage/WhyusReviewCard.vue";
import LightSmallTitle from "../general/LightSmallTitle.vue";
</script>
<template>
  <section class="bg-desadarkgreen py-16">
    <div class="container mx-auto flex flex-col gap-10 px-10 lg:gap-5">
      <div class="flex flex-col items-center gap-2 lg:items-start">
        <LightSmallTitle :text="`alegerea ta`" />
        <h2
          class="text-white text-3xl text-center font-black uppercase sm:text-4xl md:text-5xl lg:text-start xl:text-6xl"
        >
          de ce<br />desa isolation?
        </h2>
      </div>

      <div class="flex flex-col items-center justify-between gap-10 lg:flex-row">
        <div class="grid sm:grid-cols-2   gap-5 place-items-start">
          <WhyusCard :text="`calitatea materialelor de izolare`" />
          <WhyusCard :text="`o bună realizare a izolațiilor`" />
          <WhyusCard :text="`calitatea serviciilor`" />
          <WhyusCard :text="`soluții rapide și eficiente`" />
          <WhyusCard :text="`îmbunătățirea constantă a serviciilor`" />
          <WhyusCard :text="`prioritizarea multumirii clientului`" />
        </div>
        <WhyusReviewCard />
      </div>
    </div>
  </section>
</template>
<style scoped></style>
