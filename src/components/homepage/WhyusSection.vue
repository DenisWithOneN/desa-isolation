<script setup>
import WhyusCard from "./WhyusCard.vue";
import WhyusReviewCard from "./WhyusReviewCard.vue";
</script>
<template>
  <section class="bg-desadarkgreen py-24">
    <div class="flex flex-col items-center gap-10">
      <div class="flex flex-col items-center gap-2">
        <h2 class="text-white text-sm uppercase lg:text-md">
          alegerea ta conteaza
        </h2>
        <div class="bg-desalightgreen w-32 h-1" />
        <h2
          class="text-white text-2xl text-center font-black uppercase sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          de ce<br />desa isolation?
        </h2>
      </div>

      <p class="text-white">garantam:</p>
      <div class="grid md:grid-cols-3 lg:grid-cols-2 gap-5">
        <WhyusCard />
        <WhyusCard />
        <WhyusCard />
        <WhyusCard />
        <WhyusCard />
        <WhyusCard />
      </div>
      <WhyusReviewCard />
    </div>
  </section>
</template>
<style scoped></style>
