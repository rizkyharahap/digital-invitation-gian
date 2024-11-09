<script setup lang="ts">
import IcClose from "@/assets/icons/ic-close.svg";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  (e: "close", event: MouseEvent): void; // Pass MouseEvent as payload
}>();
</script>

<template>
  <Transition name="modal">
    <div
      id="modal"
      v-if="show"
      class="fixed left-0 top-0 z-50 flex h-full w-full bg-black bg-opacity-50 transition-opacity duration-300 ease-in"
      @click.prevent="emit('close', $event)"
    >
      <div
        class="m-auto w-[350px] rounded-2xl bg-white p-3 transition-opacity duration-300 ease-in"
      >
        <div v-if="$slots.header" class="mb-6 flex items-center justify-between">
          <h3 class="text-base font-bold">
            <slot name="header"></slot>
          </h3>

          <button @click.prevent.stop="emit('close', $event)">
            <IcClose />
          </button>
        </div>

        <hr v-if="$slots.header" class="mb-6" />

        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: opacity;
}
</style>
