<script setup lang="ts">
import IcAudioOff from "@/assets/icons/ic-audio-off.svg";
import IcAudioOn from "@/assets/icons/ic-audio-on.svg";
import IcQrCode from "@/assets/icons/ic-qr-code.svg";
import { useAudioStore } from "@/assets/stores/audio";
import Modal from "@/components/Modal.vue";

import { QrcodeSvg } from "qrcode.vue";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const audioStore = useAudioStore();

async function handleToogelAudio() {
  if (!audioStore.isInit) {
    let audioURL: typeof import("*.mp3");

    if (route.query?.target === "bekasi") {
      audioURL = await import("@/assets/audios/mancing-mania-remix.mp3");
    } else {
      audioURL = await import("@/assets/audios/ed-sheeran-one-life.mp3");
    }

    audioStore.init(new URL(audioURL.default, import.meta.url).href);
  }

  if (!audioStore.isPlaying) {
    audioStore.play();
  } else {
    audioStore.pause();
  }
}

const isShowQrModal = ref(false);

function handleToogleModal() {
  isShowQrModal.value = !isShowQrModal.value;
}

const magicLinkUrl = computed(() => {
  if (!route.query?.magic_link) {
    return "";
  }

  return `${window.location.href.split("?")[0]}/scan/${route.query.magic_link}`;
});
</script>

<template>
  <div class="fixed bottom-9 right-4 flex flex-col gap-3">
    <button
      type="button"
      class="focus:ring-blue-300 rounded-xl border border-green bg-broken-white p-3 text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2"
      @click="handleToogleModal"
    >
      <IcQrCode />
    </button>

    <button
      type="button"
      class="focus:ring-blue-300 rounded-xl border border-green bg-broken-white p-3 text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2"
      @click="handleToogelAudio"
    >
      <IcAudioOn v-if="audioStore.isPlaying" />
      <IcAudioOff v-else />
    </button>
  </div>

  <!-- modal QR code  -->
  <Teleport to="body">
    <Modal :show="isShowQrModal" @close="handleToogleModal">
      <template #header>
        <h3>Check in Resepsi</h3>
      </template>

      <div class="flex w-full flex-col items-center gap-6 text-center">
        <QrcodeSvg
          :value="magicLinkUrl"
          :size="216"
          level="H"
          foreground="#0D0628"
          background="#FBFBFB"
          class="rounded-xl bg-broken-white p-4"
        />

        <p class="mb-4 text-sm">
          Mohon tunjukkan <strong>kode QR</strong> ini di area registrasi resepsi untuk check in
          kehadiran.
        </p>
      </div>
    </Modal>
  </Teleport>
  <!-- modal QR code end  -->
</template>
