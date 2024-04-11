<script setup></script>
<template>
  <section>
    <div class="bg-white hidden md:flex justify-between items-center mx-20 p-5">
      <div class="flex items-center gap-5">
        <img src="/public/images/logo-desa.png" alt="" class="h-12" />
        <button class="text-desalightgreen uppercase font-semibold">
          <RouterLink to="/">acasa</RouterLink>
        </button>
        <button class="text-desalightgreen uppercase font-semibold">
          <RouterLink to="/about">despre noi</RouterLink>
        </button>
        <button class="text-desalightgreen uppercase font-semibold">
          <RouterLink to="/services">servicii</RouterLink>
        </button>
        <button class="text-desalightgreen uppercase font-semibold">
          <RouterLink to="/projects">proiecte</RouterLink>
        </button>
      </div>
      <button class="text-desadarkgreen uppercase font-semibold">
        <RouterLink to="/contact">contact</RouterLink>
      </button>
    </div>
  </section>
</template>
<style scoped></style>
