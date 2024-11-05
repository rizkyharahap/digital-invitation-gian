<script setup lang="ts">
import IcArrowBottom from "@/assets/icons/ic-arrow-bottom.svg";
import IcArrowRight from "@/assets/icons/ic-arrow-right.svg";
import IcFlower1 from "@/assets/icons/ic-flower-1.svg";
import IcInstagram from "@/assets/icons/ic-instagram.svg";
import IcGift from "@/assets/icons/ic-gift.svg";
import { QrcodeSvg } from "qrcode.vue";
</script>

<template>
  <div class="container mx-auto max-w-2xl">
    <!-- content -->
    <header class="relative h-dvh w-full snap-start snap-normal">
      <img
        alt="Banner Image"
        src="@/assets/images/banner.jpeg"
        width="100%"
        height="100%"
        class="absolute bottom-0 top-0 h-full object-cover object-center"
      />

      <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue from-15% px-5 pb-10">
        <div class="mb-6 flex flex-col items-center gap-4 text-center">
          <span class="text-broken-white">The Wedding of</span>

          <h1 class="font-carattere text-[2.75rem] leading-none text-white">Amirah & Gian</h1>

          <hr class="border-t-broken-white w-[120px]" />

          <span class="text-broken-white">12 . 01 . 2025</span>

          <span class="text-broken-white">Dear, Gian M. Egawangga</span>
        </div>

        <a
          href="#main-content"
          class="mx-auto flex items-center justify-center gap-1 p-3 font-bold text-light-blue"
        >
          Buka Undangan <IcArrowBottom />
        </a>
      </div>
    </header>

    <main id="main-content" class="snap-start snap-normal">
      <div class="flex flex-col items-center gap-8 px-5 py-[60px] text-center">
        <IcFlower1 />

        <span class="text-broken-white text-2xl">يوم زفاف بهيج</span>

        <p class="text-broken-white text-sm">
          Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari
          jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya
          diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
          tanda-tanda bagi kaum yang berfikir.
        </p>

        <i class="text-sm text-light-blue">(QS Ar-Rum : 21)</i>
      </div>

      <div class="flex flex-col items-center gap-10 bg-cream px-5 py-[60px] text-center">
        <p class="text-sm">
          Dengan memohon Rahmat & Ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i
          untuk menghadiri pernikahan kami:
        </p>

        <img alt="Amirah F. Salsabila" src="@/assets/images/amirah.png" />

        <div>
          <h2 class="font-carattere mb-2 text-[2.75rem] leading-none">Amirah F. Salsabila</h2>
          <span>Putri pertama dari xxx dan xxx</span>
          <div class="mt-4 flex items-center justify-center gap-2">
            <IcInstagram /><span class="text-xs">egawangga</span>
          </div>
        </div>

        <span class="font-carattere mb-2 text-[2.75rem] leading-none"> & </span>

        <img alt="Amirah F. Salsabila" src="@/assets/images/gian.png" />

        <div>
          <h2 class="font-carattere mb-2 text-[2.75rem] leading-none">Gian M. Egawangga</h2>
          <span>Putra ketiga dari xxx dan xxx</span>
          <div class="mt-4 flex items-center justify-center gap-2">
            <IcInstagram /><span class="text-xs">egawangga</span>
          </div>
        </div>
      </div>

      <div class="relative">
        <img
          alt="Content Image Background"
          src="@/assets/images/content-background.jpeg"
          width="100%"
          height="100%"
          class="absolute bottom-0 top-0 h-full object-cover object-center"
        />

        <div
          class="relative flex flex-col items-center gap-10 bg-[#433C2AB2] px-5 py-[60px] text-center"
        >
          <div
            class="flex w-full flex-col items-center gap-4 rounded-2xl bg-[#FBFBFB80] px-5 py-6 text-center"
          >
            <h3 class="text-2xl font-bold">Akad Nikah</h3>

            <hr class="w-[120px] border-t-blue" />

            <div class="flex flex-col gap-2">
              <strong class="text-base">Minggu, 12 Januri 2025</strong>
              <span class="text-base">Pukul 08:00 WIB</span>
            </div>
          </div>

          <div
            class="flex w-full flex-col items-center gap-4 rounded-2xl bg-[#FBFBFB80] px-5 py-6 text-center"
          >
            <h3 class="text-2xl font-bold">Resepsi</h3>

            <hr class="w-[120px] border-t-blue" />

            <div class="flex flex-col gap-2">
              <strong class="text-base">Minggu, 12 Januri 2025</strong>
              <span class="text-base">Pukul 11:00 WIB</span>
            </div>

            <div class="flex flex-col gap-2">
              <a href="https://maps.app.goo.gl/cmaTN2DJvcPjvajDA" target="_blank" class="text-xs"
                >Jl. M.I. Ridwan Rais No.5 7, RT.7/RW.1, Gambir, Kecamatan Gambir, Kota Jakarta
                Pusat, Daerah Khusus Ibukota Jakarta 10110</a
              >
              <a
                href="https://maps.app.goo.gl/cmaTN2DJvcPjvajDA"
                target="_blank"
                class="inline-flex items-center justify-center gap-1 text-sm font-semibold"
                >Lokasi Acara <IcArrowRight
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

      <div class="flex flex-col items-center gap-10 px-10 py-[100px] text-center">
        <QrcodeSvg
          value="QRCODE.VUE 😄"
          level="H"
          :size="216"
          foreground="#0D0628"
          background="#FBFBFB"
          class="bg-broken-white rounded-xl p-4"
        />

        <p class="text-broken-white text-sm">
          Mohon tunjukkan kode QR ini di area registrasi resepsi untuk check in kehadiran.
        </p>
      </div>

      <div class="flex flex-col items-center gap-10 bg-cream px-5 py-[60px] text-center">
        <h2 class="font-carattere mb-2 text-[2.75rem] leading-none">Our Love Story</h2>

        <p class="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget lectus ex.
        </p>
      </div>

      <div class="flex flex-col items-center gap-8 px-5 py-[60px] text-center">
        <h2 class="font-carattere mb-2 text-[2.75rem] leading-none text-light-blue">
          Menuju Hari Bahagia
        </h2>
      </div>

      <div class="relative">
        <img
          alt="Content Image Background"
          src="@/assets/images/footer-background.jpeg"
          width="100%"
          height="100%"
          class="absolute bottom-0 top-0 h-full object-cover object-center"
        />

        <div
          class="relative flex flex-col items-center gap-10 bg-[#433C2AB2] px-5 py-[60px] text-center"
        >
          <div class="flex flex-col items-center justify-center gap-4">
            <h2 class="font-carattere text-broken-white mb-2 text-[2.75rem] leading-none">
              Wedding Gift
            </h2>

            <p class="text-broken-white text-sm">
              Doa dan restu Anda adalah karunia yang sangat berarti bagi kami. Jika Anda berkenan
              memberikan tanda kasih, kami menyediakan pilihan pemberian kado secara cashless.
            </p>
          </div>

          <button
            class="hover:bg-blue-800 focus:ring-blue-300 flex w-full items-center justify-center gap-2 rounded-xl bg-light-blue p-3 text-base font-bold focus:outline-none focus:ring-2"
          >
            Klik Disini <IcGift />
          </button>

          <div class="flex w-full flex-col gap-4">
            <div
              class="flex w-full flex-col items-center gap-4 rounded-2xl bg-[#FBFBFB80] px-5 py-6 text-center"
            >
              <h3 class="text-2xl font-bold">Akad Nikah</h3>
            </div>

            <div
              class="flex w-full flex-col items-center gap-4 rounded-2xl bg-[#FBFBFB80] px-5 py-6 text-center"
            >
              <h3 class="text-2xl font-bold">Resepsi</h3>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center gap-8 px-5 py-[60px] text-center">
        <span class="text-broken-white text-2xl">made with love</span>
      </div>
    </main>
    <!-- end content  -->
  </div>
</template>
