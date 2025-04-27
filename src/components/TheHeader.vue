<template>
  <header>
    <router-link
      to="/"
      :class="[
        'header__logo',
        isHomepage ? 'header__logo-disabled' : 'header__logo_active',
      ]"
      disabled="true"
    >
      <img src="@/assets/logo.png" class="header__logo" />
    </router-link>

    <ul>
      <li>
        <RouterLink to="/checkout" class="header__drop">Корзина</RouterLink>
      </li>

      <li>
        <RouterLink to="/likes" class="header__drop">Избранное</RouterLink>
      </li>
      <li>
        <RouterLink to="/addbook" class="header__drop"
          >Добавить книгу</RouterLink
        >
      </li>
    </ul>
  </header>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { storeToRefs } from "pinia";
import { RouterLink, useRoute } from "vue-router";

const isHomepage = computed(() => route.fullPath === "/");
</script>

<style scoped>
header {
  display: flex;
  gap: 80px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
}

.header__logo {
  width: 140px;
  color: lightgray;
  text-decoration: none;
}

.header__drop {
  font-weight: 600;
  text-decoration: none;
  color: black;
}
.header__drop:hover {
  text-decoration: underline;
}

ul {
  display: flex;
  gap: 48px;
  list-style: none;
  padding: 0;
}

.header__logo-disabled {
  pointer-events: none;
}

.header__logo_active {
  color: #ffa801;
}

.header__logo_active:hover {
  opacity: 0.9;
  transition: opacity 0.3s ease-in;
}
</style>
