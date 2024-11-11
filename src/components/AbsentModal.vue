<script setup lang="ts">
import { ref } from "vue";
import Modal from "./Modal.vue";
import IcPlus from "@/assets/icons/ic-plus.svg";
import IcMin from "@/assets/icons/ic-min.svg";
import IcEnvelop from "@/assets/icons/ic-envelope.svg";

defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  (e: "close", event: MouseEvent): void; // Pass MouseEvent as payload
}>();

const absent = ref<string | null>(null);
const count = ref(1);
const isSubmited = ref(false);

function handleSubmit() {
  // TODO: handling submit

  isSubmited.value = true;
}
</script>

<template>
  <!-- modal absent  -->
  <Teleport to="body">
    <Modal :show="show" @close="emit('close', $event)">
      <template #header v-if="!isSubmited">
        <h3>Konfirmasi Kehadiran</h3>
      </template>

      <Transition>
        <!-- modal form  -->
        <div v-if="!isSubmited">
          <div class="mb-4 flex items-center">
            <input
              id="yes"
              type="radio"
              value="yes"
              name="absent"
              class="h-5 w-5 accent-blue"
              v-model="absent"
            />
            <label for="yes" class="ms-2 text-base">Ya, saya akan hadir</label>
          </div>
          <div class="flex items-center">
            <input
              id="no"
              type="radio"
              value="no"
              name="absent"
              class="h-5 w-5 accent-blue"
              v-model="absent"
            />
            <label for="no" class="ms-2 text-base">Maaf, saya tidak bisa hadir</label>
          </div>

          <Transition name="fade">
            <div v-if="absent === 'yes'" class="mt-4">
              <span class="text-xs"> Jumlah kehadiran </span>

              <div class="mt-2 flex items-center justify-center">
                <button
                  type="button"
                  class="focus:ring-blue-300 rounded-xl border border-blue p-3 text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:border-[#B3B3B3] disabled:bg-[#E7E6E6] disabled:text-[#B3B3B3]"
                  :disabled="count <= 1"
                  @click="count -= 1"
                >
                  <IcMin />
                </button>

                <strong class="min-w-[60px] text-center text-2xl">
                  {{ count }}
                </strong>

                <button
                  type="button"
                  class="focus:ring-blue-300 rounded-xl border border-blue p-3 text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:border-[#B3B3B3] disabled:bg-[#E7E6E6] disabled:text-[#B3B3B3]"
                  @click="count += 1"
                >
                  <IcPlus />
                </button>
              </div>
            </div>
            <!-- modal form end  -->
          </Transition>

          <button
            class="hover:bg-blue-800 focus:ring-blue-300 mt-6 w-full rounded-xl bg-light-blue p-3 text-base font-bold transition-colors duration-300 focus:outline-none focus:ring-2 disabled:bg-[#CBCAD1] disabled:text-broken-white"
            :disabled="!absent"
            @click="handleSubmit"
          >
            Kirim Response
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
      </Transition>
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
