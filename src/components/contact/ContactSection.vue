<script setup>
import ContactCard from "./ContactCard.vue";
import Form from "./Form.vue";
</script>
<template>
  <section class="bg-desalightgray py-14">
    <div class="flex flex-col items-center gap-5">
      <div class="flex flex-col gap-5">
        <img src="https://picsum.photos/200/300" alt="image" class="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80" />
        <ContactCard />
      </div>
      <Form />
    </div>
  </section>
</template>
<style scoped></style>
