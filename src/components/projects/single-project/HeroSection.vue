<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const projectID = route.params.id;
</script>
<template>
  <p>project id: {{ projectID }}</p>
</template>
<style scoped></style>
