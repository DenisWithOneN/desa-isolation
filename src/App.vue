<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/general/Navbar.vue";
</script>
<template>
  <body class="bg-gray-700">
    <Navbar />
    <RouterView></RouterView>
  </body>
</template>
<style scoped></style>
