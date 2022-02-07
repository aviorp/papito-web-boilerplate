<template>
  <q-drawer
    v-model="isDrawerOpen"
    dark
    side="left"
    class="bg-accent fixed"
    behavior="push"
    persistent
  >
    <div
      class="row items-center justify-between q-px-lg q-ml-4xs q-pt-md q-pb-lg text-secondary"
    >
      <h6>App Icon</h6>
      <q-icon
        v-if="$q.screen.lt.md"
        name="close"
        class="cursor-pointer"
        size="20px"
        @click="toggleMenu"
      />
    </div>
    <!-- drawer content -->
    <q-list>
      <q-item
        v-for="item in items"
        :key="item.name"
        :to="item.route"
        :active="item.name === $route.name"
        clickable
        v-ripple
        exact
        dark
        rounded
        class="text-primary"
        active-class="text-white bg-gradient"
      >
        <q-item-section avatar>
          <q-icon :name="item.icon" />
        </q-item-section>
        <q-item-section>{{ item.name }}</q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
import { useMenuState, useUserState } from "@/composables";

import { useRouter } from "vue-router";
export default {
  setup() {
    const { isDrawerOpen, items, toggleMenu } = useMenuState();
    const { user, logout } = useUserState();
    const router = useRouter();
    const onLogout = () => {
      router.push({ name: "login" });
      logout();
    };
    return {
      isDrawerOpen,
      items,
      user,
      onLogout,
      toggleMenu
    };
  }
};
</script>

<style lang="scss" scoped>
.bg-gradient {
  background: linear-gradient(98deg, #c48eff, $primary 94%) !important;
  border-radius: 0 25px 25px 0 !important;
  max-width: 90% !important;
  &:hover {
    background-color: red !important;
  }
}
</style>
