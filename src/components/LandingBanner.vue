<script setup lang="ts">
import IcArrowBottom from "@/assets/icons/ic-arrow-bottom.svg";
import { useAudioStore } from "@/assets/stores/audio";
import { onMounted, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const audioStore = useAudioStore();

async function initAndPlay() {
  if (!audioStore.isInit) {
    let audioURL: typeof import("*.mp3");

    if (route.query?.target === "bekasi") {
      audioURL = await import("@/assets/audios/mancing-mania-remix.mp3");
    } else {
      audioURL = await import("@/assets/audios/ed-sheeran-one-life.mp3");
    }

    audioStore.init(new URL(audioURL.default, import.meta.url).href);
  }

  audioStore.play();
}

function scrollToContent() {
  const mainContent = document.getElementById("main-content");

  mainContent?.scrollIntoView({
    behavior: "smooth",
  });

  initAndPlay();
}

function handleVisibilityChange() {
  if (!audioStore.isPlaying) return;

  if (document.hidden) {
    audioStore.audio?.pause();
  } else {
    audioStore.audio?.play();
  }
}

onMounted(() => {
  document.addEventListener("visibilitychange", handleVisibilityChange);
});

onBeforeUnmount(() => {
  document.removeEventListener("visibilitychange", handleVisibilityChange);
});
</script>

<template>
  <header
    ref="header"
    class="section h-available container relative mx-auto w-full max-w-2xl snap-start"
  >
    <picture>
      <source type="image/avif" srcset="@/assets/images/banner.avif" />
      <source type="image/webp" srcset="@/assets/images/banner.webp" />
      <img
        alt="Amirah & Gian"
        width="100%"
        height="100%"
        class="absolute bottom-0 top-0 h-full object-cover object-center"
        src="@/assets/images/banner.jpg"
      />
    </picture>

    <div
      class="absolute bottom-0 left-0 right-0 top-0 flex items-end bg-gradient-to-t from-blue to-70% px-5 pb-10"
    >
      <div class="fade-in flex-1">
        <div class="mb-6 flex flex-col items-center gap-4 text-center">
          <span class="text-broken-white">The Wedding of</span>

          <h1 class="font-carattere text-[2.75rem] leading-none text-white">Amirah & Gian</h1>

          <hr class="w-[120px] border-t-broken-white" />

          <span class="text-broken-white">12 . 01 . 2025</span>

          <span class="text-broken-white">Dear {{ $route.query?.guest ?? "Guest" }},</span>
        </div>

        <button
          class="mx-auto flex animate-bounce items-center justify-center gap-1 p-3 font-bold text-light-blue"
          @click="scrollToContent"
        >
          Buka Undangan <IcArrowBottom />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    transform: translateY(50px);
    opacity: 0;
    scale: 0.97;
  }
  to {
    transform: translateY(0);
    opacity: 1;
    scale: 1;
  }
}

.fade-in {
  animation: fadeIn 0.6s ease;
}
</style>
