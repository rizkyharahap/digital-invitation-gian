<script setup lang="ts">
import IcFlower2 from "@/assets/icons/ic-flower-2.svg";
import IcDots from "@/assets/icons/ic-dots.svg";
</script>

<template>
  <div class="px-5 py-[60px]">
    <div class="reveal text-center">
      <div class="mb-10 flex flex-col items-center gap-4">
        <span class="text-base text-broken-white">Made with &#128153;</span>

        <IcFlower2 />

        <span class="font-carattere text-[32px] leading-[36.6px] text-light-blue"
          >Amirah & Gian</span
        >
      </div>

      <div class="flex flex-col items-center gap-1 text-center">
        <span class="text-[10px] leading-6 text-broken-white">supported by</span>

        <IcDots height="16" viewBox="0 0 84 25" />
      </div>
    </div>
  </div>
</template>
