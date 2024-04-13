<script setup>
import FillButton from "../general/FillButton.vue";
import ServiceCard from "./ServiceCard.vue";
</script>
<template>
  <section class="container mx-auto">
    <div class="flex flex-col items-center justify-center gap-3 mb-12 px-10">
      <div class="flex flex-col items-center gap-2">
        <p class="text-desadarkgray text-sm uppercase lg:text-xl">ce oferim</p>
        <div class="bg-desalightgreen w-12 h-1"></div>
      </div>

      <h2
        class="text-desadarkgreen text-2xl text-center font-black uppercase mb-2 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h2>

      <p
        class="text-desadarkgray text-center text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl"
      >
        Mauris urna orci, ultricies vel laoreet ac, vehicula sit amet justo.
        Integer eu lorem eget dolor bibendum lacinia a ac urna. Ut sed egestas
        urna. Phasellus pharetra, sem in consectetur sollicitudin, purus velit
        faucibus tellus eget dolor bibendum lacinia a ac urna. Ut sed egestas
        urna. Phasellus pharetra, sem in consectetur sollicitudin, purus velit
        faucibus tellus
      </p>
    </div>

    <div class="flex flex-col justify-center items-center gap-10">
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
        <ServiceCard
          :icon="`bi bi-dash-square`"
          :title="`Service One`"
          :text="`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellat,
      non sequi quisquam`"
        ></ServiceCard>
        <ServiceCard
          :icon="`bi bi-dash-square`"
          :title="`Service Two`"
          :text="`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellat,
      non sequi quisquam`"
        ></ServiceCard>
        <ServiceCard
          :icon="`bi bi-dash-square`"
          :title="`Service Three`"
          :text="`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellat,
      non sequi quisquam`"
        ></ServiceCard>
        <ServiceCard
          :icon="`bi bi-dash-square`"
          :title="`Service Four`"
          :text="`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellat,
      non sequi quisquam`"
        ></ServiceCard>
      </div>
      <FillButton text="servicii" route="/services"></FillButton>
    </div>
  </section>
</template>
<style scoped></style>
