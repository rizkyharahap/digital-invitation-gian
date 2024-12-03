<script setup lang="ts">
import { QrcodeSvg } from "qrcode.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const magicLinkUrl = computed(() => {
  if (!route.query?.magic_link) {
    return "";
  }

  return `${window.location.href.split("?")[0]}/scanned?magic_link=${route.query.magic_link}`;
});
</script>

<template>
  <div class="px-10 py-[100px]">
    <div class="reveal flex flex-col items-center gap-10 text-center">
      <QrcodeSvg
        :value="magicLinkUrl"
        :size="216"
        level="H"
        foreground="#0D0628"
        background="#FBFBFB"
        class="rounded-xl bg-broken-white p-4"
      />

      <p class="text-sm text-broken-white">
        Mohon tunjukkan <strong>kode QR</strong> ini di area registrasi resepsi untuk check in
        kehadiran.
      </p>
    </div>
  </div>
</template>
