<script setup lang="ts">
import IcClipboard from "@/assets/icons/ic-clipboard.svg";
import IcGift from "@/assets/icons/ic-gift.svg";
import { ref } from "vue";

const show = ref(false);

async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
}
</script>

<template>
  <div class="relative">
    <picture>
      <source type="image/avif" srcset="@/assets/images/wedding-gift-background.avif" />
      <source type="image/webp" srcset="@/assets/images/wedding-gift-background.webp" />
      <img
        alt="Content Image Background"
        src="@/assets/images/wedding-gift-background.jpg"
        loading="lazy"
        width="100%"
        height="100%"
        class="absolute bottom-0 top-0 h-full object-cover object-top"
      />
    </picture>

    <div class="relative bg-[#433C2AB2] px-5 py-[60px]">
      <div class="reveal flex flex-col items-center gap-10">
        <div class="flex flex-col items-center justify-center gap-4">
          <h2 class="font-carattere mb-2 text-[2.75rem] leading-none text-broken-white">
            Wedding Gift
          </h2>

          <p class="text-sm text-broken-white">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah
            ungkapan tanda kasih, Anda dapat memberi kado secara cashless.
          </p>
        </div>

        <button
          class="hover:bg-blue-800 focus:ring-blue-300 flex w-full items-center justify-center gap-2 rounded-xl bg-light-blue p-3 text-base font-bold focus:outline-none focus:ring-2"
          @click="show = true"
        >
          Klik Disini <IcGift />
        </button>

        <Transition name="fade">
          <div v-show="show" class="flex w-full flex-col gap-4">
            <button
              @click="copyToClipboard('1234567890')"
              class="flex w-full flex-col gap-4 rounded-2xl bg-[#FBFBFB80] px-6 py-5"
            >
              <div class="flex items-center gap-4 divide-x">
                <h3 class="min-w-[93px] text-center text-2xl font-bold">Mandiri</h3>

                <div class="pl-4">
                  <div class="mb-2 flex items-center gap-2">
                    <strong class="text-base">1180012694799 </strong> <IcClipboard />
                  </div>

                  <span class="inline-block text-base">a/n Suli Indah Lestari</span>
                </div>
              </div>
            </button>

            <button
              @click="copyToClipboard('1234567890')"
              class="flex w-full flex-col gap-4 rounded-2xl bg-[#FBFBFB80] px-6 py-5"
            >
              <div class="flex items-center gap-4 divide-x">
                <h3 class="min-w-[93px] text-center text-2xl font-bold">GoPay</h3>

                <div class="pl-4">
                  <div class="mb-2 flex items-center gap-2">
                    <strong class="text-base">+6282126109421 </strong> <IcClipboard />
                  </div>

                  <span class="inline-block text-base">a/n Amirah Fairuz S</span>
                </div>
              </div>
            </button>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style>
.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
