<script setup lang="ts">
import IcEnvelop from "@/assets/icons/ic-envelope.svg";
import IcMin from "@/assets/icons/ic-min.svg";
import IcPlus from "@/assets/icons/ic-plus.svg";
import { getMagicLink } from "@/utils/magicLinkUrl";
import { ref } from "vue";
import Modal from "./Modal.vue";

defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  (e: "close", event: MouseEvent): void; // Pass MouseEvent as payload
}>();

enum RSVPStatus {
  ATTEND = "ATTEND",
  ABSENT = "ABSENT",
}
const status = ref<RSVPStatus | null>(null);
const rsvpCount = ref(1);

const isLoading = ref(false);
const isSubmited = ref(false);

async function handleSubmit() {
  isLoading.value = true;

  try {
    const response = await fetch(import.meta.env.VITE_API_URL + "/guest/rsvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        magic_link: getMagicLink(),
        status: status.value,
        rsvp_count: rsvpCount.value,
      }),
    });

    console.log("response", response);
    if (!response.ok) throw response;

    const data = await response.json();
    if (data) {
      console.log("data", data);
      isSubmited.value = true;
    }
  } catch (err) {
    console.error(err);
    alert("Terjadi kesalahan, silahkan coba lagi!");
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <!-- modal absent  -->
  <Teleport to="body">
    <Modal :show="show" @close="emit('close', $event)">
      <template #header v-if="!isSubmited">
        <h3>Konfirmasi Kehadiran</h3>
      </template>

      <!-- modal form  -->
      <div v-if="!isSubmited">
        <div class="mb-4 flex items-center">
          <input
            id="attend"
            type="radio"
            :value="RSVPStatus.ATTEND"
            name="attend"
            class="h-5 w-5 accent-blue"
            v-model="status"
          />
          <label for="attend" class="ms-2 text-base">Ya, saya akan hadir</label>
        </div>
        <div class="flex items-center">
          <input
            id="absent"
            type="radio"
            :value="RSVPStatus.ABSENT"
            name="absent"
            class="h-5 w-5 accent-blue"
            v-model="status"
          />
          <label for="absent" class="ms-2 text-base">Maaf, saya tidak bisa hadir</label>
        </div>

        <Transition name="fade">
          <div v-if="status === RSVPStatus.ATTEND" class="mt-4">
            <span class="text-xs"> Jumlah kehadiran </span>

            <div class="mt-2 flex items-center justify-center">
              <button
                type="button"
                class="focus:ring-blue-300 rounded-xl border border-blue p-3 text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:border-[#B3B3B3] disabled:bg-[#E7E6E6] disabled:text-[#B3B3B3]"
                :disabled="rsvpCount <= 1"
                @click="rsvpCount -= 1"
              >
                <IcMin />
              </button>

              <strong class="min-w-[60px] text-center text-2xl">
                {{ rsvpCount }}
              </strong>

              <button
                type="button"
                class="focus:ring-blue-300 rounded-xl border border-blue p-3 text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:border-[#B3B3B3] disabled:bg-[#E7E6E6] disabled:text-[#B3B3B3]"
                @click="rsvpCount += 1"
              >
                <IcPlus />
              </button>
            </div>
          </div>
          <!-- modal form end  -->
        </Transition>

        <button
          class="hover:bg-blue-800 focus:ring-blue-300 mt-6 flex w-full items-center justify-center rounded-xl bg-light-blue p-3 text-base font-bold transition-colors duration-300 focus:outline-none focus:ring-2 disabled:bg-[#CBCAD1] disabled:text-broken-white"
          :disabled="!status || isLoading"
          @click="handleSubmit"
        >
          <svg
            v-if="isLoading"
            class="h-6 w-6 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>

          <span v-if="!isLoading">Kirim Response</span>
        </button>
      </div>

      <!-- modal success submit  -->
      <div v-else class="flex flex-col items-center justify-center gap-6">
        <IcEnvelop />

        <p class="text-base">Terima kasih telah mengkonfirmasi kehadiran Anda.</p>

        <button
          class="hover:bg-blue-800 focus:ring-blue-300 w-full rounded-xl bg-light-blue p-3 text-base font-bold transition-colors duration-300 focus:outline-none focus:ring-2 disabled:bg-[#CBCAD1] disabled:text-broken-white"
          @click="emit('close', $event)"
        >
          Oke
        </button>
      </div>
      <!-- modal success submit end  -->
    </Modal>
  </Teleport>
  <!-- modal absent end  -->
</template>

<style lang="css" scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from,
.fade-leave-to {
  transform: opacity;
}
</style>
