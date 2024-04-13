<script setup></script>
<template>
  <section class="bg-desalightgray">
    <div
      class="container mx-auto flex flex-col justify-center px-10 py-20 lg:flex-row lg:gap-10"
    >
      <div
        class="flex flex-col items-center justify-center gap-5 mb-10 lg:items-start lg:w-1/2"
      >
        <span class="flex flex-col items-center lg:items-start">
          <p class="text-desadarkgray text-sm uppercase lg:text-md">
            despre noi
          </p>
          <div class="bg-desalightgreen w-12 h-1 mt-1 lg:w-14"></div>
        </span>
        <h2
          class="text-desadarkgreen text-2xl text-center font-black uppercase mb-2 sm:text-4xl md:text-5xl lg:text-6xl lg:text-start xl:text-7xl"
        >
          cine suntem?
        </h2>
        <p
          class="text-desadarkgray text-center text-sm max-w-4xl sm:text-md md:text-lg lg:text-xl lg:text-start xl:text-2xl"
        >
          Cras mollis gravida lorem quis suscipit. Vivamus eleifend ipsum vel
          mollis porta. Nam et velit non velit mattis pretium. Sed dolor magna,
          vulputate nec porta nec, dapibus eget orci. Nam id tellus in erat
          eleifend porttitor vel sit amet ligula. Maecenas at lectus lacus.
          Mauris lobortis vel tellus sed interdum.
        </p>
      </div>

      <div class="flex justify-center">
        <img
          src="/public/images/about-image.png"
          alt="about image"
          class="sm:h-96 lg:h-full"
        />
      </div>
    </div>
  </section>
</template>
<style scoped></style>
