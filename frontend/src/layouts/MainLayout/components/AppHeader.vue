<template>
  <q-header
    dark
    class="bg-dark q-pt-sm q-px-sm fixed-top full-width"
    :class="{ 'bg-accent': !isDarkMode }"
  >
    <q-toolbar>
      <q-btn
        v-if="$q.screen.lt.md"
        dense
        flat
        round
        icon="menu"
        @click="toggleMenu"
      />
      <div class="row items-center no-wrap">
        <q-toolbar-title class="text-primary q-mr-md">{{
          title
        }}</q-toolbar-title>

        <q-input
          v-model="topBarSearch"
          placeholder="Search"
          style="min-width: 500px"
          class="q-mt-4xs"
          borderless
        >
          <template #prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script>
import {
  useMenuState,
  useUserState,
  useGeneralState,
  useThemeState
} from "@/composables";
export default {
  setup() {
    const { toggleMenu, title, topBarSearch } = useMenuState();
    const { user, logout } = useUserState();
    const { router } = useGeneralState();
    const { isDarkMode } = useThemeState();
    const onLogout = async () => {
      router.push({ name: "login" });
      await logout();
    };
    return {
      toggleMenu,
      title,
      topBarSearch,
      user,
      isDarkMode,
      onLogout
    };
  }
};
</script>

<style lang="scss" scoped></style>
