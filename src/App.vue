<script setup lang="ts">
import IcFlower1 from "@/assets/icons/ic-flower-1.svg";
import IcFlower2 from "@/assets/icons/ic-flower-2.svg";
import IcInstagram from "@/assets/icons/ic-instagram.svg";

import { QrcodeSvg } from "qrcode.vue";
import EventCountdown from "./components/EventCountdown.vue";
import EventSchedule from "./components/EventSchedule.vue";
import LandingBanner from "./components/LandingBanner.vue";
import WeddingGift from "./components/WeddingGift.vue";
</script>

<template>
  <div class="h-dvh snap-y snap-mandatory overflow-y-scroll scroll-smooth">
    <!-- content -->

    <LandingBanner />

    <main id="main-content" class="container mx-auto max-w-2xl snap-start snap-normal">
      <div class="reveal flex flex-col items-center gap-8 px-5 py-[60px] text-center">
        <IcFlower1 />

        <span class="text-2xl text-broken-white">يوم زفاف بهيج</span>

        <p class="text-sm text-broken-white">
          Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari
          jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya
          diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
          tanda-tanda bagi kaum yang berfikir.
        </p>

        <i class="text-sm text-light-blue">(QS Ar-Rum : 21)</i>
      </div>

      <div class="reveal flex flex-col items-center gap-10 bg-cream px-5 py-[60px] text-center">
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

      <EventSchedule />

      <div class="reveal flex flex-col items-center gap-10 px-10 py-[100px] text-center">
        <QrcodeSvg
          value="QRCODE.VUE 😄"
          level="H"
          :size="216"
          foreground="#0D0628"
          background="#FBFBFB"
          class="rounded-xl bg-broken-white p-4"
        />

        <p class="text-sm text-broken-white">
          Mohon tunjukkan kode QR ini di area registrasi resepsi untuk check in kehadiran.
        </p>
      </div>

      <div class="reveal flex flex-col items-center gap-10 bg-cream px-5 py-[60px] text-center">
        <h2 class="font-carattere mb-2 text-[2.75rem] leading-none">Our Love Story</h2>

        <p class="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget lectus ex.
        </p>
      </div>

      <EventCountdown />

      <WeddingGift />

      <div class="reveal flex flex-col items-center gap-4 px-5 py-[60px] text-center">
        <span class="text-base text-broken-white">Made with &#128153;</span>

        <IcFlower2 />

        <span class="font-carattere text-[32px] leading-[36.6px] text-light-blue"
          >Amirah & Gian</span
        >
      </div>
    </main>
    <!-- end content  -->
  </div>
</template>

<style>
@keyframes animate-in-and-out {
  entry 0% {
    opacity: 0;
    transform: translateY(100px);
  }
  entry 100% {
    opacity: 1;
    transform: translateY(0);
  }
  exit 0% {
    opacity: 1;
    transform: translateY(0);
  }
  exit 100% {
    opacity: 0;
    transform: translateY(100px);
  }
}

.reveal {
  animation: animate-in-and-out linear both;
  animation-timeline: view();
}

/* @keyframes reveal {
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.reveal {
  animation: reveal 0.3s ease;
  animation-timeline: view();
  animation-range: 0 300px;
} */
</style>
