<script setup lang="ts">
import IcInstagram from "@/assets/icons/ic-instagram.svg";
</script>

<template>
  <div class="flex flex-col items-center gap-10 bg-cream px-5 py-[60px] text-center">
    <p class="reveal text-sm">
      Dengan memohon Rahmat & Ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk
      menghadiri pernikahan kami:
    </p>

    <div class="reveal flex flex-col gap-10">
      <picture>
        <source type="image/avif" srcset="@/assets/images/amirah.avif" />
        <source type="image/webp" srcset="@/assets/images/amirah.webp" />
        <img
          alt="Amirah F. Salsabila"
          width="100%"
          height="100%"
          src="@/assets/images/amirah.png"
          loading="lazy"
        />
      </picture>

      <div>
        <h2 class="font-carattere mb-2 text-[2.75rem] leading-none">Amirah F. Salsabila</h2>
        <span>Putri pertama dari xxx dan xxx</span>
        <div class="mt-4 flex items-center justify-center gap-2">
          <IcInstagram /><span class="text-xs">egawangga</span>
        </div>
      </div>
    </div>

    <span class="font-carattere reveal text-[2.75rem] leading-none"> & </span>

    <div class="reveal flex flex-col gap-10">
      <picture>
        <source type="image/avif" srcset="@/assets/images/gian.avif" />
        <source type="image/webp" srcset="@/assets/images/gian.webp" />
        <img
          alt="Gian M. Egawangga"
          width="100%"
          height="100%"
          src="@/assets/images/gian.png"
          loading="lazy"
        />
      </picture>

      <div>
        <h2 class="font-carattere mb-2 text-[2.75rem] leading-none">Gian M. Egawangga</h2>
        <span>Putra ketiga dari xxx dan xxx</span>
        <div class="mt-4 flex items-center justify-center gap-2">
          <IcInstagram /><span class="text-xs">egawangga</span>
        </div>
      </div>
    </div>
  </div>
</template>
