<script setup lang="ts">
import IcArrowBottom from "@/assets/icons/ic-arrow-bottom.svg";

function scrollToContent() {
  const mainContent = document.getElementById("main-content");

  mainContent?.scrollIntoView({
    behavior: "smooth",
  });
}
</script>

<template>
  <header class="container relative mx-auto h-dvh w-full max-w-2xl snap-start snap-normal">
    <img
      alt="Banner Image"
      src="@/assets/images/banner.jpeg"
      width="100%"
      height="100%"
      class="absolute bottom-0 top-0 h-full object-cover object-center"
    />

    <div
      class="absolute bottom-0 left-0 right-0 top-0 flex items-end bg-gradient-to-t from-blue to-70% px-5 pb-10"
    >
      <div class="reveal flex-1">
        <div class="mb-6 flex flex-col items-center gap-4 text-center">
          <span class="text-broken-white">The Wedding of</span>

          <h1 class="font-carattere text-[2.75rem] leading-none text-white">Amirah & Gian</h1>

          <hr class="w-[120px] border-t-broken-white" />

          <span class="text-broken-white">12 . 01 . 2025</span>

          <span class="text-broken-white">Dear, {{ $route.query?.guest ?? "Guest" }}</span>
        </div>

        <button
          class="mx-auto flex items-center justify-center gap-1 p-3 font-bold text-light-blue"
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
