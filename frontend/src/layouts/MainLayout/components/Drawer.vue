<template>
  <q-drawer
    v-model="isDrawerOpen"
    side="left"
    class="
      bg-transparent
      fixed
      q-py-xl q-mt-2xs
      items-center
      justify-center
      text-center
      fixed-top
    "
    persistent
  >
    <div class="column text-secondary justify-center items-center">
      <!-- drawer title/logo -->
      <div
        class="row items-center justify-center"
        :class="{ 'justify-between q-mx-xl': $q.screen.lt.md }"
      >
        <p class="text-primary font-semibold">Demo Logo Title</p>
        <!-- close icon -->
        <q-icon
          v-if="$q.screen.lt.md"
          name="close"
          class="cursor-pointer q-ml-4xl"
          size="20px"
          @click="toggleMenu"
        />
      </div>
      <!-- user logo -->
      <q-avatar size="130px" class="avatar q-my-xl">
        <img :src="userImage" />
      </q-avatar>
      <!-- user name -->
      <p
        class="text-black font-weight-semibold text-h6"
        :class="{ 'text-grey-1': isDarkMode }"
      >
        {{ fullName }}
      </p>
    </div>
    <!-- drawer content -->
    <section class="column" style="height: 400px !important">
      <q-list class="text-left q-py-md scrollable">
        <q-item
          v-for="item in items"
          :key="item.name"
          :to="item.route"
          :active="isActiveRoute(item.route)"
          clickable
          v-ripple
          exact
          dark
          rounded
          class="text-primary"
          active-class="border-right"
        >
          <q-item-section avatar class="row items-center">
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section>{{ item.name }}</q-item-section>
        </q-item>
      </q-list>
    </section>
    <q-item
      clickable
      v-ripple
      exact
      dark
      rounded
      class="text-red fixed full-width row items-center"
      @click="onLogout"
    >
      <q-item-section>Sign Out</q-item-section>
    </q-item>
  </q-drawer>
</template>

<script>
import { useMenuState, useUserState, useThemeState } from "@/composables";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { isDrawerOpen, items, toggleMenu, title } = useMenuState();
    const { fullName, removeToken, userImage } = useUserState();
    const { isDarkMode } = useThemeState();

    const router = useRouter();

    const onLogout = () => {
      removeToken();
      router.push({ name: "login" });
    };

    const isActiveRoute = drawerItem =>
      drawerItem === router.currentRoute.value.path;

    return {
      isDrawerOpen,
      items,
      title,
      fullName,
      onLogout,
      isActiveRoute,
      toggleMenu,
      isDarkMode,
      userImage
    };
  }
};
</script>

<style lang="scss" scoped>
.border-right::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 4px;
  background-color: $primary;
  border-radius: 0 25px 25px 0;
}
.avatar {
  img {
    object-fit: cover;
  }
}
</style>
