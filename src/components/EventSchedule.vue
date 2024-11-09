<script setup lang="ts">
import IcArrowRight from "@/assets/icons/ic-arrow-right.svg";
</script>

<template>
  <div class="relative">
    <img
      alt="Content Image Background"
      src="@/assets/images/galeri-1.jpeg"
      width="100%"
      height="100%"
      class="absolute bottom-0 top-0 h-full object-cover object-center"
    />

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
          <a href="https://maps.app.goo.gl/cmaTN2DJvcPjvajDA" target="_blank" class="text-xs"
            >Jl. M.I. Ridwan Rais No.5 7, RT.7/RW.1, Gambir, Kecamatan Gambir, Kota Jakarta Pusat,
            Daerah Khusus Ibukota Jakarta 10110</a
          >
          <a
            href="https://maps.app.goo.gl/cmaTN2DJvcPjvajDA"
            target="_blank"
            class="inline-flex items-center justify-center gap-1 text-sm font-semibold"
            >Lokasi Acara <IcArrowRight width="16px" height="16px" viewBox="0 0 24 24"
          /></a>
        </div>

        <button
          class="hover:bg-blue-800 focus:ring-blue-300 w-full rounded-xl bg-light-blue p-3 text-base font-bold focus:outline-none focus:ring-2"
        >
          Konfirmasi Kehadiran
        </button>
      </div>
    </div>
  </div>
</template>
