<script setup lang="ts">
import IcArrowRight from "@/assets/icons/ic-arrow-right.svg";
import { ref } from "vue";
import AbsentModal from "./AbsentModal.vue";

const isShowAbsentModal = ref(false);

function handleToogleModal() {
  isShowAbsentModal.value = !isShowAbsentModal.value;
}
</script>

<template>
  <div class="relative">
    <picture>
      <source type="image/avif" srcset="@/assets/images/event-schedule-background.avif" />
      <source type="image/webp" srcset="@/assets/images/event-schedule-background.webp" />
      <img
        alt="Content Image Background"
        width="100%"
        height="100%"
        class="absolute bottom-0 top-0 h-full object-cover object-center"
        loading="lazy"
        src="@/assets/images/event-schedule-background.jpg"
      />
    </picture>

    <div
      class="relative flex flex-col items-center gap-10 bg-[#433C2AB2] px-5 py-[60px] text-center"
    >
      <div
        class="reveal flex w-full flex-col items-center gap-4 rounded-2xl bg-[#FBFBFB80] px-5 py-6 text-center"
      >
        <h3 class="text-2xl font-bold">Akad Nikah</h3>

        <hr class="w-[120px] border-t-blue" />

        <div class="flex flex-col gap-2">
          <strong class="text-base">Minggu, 12 Januri 2025</strong>
          <span class="text-base">Pukul 08:00 WIB</span>
        </div>
      </div>

      <div
        class="reveal flex w-full flex-col items-center gap-4 rounded-2xl bg-[#FBFBFB80] px-5 py-6 text-center"
      >
        <h3 class="text-2xl font-bold">Resepsi</h3>

        <hr class="w-[120px] border-t-blue" />

        <div class="flex flex-col gap-2">
          <strong class="text-base">Minggu, 12 Januri 2025</strong>
          <span class="text-base">Pukul 11:00 WIB</span>
        </div>

        <div class="flex flex-col gap-2">
          <a
            href="https://maps.app.goo.gl/UokvuFefCcZuDtiK9"
            target="_blank"
            class="text-xs leading-5"
          >
            <strong>Balai Tetap Setia PP Polri</strong>
            <br />
            Jl. Siaga Raya, RT.16/RW.1, Pejaten Bar., Ps. Minggu, Kota Jakarta Selatan, Daerah
            Khusus Ibukota Jakarta 12510</a
          >
          <a
            href="https://maps.app.goo.gl/UokvuFefCcZuDtiK9"
            target="_blank"
            class="inline-flex items-center justify-center gap-1 text-sm font-semibold"
          >
            Lokasi Acara

            <IcArrowRight
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              class="animate-bounce-horizontal"
            />
          </a>
        </div>

        <button
          class="hover:bg-blue-800 focus:ring-blue-300 w-full rounded-xl bg-light-blue p-3 text-base font-bold focus:outline-none focus:ring-2"
          @click="handleToogleModal"
        >
          Konfirmasi Kehadiran
        </button>
      </div>
    </div>
  </div>

  <AbsentModal :show="isShowAbsentModal" @close="handleToogleModal" />
</template>
