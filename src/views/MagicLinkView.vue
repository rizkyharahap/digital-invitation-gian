<script setup lang="ts">
import IcRefresh from "@/assets/icons/ic-refresh.svg";
import IcSpinner from "@/assets/icons/ic-spinner.svg";
import { ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";

export interface ScanResult {
  id: string;
  name: string;
  role: string;
  status: string;
  created_at: string;
  scanned_at: string;
  magic_link: string;
}

const isLoading = ref(true);
const isError = ref(true);
const result = ref<ScanResult | null>(null);

async function scanMagicLink(_magicLink: string) {
  isLoading.value = true;
  isError.value = false;
  result.value = null;

  try {
    // TODO: replace with real API
    const response = await fetch("https://invitation-api.dotsgroup.id/api/v1/guest/scan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        magic_link: "AYEwJE6zSmSNCaS1rf9vDg==",
      }),
    });

    console.log("response", response);

    if (!response) throw response;

    const data = await response.text();

    if (data) {
      console.log("data", data);

      // result.value = data;
    }
  } catch (err) {
    isError.value = true;
    console.error(err);
  } finally {
    isLoading.value = false;
  }
}

const route = useRoute();
watch(() => route.params.id as string, scanMagicLink, { immediate: true });
</script>

<template>
  <div class="h-available flex w-full flex-col justify-center bg-white p-5">
    <template v-if="isLoading">
      <IcSpinner class="mx-auto h-14 w-14 animate-spin text-blue" />
    </template>

    <template v-else-if="isError">
      <h3 class="mb-2 text-lg font-bold">Terjadi kesalahan !</h3>
      <p class="mb-10">Silahkan refresh atau scan ulang dengan mengklik refresh dibawah ini !</p>

      <button @click="$router.go(0)">
        <IcRefresh class="mx-auto h-14 w-14 text-blue" />
      </button>

      <RouterLink
        to="/AmirahGian/scan"
        class="hover:bg-blue-800 focus:ring-blue-300 absolute bottom-5 left-5 right-5 rounded-xl bg-light-blue p-3 text-center text-base font-bold transition-colors duration-300 focus:outline-none focus:ring-2 disabled:bg-[#CBCAD1] disabled:text-broken-white"
      >
        Scan ulang
      </RouterLink>
    </template>

    <template v-else>
      <h3 class="mb-6 text-lg font-bold">Kehadiran berhasil dikonfirmasi:</h3>

      <div class="mb-6 grid w-full grid-cols-4 gap-4">
        <div>
          <span>Nama :</span>
        </div>
        <div class="col-span-3">
          <span>{{ result?.name }}</span>
        </div>

        <div>
          <span>Role :</span>
        </div>
        <div class="col-span-3">
          <span>{{ result?.role }}</span>
        </div>

        <div>
          <span>Status :</span>
        </div>
        <div class="col-span-3">
          <span>{{ result?.status }}</span>
        </div>
      </div>

      <RouterLink
        to="/AmirahGian/scan"
        class="hover:bg-blue-800 focus:ring-blue-300 absolute bottom-5 left-5 right-5 rounded-xl bg-light-blue p-3 text-center text-base font-bold transition-colors duration-300 focus:outline-none focus:ring-2 disabled:bg-[#CBCAD1] disabled:text-broken-white"
      >
        Scan Lainnya
      </RouterLink>
    </template>
  </div>
</template>
