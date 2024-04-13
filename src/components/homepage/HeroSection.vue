<script setup>
import FillButton from "../general/FillButton.vue";
import EmptyButton from "../general/EmptyButton.vue";
</script>
<template>
  <section>
    <div
      class="hero flex flex-col justify-center items-center gap-2 px-5 lg:flex-row lg:gap-5 lg:justify-end"
    >
      <div class="flex flex-col items-center lg:items-end">
        <h1
          class="text-white text-center text-2xl font-black uppercase mb-2 sm:text-4xl md:text-5xl lg:text-6xl lg:text-end xl:text-7xl"
        >
          put your motto here<br />
          lorem ipsum
        </h1>

        <div class="flex flex-col gap-3 md:flex-row">
          <FillButton text="despre noi" route="/about"></FillButton>
          <EmptyButton text="contact" route="/contact"></EmptyButton>
        </div>
      </div>

      <div class="bg-desalightgreen hidden w-2 h-52 xl:h-60 lg:block"></div>
    </div>
  </section>
</template>
<style scoped>
.hero {
  background-image: url("public/images/DSC04976.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 40rem;
}

@media (max-width: 640px) {
  .hero {
    min-height: 20rem;
  }
}
</style>
