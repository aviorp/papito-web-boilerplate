<template>
  <q-card class="q-pa-lg q-my-md" style="min-width: 225px">
    <header class="row items-center justify-between">
      <p
        :class="{ 'text-grey-1': isDarkMode }"
        class="row items-center font-weight-bold text-h6 text-black"
      >
        <slot name="title" />
      </p>
      <div class="row items-center q-gutter-md">
        <slot name="header-buttons" />
      </div>
    </header>
    <div class="row q-col-gutter-md q-mt-md justify-between">
      <slot />
    </div>
  </q-card>
</template>

<script>
import { useThemeState } from "@/composables";
export default {
  name: "SectionLayout",
  setup() {
    const { isDarkMode } = useThemeState();
    return {
      isDarkMode
    };
  }
};
</script>

<style lang="scss" scoped>
.q-card {
  border-radius: 10px;
  box-shadow: none !important;
}
</style>
