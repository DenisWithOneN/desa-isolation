<script setup>
import FooterList from "./FooterList.vue";
</script>
<template>
  <section class="bg-desablack py-24">
    <div
      class="container mx-auto flex flex-col lg:flex-row lg:justify-around items-center gap-5"
    >
      <img
        src="/public/images/logo-desa.png"
        alt="logo"
        class="h-32 sm:h-36 md:h-48 lg:h-52 2xl:h-60"
      />
      <div class="flex flex-col md:flex-row gap-10">
        <FooterList />
        <FooterList />
        <FooterList />
      </div>
      <hr />
    </div>
  </section>
</template>
<style scoped></style>
