<script setup lang="ts">
import IcAudioOff from "@/assets/icons/ic-audio-off.svg";
import IcAudioOn from "@/assets/icons/ic-audio-on.svg";
import IcQrCode from "@/assets/icons/ic-qr-code.svg";
import { audioStore } from "@/assets/stores/audio";
import Modal from "@/components/Modal.vue";
import router from "@/router";
import { QrcodeSvg } from "qrcode.vue";
import { computed, ref } from "vue";

const isShowQrModal = ref(false);

function handleToogelAudio() {
  if (!audioStore.isPlaying) {
    audioStore.play();
  } else {
    audioStore.pause();
  }
}

function handleToogleModal() {
  isShowQrModal.value = !isShowQrModal.value;
}

const magicLinkUrl = computed(() => {
  if (!router.currentRoute.value.query?.magic_link) {
    return "";
  }

  return window.location.href.split("?")[0] + "/scan/" + router.currentRoute.value.query.magic_link;
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
