<script setup>
import ContactCard from "./ContactCard.vue";
import FillButton from "../general/FillButton.vue";
import SmallTitle from "../general/SmallTitle.vue";
</script>
<template>
  <section class="py-16">
    <div
      class="container mx-auto flex flex-col items-center justify-around gap-5 lg:flex-row"
    >
      <div
        id="right-content"
        class="flex flex-col items-center gap-3 lg:order-last lg:items-start"
      >
        <SmallTitle :text="`contact`" />

        <h2
          class="text-desadarkgreen text-3xl text-center font-black uppercase mb-2 sm:text-4xl md:text-5xl lg:text-start xl:text-6xl"
        >
          unde ne găsești?
        </h2>
        <p
          class="text-desadarkgray text-center text-sm md:text-base lg:text-lg lg:text-start xl:text-xl"
        >
          Strada Florilor nr. 23A,<br />Bucuresti, Sector 3, Romania
        </p>
        <div class="flex flex-col gap-5 md:flex-row mt-5">
          <ContactCard
            :icon="`bi bi-pencil-fill`"
            :title="`Scrie-ne`"
            :text="`desaisolation@gmail.com`"
          />
          <ContactCard
            :icon="`bi bi-telephone-fill`"
            :title="`Sună-ne`"
            :text="`+40 723 456`"
          />
        </div>

        <FillButton
          :text="`contact >`"
          :route="`/contact`"
          class="hidden lg:flex mt-3"
        ></FillButton>
      </div>

      <div id="left-content" class="flex flex-col items-center mt-10">
        <div
          class="bg-desadarkgreen w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 xl:w-100 xl:h-98"
        ></div>
        <FillButton
          :text="`contact >`"
          :route="`/contact`"
          class="-mt-5 lg:hidden"
        ></FillButton>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
