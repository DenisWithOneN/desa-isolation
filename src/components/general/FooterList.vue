<script setup>
defineProps({
  listHeader: String,
  listItem1: String,
  listItem2: String,
  listItem3: String,
});
</script>
<template>
  <ul class="flex flex-col gap-1">
    <header class="text-desalightgreen text-sm uppercase font-bold pb-4">
      {{ listHeader }}
    </header>
    <li class="text-desalightgray text-sm text-center uppercase md:text-start">
      {{ listItem1 }}
    </li>
    <li class="text-desalightgray text-sm text-center uppercase md:text-start">
      {{ listItem2 }}
    </li>
    <li class="text-desalightgray text-sm text-center uppercase md:text-start">
      {{ listItem3 }}
    </li>
  </ul>
</template>
<style scoped></style>
