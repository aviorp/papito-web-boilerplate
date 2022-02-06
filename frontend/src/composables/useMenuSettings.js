import { computed, ref, watch } from "vue";
import { Dark } from "quasar";
import { MENU_ITEMS } from "./composables.constants";
const menuItems = ref(MENU_ITEMS);
const menuIsDrawerOpen = ref(true);
export default () => {
  const items = computed(() => menuItems.value);
  // const title = computed(() => menuTitle.value);
  const title = ref("Title");
  const isDrawerOpen = computed(() => menuIsDrawerOpen.value);
  const isDarkMode = ref(false);
  watch(() => {
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
