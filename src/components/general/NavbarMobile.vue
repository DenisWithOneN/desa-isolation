<script setup>
import { ref, watch } from "vue";

const showNav = ref(false);

function closeNavBar() {
  showNav.value = !showNav.value;
}

watch(showNav, (value) => {
  if (value) {
    document.documentElement.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflow = "auto";
    
  }
});


</script>
<template>
  <section>
    <!-- navbar -->
    <div class="bg-white  flex md:hidden justify-between items-center p-2">
      <button
        class="text-desalightgreen text-2xl sm:text-3xl"
        @click="closeNavBar()"
      >
        <i class="bi bi-list"></i>
      </button>
      <img src="/images/logo-desa.png" alt="" class="h-8 sm:h-12" />
      <button class="text-desalightgreen text-xl sm:text-3xl">
        <i class="bi bi-chat-fill"></i>
      </button>
    </div>

    <!-- navigation links -->
      <transition name="slide">
        <div
        v-if="showNav"
        class="bg-white  w-full fixed top-0 left-0 flex flex-col items-center py-10 "
      >
        <button @click="closeNavBar()" class="text-desadarkgreen text-4xl font-black">
          <i class="bi bi-x"></i>
        </button>
        <div class="flex flex-col gap-5 pt-5">
          <button
            @click="closeNavBar()"
            class="text-desadarkgreen uppercase font-semibold"
          >
            <RouterLink to="/">acasa</RouterLink>
          </button>
          <button
            @click="closeNavBar()"
            class="text-desadarkgreen uppercase font-semibold"
          >
            <RouterLink to="/about">despre noi</RouterLink>
          </button>
          <button
            @click="closeNavBar()"
            class="text-desadarkgreen uppercase font-semibold"
          >
            <RouterLink to="/services">servicii</RouterLink>
          </button>
          <button
            @click="closeNavBar()"
            class="text-desadarkgreen uppercase font-semibold"
          >
            <RouterLink to="/projects">proiecte</RouterLink>
          </button>
          <button
            @click="closeNavBar()"
            class="text-desadarkgreen uppercase font-semibold"
          >
            <RouterLink to="/contact">contact</RouterLink>
          </button>
        </div>
      </div>
      </transition>
  </section>
</template>
<style scoped>

.slide-enter-active, .slide-leave-active {
  transition: all .3s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateY(-100%);
}
</style>
