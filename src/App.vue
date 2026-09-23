<script setup lang="ts">
import NetworkBackground from "@/components/NetworkBackground.vue";
import ProfileHeader from "@/components/ProfileHeader.vue";
import ThemeSwitch from "@/components/ThemeSwitch.vue";
import LinkList from "@/components/LinkList.vue";
import SocialLinks from "@/components/SocialLinks.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <NetworkBackground />

  <main class="container">
    <ProfileHeader />
    <ThemeSwitch />
    <LinkList />
    <SocialLinks />
    <AppFooter />
  </main>
</template>

<style scoped>
.container {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
  padding: clamp(40px, 9vh, 88px) 24px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  min-height: 100svh;
  justify-content: center;
}
</style>
