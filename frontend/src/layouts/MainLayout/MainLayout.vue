<template>
  <q-layout view="lHh hpR lFr">
    <drawer />
    <app-header class="q-mx-md" />
    <q-page-container>
      <q-scroll-area @scroll="onScroll" style="height: 700px">
        <router-view class="q-pb-2xl" />
      </q-scroll-area>
    </q-page-container>
  </q-layout>
</template>

<script>
import { useThemeState } from "@/composables";
import Drawer from "./components/Drawer.vue";
import AppHeader from "./components/AppHeader.vue";
import { ref } from "vue";

export default {
  components: {
    AppHeader,
    Drawer
  },
  setup() {
    const { isDarkMode } = useThemeState();

    const bar = ref(true);

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
