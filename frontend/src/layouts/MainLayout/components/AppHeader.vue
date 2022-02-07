<template>
  <q-header class="text-secondary bg-accent relative">
    <q-toolbar elevated>
      <q-btn
        v-if="$q.screen.lt.md"
        dense
        flat
        round
        icon="menu"
        @click="toggleMenu"
      />
      <q-toolbar-title>
        {{ title }}
      </q-toolbar-title>
      <q-btn flat push no-caps rounded>
        <q-avatar> <q-img :src="user.image" /></q-avatar>
        <q-menu class="profile-card" fit anchor="bottom left" self="top left">
          <q-list padding bordered dense>
            <q-item>
              <q-item-section class="items-center space-left justify-between">
                <div class="row items-center no-wrap">
                  <q-avatar class="q-mr-md">
                    <q-img :src="user.image"
                  /></q-avatar>
                  <q-item-label>
                    <q-item-label-title>{{
                      `${user.firstName} ${user.lastName}`
                    }}</q-item-label-title>
                    <q-item-label-subtitle>{{
                      user.email
                    }}</q-item-label-subtitle>
                  </q-item-label>
                </div>
              </q-item-section>
              <q-separator spaced inset="item" />
            </q-item>
            <q-separator spaced />
            <q-item clickable class="row items-center">
              <q-icon color="primary" name="bluetooth" size="16px" />
              <q-item-section class="q-ml-xs">List item</q-item-section>
            </q-item>
            <q-separator spaced />
            <q-item clickable class="row items-center" @click="onLogout">
              <q-icon color="primary" name="logout" size="16px" />
              <q-item-section class="q-ml-xs">Log out</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<script>
import { useMenuState, useUserState, useGeneralState } from "@/composables";
export default {
  setup() {
    const { toggleMenu, title } = useMenuState();
    const { user, logout } = useUserState();
    const { router } = useGeneralState();
    const onLogout = async () => {
      router.push({ name: "login" });
      await logout();
    };
    return {
      toggleMenu,
      title,
      user,
      onLogout
    };
  }
};
</script>

<style lang="scss" scoped>
.profile-card {
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  width: 250px;
}
</style>
