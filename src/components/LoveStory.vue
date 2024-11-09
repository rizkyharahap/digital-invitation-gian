<script setup lang="ts">
import IcArrowLeft from "@/assets/icons/ic-arrow-left.svg";
import IcArrowRight from "@/assets/icons/ic-arrow-right.svg";
import ImgGalery1JPG from "@/assets/images/galery-1.jpg";
import ImgGalery2JPG from "@/assets/images/galery-2.jpg";
import ImgGalery3JPG from "@/assets/images/galery-3.jpg";
import ImgGalery4JPG from "@/assets/images/galery-4.jpg";
import ImgGalery1WEBP from "@/assets/images/galery-1.webp";
import ImgGalery2WEBP from "@/assets/images/galery-2.webp";
import ImgGalery3WEBP from "@/assets/images/galery-3.webp";
import ImgGalery4WEBP from "@/assets/images/galery-4.webp";
import ImgGalery1AVIF from "@/assets/images/galery-1.avif";
import ImgGalery2AVIF from "@/assets/images/galery-2.avif";
import ImgGalery3AVIF from "@/assets/images/galery-3.avif";
import ImgGalery4AVIF from "@/assets/images/galery-4.avif";

import { ref } from "vue";

const activeIdx = ref(0);

const GALERIES = [
  {
    imgUrl: {
      jpg: new URL(ImgGalery1JPG, import.meta.url).href,
      webp: new URL(ImgGalery1WEBP, import.meta.url).href,
      afiv: new URL(ImgGalery1AVIF, import.meta.url).href,
    },
    year: 2019,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget lectus ex.",
  },
  {
    imgUrl: {
      jpg: new URL(ImgGalery2JPG, import.meta.url).href,
      webp: new URL(ImgGalery2WEBP, import.meta.url).href,
      afiv: new URL(ImgGalery2AVIF, import.meta.url).href,
    },
    year: 2020,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget lectus ex.",
  },
  {
    imgUrl: {
      jpg: new URL(ImgGalery3JPG, import.meta.url).href,
      webp: new URL(ImgGalery3WEBP, import.meta.url).href,
      afiv: new URL(ImgGalery3AVIF, import.meta.url).href,
    },
    year: 2022,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget lectus ex.",
  },
  {
    imgUrl: {
      jpg: new URL(ImgGalery4JPG, import.meta.url).href,
      webp: new URL(ImgGalery4WEBP, import.meta.url).href,
      afiv: new URL(ImgGalery4AVIF, import.meta.url).href,
    },
    year: 2024,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget lectus ex.",
  },
];
</script>

<template>
  <div class="bg-cream px-5 py-[60px] text-center">
    <h2 class="font-carattere reveal mb-10 text-[2.75rem] leading-none">Our Love Story</h2>

    <TransitionGroup name="galeries" tag="div" class="reveal relative mb-6 h-[470px] w-full">
      <template v-for="(galery, idx) in GALERIES" :key="galery.imgUrl">
        <div v-show="activeIdx === idx" class="absolute bottom-0 left-0 right-0 top-0">
          <figure class="relative mb-10 h-[350px] w-full overflow-hidden rounded-2xl">
            <picture>
              <source type="image/avif" :srcset="galery.imgUrl.afiv" />
              <source type="image/webp" :srcset="galery.imgUrl.webp" />
              <img
                width="100%"
                height="100%"
                class="absolute bottom-0 top-0 h-full object-cover object-center"
                loading="lazy"
                :alt="galery.year.toString()"
                :src="galery.imgUrl.jpg"
              />
            </picture>
          </figure>

          <div class="flex flex-col gap-2">
            <strong class="text-2xl leading-6"> {{ galery.year }} </strong>

            <p class="text-sm">
              {{ galery.description }}
            </p>
          </div>
        </div>
      </template>
    </TransitionGroup>

    <div class="reveal flex w-full items-center justify-between gap-4">
      <button
        type="button"
        class="focus:ring-blue-300 rounded-xl border border-blue p-3 text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:border-[#B3B3B3] disabled:bg-[#E7E6E6] disabled:text-[#B3B3B3]"
        @click="activeIdx -= 1"
        :disabled="activeIdx <= 0"
      >
        <IcArrowLeft />
      </button>

      <div class="flex items-center gap-2">
        <div
          v-for="(galery, idx) in GALERIES"
          :key="galery.year"
          class="h-2 w-2 rounded-full transition-colors duration-300"
          :class="activeIdx === idx ? 'bg-blue' : 'bg-green bg-opacity-25'"
        ></div>
      </div>

      <button
        type="button"
        class="focus:ring-blue-300 rounded-xl border border-blue p-3 text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:border-[#B3B3B3] disabled:bg-[#E7E6E6] disabled:text-[#B3B3B3]"
        @click="activeIdx += 1"
        :disabled="activeIdx >= 3"
      >
        <IcArrowRight />
      </button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.galeries-enter-active,
.galeries-leave-active {
  transition: opacity 0.3s ease;
}
.galeries-enter-from,
.galeries-leave-to {
  opacity: 0;
}
</style>
