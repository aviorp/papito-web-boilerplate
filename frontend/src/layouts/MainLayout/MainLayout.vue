<template>
  <q-layout view="lHh hpR lFr">
    <drawer />
    <app-header />
    <q-page-container>
      <q-ajax-bar
        ref="bar"
        position="top"
        color="accent"
        size="7px"
        skip-hijack
      />
      <q-scroll-area
        style="height: 1280px; max-height: 100vh"
        @scroll="onScroll"
      >
        <router-view />
      </q-scroll-area>
    </q-page-container>
  </q-layout>
</template>

<script>
import { useMenuState, useUserState } from "@/composables";
import Drawer from "./components/Drawer.vue";
import AppHeader from "./components/AppHeader.vue";
import { onMounted, ref } from "vue";
import { getPropFromToken } from "@/utils";
export default {
  components: {
    AppHeader,
    Drawer
  },
  setup() {
    const { isDarkMode } = useMenuState();
    const { user } = useUserState();
    const bar = ref(true);
    onMounted(() => {
      if (localStorage.token) {
        user.value = getPropFromToken();
      }
    });
    const onScroll = ({ verticalPosition }) => {
      // if (verticalPosition > 100) {
      //   toolbarBehavior.hide = true;
      // } else {
      //   toolbarBehavior.hide = false;
      // }
    };
    return {
      bar,
      isDarkMode,
      onScroll
    };
  }
};
</script>
