import { computed, ref, watch } from "vue";
import { Dark } from "quasar";
import { MENU_ITEMS } from "./composables.constants";

const menuIsDrawerOpen = ref(true);
const isDarkMode = ref(false);
const title = ref("Title");
export default () => {
  const items = computed(() => MENU_ITEMS);
  const isDrawerOpen = computed(() => menuIsDrawerOpen.value);
  watch(isDarkMode, () => {
    Dark.set(isDarkMode.value);
  });
  const toggleMenu = () => (menuIsDrawerOpen.value = !menuIsDrawerOpen.value);
  return {
    items,
    title,
    isDrawerOpen,
    isDarkMode,
    toggleMenu
  };
};
