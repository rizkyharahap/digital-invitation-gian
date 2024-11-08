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
    <img
      alt="Content Image Background"
      src="@/assets/images/footer-background.jpeg"
      width="100%"
      height="100%"
      class="absolute bottom-0 top-0 h-full object-cover object-top"
    />

    <div
      class="relative flex flex-col items-center gap-10 bg-[#433C2AB2] px-5 py-[60px] text-center"
    >
      <div class="flex flex-col items-center justify-center gap-4">
        <h2 class="font-carattere mb-2 text-[2.75rem] leading-none text-broken-white">
          Wedding Gift
        </h2>

        <p class="text-sm text-broken-white">
          Doa dan restu Anda adalah karunia yang sangat berarti bagi kami. Jika Anda berkenan
          memberikan tanda kasih, kami menyediakan pilihan pemberian kado secara cashless.
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
            class="flex w-full flex-col items-center gap-4 rounded-2xl bg-[#FBFBFB80] px-6 py-5 text-center"
          >
            <div class="grid grid-cols-5 items-center gap-4 divide-x">
              <div>
                <h3 class="text-2xl font-bold">BCA</h3>
              </div>
              <div class="col-span-4 pl-4 text-start">
                <div class="mb-2 flex items-center gap-2">
                  <strong class="text-base">1234567890 </strong> <IcClipboard />
                </div>

                <span class="inline-block text-base">a/n Gian M. Egawangga</span>
              </div>
            </div>
          </button>

          <button
            @click="copyToClipboard('1234567890')"
            class="flex w-full flex-col items-center gap-4 rounded-2xl bg-[#FBFBFB80] px-6 py-5 text-center"
          >
            <div class="grid grid-cols-5 items-center gap-4 divide-x">
              <div>
                <h3 class="text-2xl font-bold">BRI</h3>
              </div>
              <div class="col-span-4 pl-4 text-start">
                <div class="mb-2 flex items-center gap-2">
                  <strong class="text-base">1234567890 </strong> <IcClipboard />
                </div>

                <span class="inline-block text-base">a/n Gian M. Egawangga</span>
              </div>
            </div>
          </button>
        </div>
      </Transition>
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
