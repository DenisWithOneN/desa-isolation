<script setup>
import FillButton from "../general/FillButton.vue";
import EmptyButton from "../general/EmptyButton.vue";
</script>
<template>
  <section class="container mx-auto">
    <div class="hero flex flex-col justify-center items-center gap-2 px-5">
      <p class="text-white text-center text-3xl font-black uppercase mb-2">
        put your motto here lorem ipsum
      </p>
      <FillButton text="despre noi"></FillButton>
      <EmptyButton text="contact"></EmptyButton>
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
