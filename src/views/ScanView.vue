<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { QrcodeStream } from "vue-qrcode-reader";

const isCameraActive = ref(false);
onMounted(() => {
  isCameraActive.value = true;
});

onUnmounted(() => {
  isCameraActive.value = false;
});

const error = ref("");

function paintBoundingBox(
  detectedCodes: { boundingBox: { x: number; y: number; width: number; height: number } }[],
  ctx: {
    lineWidth: number;
    strokeStyle: string;
    strokeRect: (arg0: number, arg1: number, arg2: number, arg3: number) => void;
  },
) {
  for (const detectedCode of detectedCodes) {
    const {
      boundingBox: { x, y, width, height },
    } = detectedCode;

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#007bff";
    ctx.strokeRect(x, y, width, height);
  }
}

function onError(err: { name: string; message: string }) {
  error.value = `[${err.name}]: `;

  switch (err.name) {
    case "NotAllowedError":
      error.value += "you need to grant camera access permission";
      break;

    case "NotFoundError":
      error.value += "no camera on this device";
      break;

    case "NotSupportedError":
      error.value += "secure context required (HTTPS, localhost)";
      break;

    case "NotReadableError":
      error.value += "is the camera already in use?";
      break;

    case "OverconstrainedError":
      error.value += "installed cameras are not suitable";
      break;

    case "StreamApiNotSupportedError":
      error.value += "Stream API is not supported in this browser";
      break;

    case "InsecureContextError":
      error.value +=
        "Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.";
      break;

    default:
      error.value += err.message;
      break;
  }

  alert(error.value);
}

// const router = useRouter();

function onDetect(detectedCodes: { rawValue: string }[]) {
  if (!detectedCodes?.[0]?.rawValue) {
    alert("Magic Link Not Found, please refresh and scan again!");
    return;
  }

  // const scanUrl = new URL(detectedCodes[0].rawValue);

  // router.push(scanUrl.pathname);

  window.location.replace(detectedCodes[0].rawValue);
}
</script>

<template>
  <div class="h-available flex w-full items-center">
    <QrcodeStream
      v-if="isCameraActive"
      :track="paintBoundingBox"
      @detect="onDetect"
      @error="onError"
    ></QrcodeStream>
  </div>
</template>
