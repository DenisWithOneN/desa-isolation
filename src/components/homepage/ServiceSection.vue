<script setup>
import FillButton from "../general/FillButton.vue";
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
    <div class="grid grid-cols-2">
      <div v-for="i in 4" :key="index" class="bg-desagray h-32 w-32"></div>
    </div>
  </section>
</template>
<style scoped></style>
