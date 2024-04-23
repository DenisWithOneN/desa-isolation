<script setup>
import WhyusCard from "@/components/homepage/WhyusCard.vue";
import WhyusReviewCard from "@/components/homepage/WhyusReviewCard.vue";
</script>
<template>
  <section class="bg-desadarkgreen py-24">
    <div class="container mx-auto flex flex-col items-center gap-10 px-10">
      <div class="flex flex-col items-center gap-2">
        <p class="text-white text-sm uppercase lg:text-md">
          alegerea ta conteaza
        </p>
        <div class="bg-desalightgreen w-32 h-1" />
        <h2
          class="text-white text-2xl text-center font-black uppercase sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          de ce<br />desa isolation?
        </h2>
      </div>

      <div
        class="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20"
      >
        <div class="grid md:grid-cols-3 lg:grid-cols-2 gap-5 place-items-start">
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
