<template>
  <page-layout>
    <section-layout>
      <template #title>General Settings</template>
      <q-list>
        <q-item class="row items-center">
          Set Dark Mode
          <q-item-section>
            <q-toggle
              v-model="isDarkMode"
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
import { useMenuState } from "@/composables";
import { UserRepository } from "@/repositories";
export default {
  name: "Settings",
  components: {
    PageLayout,
    SectionLayout
  },
  setup() {
    const { isDarkMode } = useMenuState();
    const triggerLoading = () => {
      showLoading();
      setTimeout(() => {
        hideLoading();
      }, 3000);
    };
    const getUsers = async () => {
      try {
        const users = await UserRepository.getUsers();
        console.log(users);
      } catch (error) {
        console.log(error);
      }
    };
    return {
      isDarkMode,
      triggerLoading,
      getUsers
    };
  }
};
</script>

<style lang="scss" scoped></style>
