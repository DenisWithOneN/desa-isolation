<script setup>
import FillButton from "../general/FillButton.vue";
import ServiceCard from "./ServiceCard.vue";
</script>
<template>
  <section class="container mx-auto">
    <div class="block lg:flex">
      <div
        class="flex flex-col items-center justify-around gap-3 mb-12 px-10 lg:order-last lg:items-start lg:w-1/2"
      >
        <div class="flex flex-col items-center lg:items-start">
          <p class="text-desadarkgray text-sm uppercase lg:text-md">
            ce oferim
          </p>
          <div class="bg-desalightgreen w-12 h-1 mt-1 lg:w-14"></div>
        </div>

        <h2
          class="text-desadarkgreen text-2xl text-center font-black uppercase mb-2 sm:text-4xl md:text-5xl lg:text-6xl lg:text-start xl:text-7xl"
        >
          Lorem ipsum dolor sit amet
        </h2>

        <p
          class="text-desadarkgray text-center text-sm sm:text-md md:text-lg lg:text-xl lg:text-start xl:text-2xl"
        >
          Mauris urna orci, ultricies vel laoreet ac, vehicula sit amet justo.
          Integer eu lorem eget dolor bibendum lacinia a ac urna. Ut sed egestas
          urna. Phasellus pharetra, sem in consectetur sollicitudin, purus velit
          faucibus tellus eget dolor bibendum lacinia a ac urna. Ut sed egestas
          urna. Phasellus pharetra, sem in consectetur sollicitudin, purus velit
          faucibus tellus
        </p>
        <FillButton
          text="servicii"
          route="/services"
          class="hidden lg:block"
        ></FillButton>
      </div>

      <div
        class="flex flex-col justify-center items-center gap-10 lg:w-1/2 lg:items-end"
      >
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
        <FillButton
          text="servicii"
          route="/services"
          class="block lg:hidden"
        ></FillButton>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
