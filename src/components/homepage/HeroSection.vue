<script setup>
import FillButton from "../general/FillButton.vue";
import EmptyButton from "../general/EmptyButton.vue";
</script>
<template>
  <section>
    <div
      class="hero flex flex-col lg:flex-row justify-center lg:justify-end items-center gap-2 lg:gap-5 px-5"
    >
      <div class="flex flex-col items-center lg:items-end">
        <p class="text-white text-center text-3xl font-black uppercase mb-2">
          put your motto here lorem ipsum
        </p>

        <div class="flex flex-col gap-3 md:flex-row">
          <FillButton text="despre noi" route="/about"></FillButton>
          <EmptyButton text="contact" route="/contact"></EmptyButton>
        </div>
      </div>

      <div class="bg-desalightgreen hidden lg:block w-2 h-32"></div>
    </div>
  </section>
</template>
<style scoped>
.hero {
  background-image: url("public/images/DSC04976.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  aspect-ratio: 5/4;
}
</style>
