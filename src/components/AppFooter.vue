<script setup lang="ts">
import { linkRodape, perfil } from "@/data/links";
</script>

<template>
  <footer>
    <span class="prompt">$</span> desenvolvido por
    <a :href="linkRodape" target="_blank" rel="noopener noreferrer">{{ perfil.nome }}</a>
  </footer>
</template>

<style scoped>
footer {
  margin-top: 30px;
  text-align: center;
  font-size: 0.76rem;
  color: var(--faint);
}
.prompt {
  color: var(--blue-bright);
}
a {
  color: var(--muted);
  text-decoration: none;
  border-bottom: 1px solid var(--border-2);
}
a:hover {
  color: var(--blue-bright);
}
</style>
