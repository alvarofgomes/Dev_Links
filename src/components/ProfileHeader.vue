<script setup lang="ts">
import { perfil } from "@/data/links";
</script>

<template>
  <div class="profile">
    <div class="avatar-ring">
      <img :src="perfil.avatar" :alt="`Foto de perfil de ${perfil.nome}`" />
    </div>
    <div class="name">{{ perfil.nome }}</div>
    <div class="handle">{{ perfil.usuario }}</div>
    <div class="status"><span class="pulse" /> {{ perfil.status }}</div>
  </div>
</template>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}

.avatar-ring {
  width: 132px;
  height: 132px;
  border-radius: 50%;
  padding: 3px;
  background: var(--grad);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.4);
}
.light .avatar-ring {
  box-shadow: 0 14px 36px rgba(42, 71, 140, 0.22);
}

.avatar-ring img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  border: 3px solid var(--bg);
  transition: border-color 0.5s ease;
}

.name {
  font-size: 1.45rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}
.handle {
  font-size: 0.84rem;
  color: var(--faint);
  margin-top: -6px;
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: 0.78rem;
  color: var(--muted);
  padding: 6px 14px;
  border-radius: 999px;
  background: var(--surface);
  border: 1px solid var(--border);
  margin-top: 4px;
}
.pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34d399;
  box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.5);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.45);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(52, 211, 153, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(52, 211, 153, 0);
  }
}
</style>
