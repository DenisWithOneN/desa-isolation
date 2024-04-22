<script setup>
import Definition from "./Definition.vue";
</script>
<template>
  <section class="bg-desadarkgreen py-24">
    <div class="container mx-auto px-10 flex flex-col items-center">
      <span class="flex flex-col items-center gap-3">
        <h2
          class="text-white text-center text-3xl uppercase font-black sm:text-4xl md:text-5xl xl:text-6xl"
        >
          ce înseamnă izolarea<br />
          cu spumă poliuretanică?
        </h2>
        <div class="bg-desalime w-52 h-1 lg:w-96"></div>
      </span>

      <div
        class="flex flex-col w-full gap-10 md:gap-0 justify-around my-24 md:flex-row"
      >
        <Definition
          :icon="`bi bi-thermometer-low`"
          :definition="`Eficiență termică superioară`"
          :text="`Izolarea cu spumă poliuretanică reduce pierderile de căldură, asigurând confort termic și economisind energie.`"
        />
        <Definition
          :icon="`bi bi-shield-check`"
          :definition="`Economie și siguranță`"
          :text="`Spuma poliuretanică creează o barieră etanșă împotriva infiltrării de apă și asigură protecția structurii împotriva deteriorării și a infiltrațiilor.`"
        />
        <Definition
          :icon="`bi bi-noise-reduction`"
          :definition="`Absorbție fonoizolantă`"
          :text="` Izolarea cu spumă poliuretanică reduce zgomotul din exterior și contribuie la crearea unui mediu mai liniștit și confortabil în interior.`"
        />
      </div>
    </div>
  </section>
</template>
<style scoped></style>
