<script setup>
import { RouterView, RouterLink } from "vue-router";
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <TheHeader />
  <RouterView />
  <TheFooter />
</template>

<style scoped></style>
