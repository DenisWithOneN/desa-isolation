<script setup>
import FooterList from "../general/FooterList.vue";
</script>
<template>
  <section class="bg-desablack py-24">
    <div
      class="container mx-auto flex flex-col lg:flex-row lg:justify-around items-center gap-5"
    >
      <img
        src="/images/logo-desa.png"
        alt="logo"
        class="h-32 sm:h-36 md:h-48 lg:h-52 2xl:h-60"
      />
      <div class="flex flex-col md:flex-row gap-10">
        <FooterList
          :listHeader="`companie`"
          :listItem1="`despre noi`"
          :listItem2="`servicii`"
          :listItem3="`proiecte`"
        />
        <FooterList
          :listHeader="`legal`"
          :listItem1="``"
          :listItem2="``"
          :listItem3="``"
        />
        <FooterList
          :listHeader="`suport`"
          :listItem1="`contact`"
          :listItem2="``"
          :listItem3="``"
        />
      </div>
      <hr />
    </div>
  </section>
</template>
<style scoped></style>
