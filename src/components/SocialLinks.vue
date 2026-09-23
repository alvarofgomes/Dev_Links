<script setup lang="ts">
import { perfil, redesSociais } from "@/data/links";
</script>

<template>
  <div class="social">
    <a
      v-for="rede in redesSociais"
      :key="rede.url"
      :href="rede.url"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="`${rede.nome} de ${perfil.nome}`"
    >
      <ion-icon :name="rede.icone" aria-hidden="true" />
    </a>
  </div>
</template>

<style scoped>
.social {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
}

a {
  width: 46px;
  height: 46px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--muted);
  font-size: 1.25rem;
  text-decoration: none;
  transition:
    color 0.22s,
    border-color 0.22s,
    transform 0.22s,
    background 0.22s;
}
a:hover {
  color: var(--text);
  border-color: var(--border-2);
  background: var(--surface-2);
  transform: translateY(-3px);
}
a:focus-visible {
  outline: 2px solid var(--blue-bright);
  outline-offset: 3px;
}
</style>
