<script setup></script>
<template>
  <section>
    <div class="bg-white flex justify-between mx-20 p-5">
      <div class="flex gap-5">
        <img src="/public/images/logo-desa.png" alt="" class="h-12" />
        <button><RouterLink to="/">acasa</RouterLink></button>
        <button><RouterLink to="/about">despre noi</RouterLink></button>
        <button><RouterLink to="/services">servicii</RouterLink></button>
        <button><RouterLink to="/projects">proiecte</RouterLink></button>
      </div>
      <button><RouterLink to="/contact">contact</RouterLink></button>
    </div>
  </section>
</template>
<style scoped></style>
