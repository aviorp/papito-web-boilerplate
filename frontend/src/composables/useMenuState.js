import { computed, ref, watch } from "vue";
import { MENU_ITEMS } from "./composables.constants";

/**
 * @ref variables
 */
const menuIsDrawerOpen = ref(true);
const title = ref("Title");
const topBarSearch = ref("");
export default () => {
  /**
   * @Computed functions
   */
  const items = computed(() => MENU_ITEMS);
  const isDrawerOpen = computed(() => menuIsDrawerOpen.value);
  /**
   * @Watch functions
   */

  watch(
    title,
    () => {
      document.title = `Papito Web Boilderplate | ${title.value}`;
    },
    { immediate: true }
  );
  const toggleMenu = () => (menuIsDrawerOpen.value = !menuIsDrawerOpen.value);
  return {
    items,
    title,
    isDrawerOpen,
    topBarSearch,
    toggleMenu
  };
};
