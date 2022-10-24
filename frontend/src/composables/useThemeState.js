import { computed, ref, watch } from "vue";
import { Dark } from "quasar";

/**
 * @ref variables
 */
const darkMode = ref(false);

export default () => {
  /**
   * @Computed functions
   */
  const isDarkMode = computed(() => darkMode.value);

  /**
   * @Watch functions
   * @description Watch for changes in darkMode and set the Dark mode
   * @see https://quasar.dev/options/dark-mode
   */
  watch(darkMode, () => {
    Dark.set(darkMode.value);
  });
  return {
    isDarkMode,
    darkMode
  };
};
