<script setup lang="ts">
import { linksDestaque } from "@/data/links";
</script>

<template>
  <ul class="links">
    <li v-for="link in linksDestaque" :key="link.url">
      <a :href="link.url" target="_blank" rel="noopener noreferrer">
        <span class="ico"><ion-icon :name="link.icone" /></span>
        <span class="txt">
          <span class="label">{{ link.titulo }}</span>
          <span class="desc">{{ link.descricao }}</span>
        </span>
        <ion-icon class="arrow" name="arrow-forward" />
      </a>
    </li>
  </ul>
</template>

<style scoped>
.links {
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 22px;
}

a {
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 17px 20px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  text-decoration: none;
  color: var(--text);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition:
    transform 0.22s cubic-bezier(0.2, 0.7, 0.2, 1),
    border-color 0.22s,
    background 0.22s,
    box-shadow 0.22s;
}
a::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: var(--grad);
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.22s;
  pointer-events: none;
}
a:hover {
  transform: translateY(-3px);
  background: var(--surface-2);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.28);
}
.light a:hover {
  box-shadow: 0 16px 30px rgba(42, 71, 140, 0.16);
}
a:hover::before {
  opacity: 1;
}
a:focus-visible {
  outline: 2px solid var(--blue-bright);
  outline-offset: 3px;
}

.ico {
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  font-size: 1.15rem;
  color: var(--blue-bright);
}
.txt {
  display: flex;
  flex-direction: column;
  line-height: 1.3;
}
.label {
  font-weight: 600;
  font-size: 0.98rem;
}
.desc {
  font-size: 0.74rem;
  color: var(--faint);
}
.arrow {
  margin-left: auto;
  color: var(--faint);
  font-size: 1rem;
  transition:
    transform 0.22s,
    color 0.22s;
}
a:hover .arrow {
  transform: translateX(4px);
  color: var(--purple-br);
}
</style>
