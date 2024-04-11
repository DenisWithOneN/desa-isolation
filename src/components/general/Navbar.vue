<script setup></script>
<template>
  <section>
    <!-- mobile navbar -->
    <div class="bg-white flex md:hidden justify-between items-center p-2">
      <button class="text-desalightgreen text-2xl sm:text-3xl">
        <i class="bi bi-list"></i>
      </button>
      <img src="/public/images/logo-desa.png" alt="" class="h-8 sm:h-12" />
      <button class="text-desalightgreen text-xl sm:text-3xl">
        <i class="bi bi-chat-fill"></i>
      </button>
    </div>

    <!-- md+ navbar -->
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
