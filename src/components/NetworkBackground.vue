<script setup lang="ts">
import { ref } from "vue";
import { useTheme } from "@/composables/useTheme";
import { useNetworkBackground } from "@/composables/useNetworkBackground";

const canvas = ref<HTMLCanvasElement | null>(null);
const { isLight } = useTheme();

useNetworkBackground(canvas, isLight);
</script>

<template>
  <div class="bg-glow" />
  <canvas ref="canvas" class="bg-canvas" />
</template>

<style scoped>
.bg-canvas {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

.bg-glow {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  transition: opacity 0.5s ease;
  background:
    radial-gradient(640px 540px at 84% 8%, rgba(139, 92, 246, 0.18), transparent 60%),
    radial-gradient(700px 580px at 6% 94%, rgba(42, 111, 219, 0.18), transparent 60%);
}

.light .bg-glow {
  background:
    radial-gradient(640px 540px at 84% 8%, rgba(124, 77, 224, 0.12), transparent 60%),
    radial-gradient(700px 580px at 6% 94%, rgba(42, 111, 219, 0.12), transparent 60%);
}
</style>
