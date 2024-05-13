<script setup>
import FillButton from "../../components/general/FillButton.vue";
</script>
<template>
  <section class="py-14">
    <div class="container mx-auto flex flex-col justify-around items-center md:flex-row">
      <div class="bg-desalightgray w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 md:order-last xl:w-96 xl:h-96"></div>
      <div
        class="flex flex-col items-center justify-center text-center gap-5 mt-8 px-5 md:mt-0 md:items-start md:text-start"
      >
        <h2>lorem ipsum dolor sit amet</h2>
        <p class="max-w-sm lg:max-w-md xl:max-w-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi cumque
          cum dolore beatae dignissimos sunt, quas sint consequatur placeat
          numquam mollitia obcaecati tempore! Nisi facilis molestias blanditiis
          in rem eius?
        </p>
        <FillButton :text="`contact >`" :route="`/contact`"></FillButton>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
