<script setup lang="ts">
import IcArrowLeft from "@/assets/icons/ic-arrow-left.svg";
import IcArrowRight from "@/assets/icons/ic-arrow-right.svg";
import ImgGallery1JPG from "@/assets/images/gallery-1.jpg";
import ImgGallery2JPG from "@/assets/images/gallery-2.jpg";
import ImgGallery3JPG from "@/assets/images/gallery-3.jpg";
import ImgGallery4JPG from "@/assets/images/gallery-4.jpg";
import ImgGallery1WEBP from "@/assets/images/gallery-1.webp";
import ImgGallery2WEBP from "@/assets/images/gallery-2.webp";
import ImgGallery3WEBP from "@/assets/images/gallery-3.webp";
import ImgGallery4WEBP from "@/assets/images/gallery-4.webp";
import ImgGallery1AVIF from "@/assets/images/gallery-1.avif";
import ImgGallery2AVIF from "@/assets/images/gallery-2.avif";
import ImgGallery3AVIF from "@/assets/images/gallery-3.avif";
import ImgGallery4AVIF from "@/assets/images/gallery-4.avif";

import { ref } from "vue";

const activeIdx = ref(0);

const GALERIES = [
  {
    imgUrl: {
      jpg: new URL(ImgGallery1JPG, import.meta.url).href,
      webp: new URL(ImgGallery1WEBP, import.meta.url).href,
      afiv: new URL(ImgGallery1AVIF, import.meta.url).href,
    },
    year: 2021,
    description:
      "Meet cute. Ini adalah tahun pertemuan pertama kita, perkenalan pertama kita, dan tahun pertama “kita”.",
  },
  {
    imgUrl: {
      jpg: new URL(ImgGallery2JPG, import.meta.url).href,
      webp: new URL(ImgGallery2WEBP, import.meta.url).href,
      afiv: new URL(ImgGallery2AVIF, import.meta.url).href,
    },
    year: 2023,
    description:
      "Namanya juga hubungan, pasti ada halangannya. This was our biggest downfall, yet we came back stronger, literally.",
  },
  {
    imgUrl: {
      jpg: new URL(ImgGallery3JPG, import.meta.url).href,
      webp: new URL(ImgGallery3WEBP, import.meta.url).href,
      afiv: new URL(ImgGallery3AVIF, import.meta.url).href,
    },
    year: 2024,
    description: "She said yes, finally!",
  },
  {
    imgUrl: {
      jpg: new URL(ImgGallery4JPG, import.meta.url).href,
      webp: new URL(ImgGallery4WEBP, import.meta.url).href,
      afiv: new URL(ImgGallery4AVIF, import.meta.url).href,
    },
    year: 2025,
    description:
      "This is it! Hopefully it will be one of remarkable day for us, and we wish you will be there too!",
  },
];
</script>

<template>
  <div class="flex flex-col items-center bg-cream px-5 py-[60px]">
    <h2 class="font-carattere reveal mb-10 text-[2.75rem] leading-none">Our Love Story</h2>

    <TransitionGroup
      name="galeries"
      tag="div"
      class="reveal relative mb-6 h-[470px] w-[350px] text-center"
    >
      <template v-for="(gallery, idx) in GALERIES" :key="gallery.imgUrl">
        <div v-show="activeIdx === idx" class="absolute bottom-0 left-0 right-0 top-0">
          <figure>
            <picture>
              <source type="image/avif" :srcset="gallery.imgUrl.afiv" />
              <source type="image/webp" :srcset="gallery.imgUrl.webp" />
              <img
                width="350px"
                height="350px"
                class="mb-10 h-[350px] w-[350px] rounded-2xl"
                loading="lazy"
                :alt="gallery.year.toString()"
                :src="gallery.imgUrl.jpg"
              />
            </picture>
          </figure>

          <div class="flex flex-col gap-2">
            <strong class="text-2xl leading-6"> {{ gallery.year }} </strong>

            <p class="text-sm">
              {{ gallery.description }}
            </p>
          </div>
        </div>
      </template>
    </TransitionGroup>

    <div class="reveal flex w-[350px] items-center justify-between gap-4">
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
          v-for="(gallery, idx) in GALERIES"
          :key="gallery.year"
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
