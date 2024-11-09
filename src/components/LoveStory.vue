<script setup lang="ts">
import IcArrowLeft from "@/assets/icons/ic-arrow-left.svg";
import IcArrowRight from "@/assets/icons/ic-arrow-right.svg";
import ImgGalery1 from "@/assets/images/galeri-1.jpeg";
import ImgGalery2 from "@/assets/images/galeri-2.jpeg";
import ImgGalery3 from "@/assets/images/galeri-3.jpeg";
import ImgGalery4 from "@/assets/images/galeri-4.jpeg";

import { ref } from "vue";

const activeIdx = ref(0);

const GALERIES = [
  {
    imgUrl: new URL(ImgGalery1, import.meta.url).href,
    year: 2019,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget lectus ex.",
  },
  {
    imgUrl: new URL(ImgGalery2, import.meta.url).href,
    year: 2020,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget lectus ex.",
  },
  {
    imgUrl: new URL(ImgGalery3, import.meta.url).href,
    year: 2022,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget lectus ex.",
  },
  {
    imgUrl: new URL(ImgGalery4, import.meta.url).href,
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
            <img
              :alt="galery.year.toString()"
              :src="galery.imgUrl"
              width="100%"
              height="100%"
              class="absolute bottom-0 top-0 h-full object-cover object-center"
            />
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
          :key="galery.imgUrl"
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
