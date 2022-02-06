<template>
  <q-layout view="hHh LpR lFf">
    <drawer />
    <q-header elevated class="bg-white text-primary">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleMenu" />
        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar> -->
          {{ title }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import useMenuSettings from "@/composables/useMenuSettings";
import Drawer from "./components/Drawer.vue";
export default {
  components: {
    Drawer
  },
  setup() {
    const { title, toggleMenu, isDarkMode } = useMenuSettings();
    return {
      title,
      toggleMenu,
      isDarkMode
    };
  }
};
</script>
