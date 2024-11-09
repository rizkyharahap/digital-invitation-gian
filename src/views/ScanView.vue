<script setup lang="ts">
import { ref } from "vue";
import { QrcodeStream } from "vue-qrcode-reader";

const result = ref("");
const error = ref("");

function paintBoundingBox(
  detectedCodes: any,
  ctx: {
    lineWidth: number;
    strokeStyle: string;
    strokeRect: (arg0: any, arg1: any, arg2: any, arg3: any) => void;
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

function onDetect(detectedCodes: any[]) {
  console.log({ detectedCodes });
  result.value = JSON.stringify(detectedCodes.map((code) => code.rawValue));
}
</script>

<template>
  <div style="border: 2px solid black">
    <QrcodeStream :track="paintBoundingBox" @detect="onDetect" @error="onError"></QrcodeStream>
  </div>
</template>
