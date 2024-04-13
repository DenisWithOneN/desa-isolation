<script setup>
import FillButton from "../general/FillButton.vue";
import ServiceCard from "./ServiceCard.vue";
</script>
<template>
  <section>
    <p>ce oferim</p>
    <div>line</div>
    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
    <p>
      Mauris urna orci, ultricies vel laoreet ac, vehicula sit amet justo.
      Integer eu lorem eget dolor bibendum lacinia a ac urna. Ut sed egestas
      urna. Phasellus pharetra, sem in consectetur sollicitudin, purus velit
      faucibus tellus eget dolor bibendum lacinia a ac urna. Ut sed egestas
      urna. Phasellus pharetra, sem in consectetur sollicitudin, purus velit
      faucibus tellus
    </p>
    <FillButton text="servicii" route="/services"></FillButton>
    <div class="grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2">
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
  </section>
</template>
<style scoped></style>
