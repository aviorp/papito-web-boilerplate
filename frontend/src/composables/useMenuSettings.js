import { computed, ref, watch } from "vue";
import { Dark } from "quasar";
const menuItems = ref([
  { name: "Home", route: { name: "Home" }, icon: "home" },
  { name: "Settings", route: { name: "About" }, icon: "settings" }
]);
const menuIsDrawerOpen = ref(true);
export default () => {
  const items = computed(() => menuItems.value);
  // const title = computed(() => menuTitle.value);
  const title = ref("Static Title");
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
