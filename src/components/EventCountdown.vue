<script setup lang="ts">
import { reactive } from "vue";

const timer = reactive({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

const EVENT_DATE = new Date("Jan 12, 2025 08:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();

  const distance = EVENT_DATE - now;

  timer.days = Math.floor(distance / (1000 * 60 * 60 * 24));
  timer.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  timer.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  timer.seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance < 0) {
    clearInterval(countdown);
  }
});

function renderTwoDigits(value: number) {
  return value.toLocaleString("id-ID", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
}
</script>

<template>
  <div class="px-5 py-[60px]">
    <div class="reveal flex flex-col items-center gap-8 text-center">
      <h2 class="font-carattere mb-2 text-[2.75rem] leading-none text-light-blue">
        Menuju Hari Bahagia
      </h2>

      <div class="flex items-center justify-center gap-4">
        <div class="flex flex-col items-center gap-2">
          <div
            class="flex w-[56px] items-center justify-center rounded-lg bg-[#A5C8FF4D] p-3 text-2xl font-bold leading-9 text-broken-white"
          >
            {{ renderTwoDigits(timer.days) }}
          </div>

          <span class="text-sm text-broken-white">hari</span>
        </div>

        <span class="text-2xl font-bold leading-9 text-broken-white">:</span>

        <div class="flex flex-col items-center gap-2">
          <div
            class="flex w-[56px] items-center justify-center rounded-lg bg-[#A5C8FF4D] p-3 text-2xl font-bold leading-9 text-broken-white"
          >
            {{ renderTwoDigits(timer.hours) }}
          </div>

          <span class="text-sm text-broken-white">jam</span>
        </div>

        <span class="text-2xl font-bold leading-9 text-broken-white">:</span>

        <div class="flex flex-col items-center gap-2">
          <div
            class="flex w-[56px] items-center justify-center rounded-lg bg-[#A5C8FF4D] p-3 text-2xl font-bold leading-9 text-broken-white"
          >
            {{ renderTwoDigits(timer.minutes) }}
          </div>

          <span class="text-sm text-broken-white">menit</span>
        </div>

        <span class="text-2xl font-bold leading-9 text-broken-white">:</span>

        <div class="flex flex-col items-center gap-2">
          <div
            class="flex w-[56px] items-center justify-center rounded-lg bg-[#A5C8FF4D] p-3 text-2xl font-bold leading-9 text-broken-white"
          >
            {{ renderTwoDigits(timer.seconds) }}
          </div>

          <span class="text-sm text-broken-white">detik</span>
        </div>
      </div>
    </div>
  </div>
</template>
