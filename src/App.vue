<script setup>
import { RouterView } from "vue-router";
import NavbarDesktop from "./components/general/NavbarDesktop.vue";
import NavbarMobile from "./components/general/NavbarMobile.vue";
</script>
<template>
  <body class="bg-gray-700">
    <NavbarDesktop />
    <NavbarMobile />
    <RouterView></RouterView>
  </body>
</template>
<style scoped></style>
