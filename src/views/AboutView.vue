<script setup>
import Navbar from "../components/general/Navbar.vue";
import HeroSection from "../components/about/HeroSection.vue";
import SecondSection from "../components/about/SecondSection.vue";
import ThirdSection from "../components/about/ThirdSection.vue";
import Footer from "../components/general/Footer.vue";
</script>
<template>
  <div class="flex flex-col justify-between ">
    <Navbar />
    <HeroSection />
    <SecondSection />
    <ThirdSection />
    <Footer />
  </div>
</template>
<style scoped></style>
