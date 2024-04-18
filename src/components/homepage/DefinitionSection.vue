<script setup>
import Definition from "./Definition.vue";
</script>
<template>
  <section class="bg-desadarkgreen py-24">
    <div class="container mx-auto px-10 flex flex-col items-center">
      <span class="flex flex-col items-center gap-3 mb-10">
        <h2
          class="text-white text-center text-3xl uppercase font-black sm:text-4xl md:text-5xl xl:text-6xl"
        >
          ce este izolarea cu spuma<br />
          poliuretanica?
        </h2>
        <div class="bg-desalime w-52 h-1 lg:w-96"></div>
      </span>

      <p
        class="text-white text-center text-sm sm:text-md md:text-lg md:max-w-md lg:text-xl lg:max-w-lg xl:text-2xl xl:max-w-2xl 2xl:max-w-4xl"
      >
        Sed vitae odio in erat sollicitudin gravida. Morbi lobortis neque eget
        orci maximus eleifend. Vivamus odio ex, tincidunt vel efficitur vitae,
        semper non elit.
      </p>

      <div
        class="flex flex-col w-full gap-10 md:gap-0 justify-around my-24 md:flex-row"
      >
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
