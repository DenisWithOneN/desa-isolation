<script setup>
import SmallTitle from "../general/SmallTitle.vue";
</script>
<template>
  <section class="bg-desalightgray py-16">
    <div
      class="container mx-auto flex flex-col justify-around items-center px-10 lg:flex-row lg:gap-10"
    >
      <div
        class="flex flex-col items-center justify-center gap-5 mb-10 lg:items-start lg:w-1/2"
      >
        <SmallTitle :text="`despre noi`" />
        <h2
          class="text-desadarkgreen text-3xl text-center font-black uppercase mb-2 sm:text-4xl md:text-5xl lg:text-start xl:text-6xl"
        >
          cine suntem?
        </h2>
        <p
          class="text-desadarkgray text-center text-sm max-w-4xl md:text-base lg:text-lg lg:text-start xl:text-xl"
        >
          Cu o experiență de peste 25 de ani în domeniul izolațiilor,
          <a class="text-desalightgreen font-semibold">Desa Isolation</a>
          se remarcă ca fiind un lider de încredere în industrie. Angajamentul
          nostru față de
          <a class="text-desalightgreen font-semibold">calitate și excelență</a>
          este reflectat în fiecare proiect pe care-l abordăm. <br /><a
            class="text-desalightgreen font-semibold"
            >Echipa noastră </a
          >dedicată de profesioniști experimentați este pregătită să ofere
          soluții personalizate și inovatoare pentru nevoile de izolare ale
          clienților noștri. <br />Cu o abordare orientată către
          <a class="text-desalightgreen font-semibold"
            >satisfacerea clienților</a
          >
          și o pasiune pentru perfecțiune, suntem aici pentru a vă asigura că
          obțineți rezultatele dorite, fie că este vorba despre izolarea unei
          locuințe, a unui spațiu industrial sau a altor tipuri de construcții.
        </p>  
      </div>

      <div class="flex justify-center">
        <img
          src="/images/about-image.png"
          alt="about image"
          class="sm:h-96 xl:h-full"
        />
      </div>
    </div>
  </section>
</template>
<style scoped></style>
