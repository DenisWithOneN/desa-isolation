<script setup>
import Definition from "./Definition.vue";
</script>
<template>
  <section class="bg-desadarkgreen">
    <div class="container mx-auto flex flex-col items-center py-24 px-10">
      <span class="flex flex-col items-center gap-3 mb-10">
        <h1
          class="text-white text-center text-2xl uppercase font-black sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          ce este izolarea cu spuma poliuretanica?
        </h1>
        <div class="bg-desalime w-52 h-1 lg:w-96"></div>
      </span>

      <p
        class="text-white text-center max-w-4xl text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl"
      >
        Sed vitae odio in erat sollicitudin gravida. Morbi lobortis neque eget
        orci maximus eleifend. Vivamus odio ex, tincidunt vel efficitur vitae,
        semper non elit.
      </p>

      <div class="flex flex-col gap-10 my-24 md:flex-row">
        <Definition
          :definition="`definition 1`"
          :text="`lorem ipsum vitae odio in erat sollicitudin gravida. Morbi lobortis neque eget`"
        />
        <Definition
          :definition="`definition 1`"
          :text="`lorem ipsum orci maximus eleifend. Vivamus odio ex, tincidunt vel efficitur vitae,`"
        />
        <Definition
          :definition="`definition 1`"
          :text="`lorem ipsum semper non elit.`"
        />
      </div>
    </div>
  </section>
</template>
<style scoped></style>
