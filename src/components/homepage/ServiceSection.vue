<script setup>
import FillButton from "../general/FillButton.vue";
import ServiceCard from "./ServiceCard.vue";
</script>
<template>
  <section class="py-24">
    <div class="container mx-auto block lg:flex lg:px-10">
      <div
        class="flex flex-col items-center justify-around gap-3 mb-12 px-10 lg:items-start lg:order-last lg:w-1/2"
      >
        <div class="flex flex-col items-center lg:items-start">
          <p class="text-desadarkgray text-sm uppercase lg:text-md">
            ce oferim
          </p>
          <div class="bg-desalightgreen w-12 h-1 mt-1 lg:w-14"></div>
        </div>

        <h2
          class="text-desadarkgreen text-3xl text-center font-black uppercase mb-2 sm:text-4xl md:text-5xl lg:text-5xl lg:text-start xl:text-6xl 2xl:text-6xl"
        >
          alege serviciul potrivit pentru tine
        </h2>

        <p
          class="text-desadarkgray text-center text-sm sm:text-md md:text-lg lg:text-lg lg:text-start xl:text-xl 2xl:text-2xl"
        >
          Cu o gamă completă de soluții de izolare cu spumă poliuretanică,
          suntem aici pentru a vă oferi confortul și protecția de care aveți
          nevoie. De la izolarea exterioară și interioară a clădirilor, inclusiv
          spații industriale, până la hidroizolații și fonoizolații
          specializate, ne asigurăm că fiecare proiect este realizat cu cea mai
          mare atenție și expertiză.
        </p>
        <FillButton
          text="servicii >"
          route="/services"
          class="hidden lg:block"
        ></FillButton>
      </div>

      <div class="flex flex-col justify-center items-center gap-10 lg:w-1/2">
        <img src="/svg/ellipse1.svg" alt="ellipse" class="absolute" />
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <ServiceCard
            :icon="`bi bi-dash-square`"
            :title="`Izolare cu spumă poliuretanica`"
            :text="`Spuma poliuretanică se evidențiază ca fiind cea mai practică și performantă soluție de izolare disponibilă pe piață.`"
          ></ServiceCard>
          <ServiceCard
            :icon="`bi bi-dash-square-dotted`"
            :title="`Servicii de hidroizolații`"
            :text="`Pentru hidroizolații, folosim atât spumă poliuretanică obișnuită, cât și variantele de cea mai bună calitate disponibile pe piață.`"
          ></ServiceCard>
          <ServiceCard
            :icon="`bi bi-slash-square`"
            :title="`Servicii de fonoizolatii cu spuma`"
            :text="`Spuma poliuretanică SOC010 cu celule deschise este o soluție ideală pentru izolația termică și fonoabsorbția, fiind ușor de aplicat și versatilă.`"
          ></ServiceCard>
          <ServiceCard
            :icon="`bi bi-dash-square-fill`"
            :title="`Servicii izolatie fatade ventilate`"
            :text="`Cu tehnologia noastră pentru fatade ventilate, veți constata îmbunătățiri semnificative în ceea ce privește confortul termic și reducerea zgomotului`"
          ></ServiceCard>
        </div>
        <FillButton
          text="servicii"
          route="/services"
          class="block lg:hidden"
        ></FillButton>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
