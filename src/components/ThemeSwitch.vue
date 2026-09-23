<script setup lang="ts">
import { useTheme } from "@/composables/useTheme";

const { isLight, setTheme } = useTheme();
</script>

<template>
  <div class="switch" role="group" aria-label="Alternar tema">
    <button :class="{ active: !isLight }" :aria-pressed="!isLight" @click="setTheme('dark')">
      <ion-icon name="moon" /> Escuro
    </button>
    <button :class="{ active: isLight }" :aria-pressed="isLight" @click="setTheme('light')">
      <ion-icon name="sunny" /> Claro
    </button>
  </div>
</template>

<style scoped>
.switch {
  margin: 26px 0 8px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 5px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

button {
  appearance: none;
  border: none;
  background: transparent;
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: 999px;
  cursor: pointer;
  transition: color 0.25s ease;
}
button ion-icon {
  font-size: 1rem;
}
button.active {
  color: #fff;
  background: var(--grad);
}
button:focus-visible {
  outline: 2px solid var(--blue-bright);
  outline-offset: 2px;
}
</style>
