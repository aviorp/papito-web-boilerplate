<template>
  <page-layout>
    <section-layout>
      <template #title>General Settings</template>
      <q-list>
        <q-item class="row items-center">
          Set Dark Mode
          <q-item-section>
            <q-toggle
              v-model="darkMode"
              checked-icon="plus"
              unchecked-icon="sunny"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </section-layout>
  </page-layout>
</template>

<script>
import PageLayout from "@/layouts/PageLayout.vue";
import SectionLayout from "@/layouts/SectionLayout.vue";
import { useThemeState } from "@/composables";
export default {
  name: "Settings",
  components: {
    PageLayout,
    SectionLayout
  },
  setup() {
    const { darkMode } = useThemeState();

    return {
      darkMode
    };
  }
};
</script>

<style lang="scss" scoped></style>
