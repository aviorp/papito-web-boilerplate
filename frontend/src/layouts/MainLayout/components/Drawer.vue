<template>
  <q-drawer
    v-model="isDrawerOpen"
    side="left"
    elevated
    behavior="desktop"
    class="relative"
    persistent
  >
    <header
      class="row items-center justify-center q-gutter-md q-px-lg q-py-2xl"
    >
      <q-avatar size="84px" class="avatar">
        <img :src="user.image" />
      </q-avatar>
      <h6 class="divider">
        Hello , {{ `${user.firstName} ${user.lastName}` }}
      </h6>
    </header>
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
        active-class="bg-secondary text-primary"
      >
        <q-item-section avatar>
          <q-icon color="primary" :name="item.icon" />
        </q-item-section>
        <q-item-section>{{ item.name }}</q-item-section>
      </q-item>
    </q-list>
    <q-item
      @click="onLogout"
      class="fixed-bottom bg-red row items-center text-white"
      clickable
      v-ripple
    >
      <q-item-section avatar>
        <q-icon color="white" name="logout" />
      </q-item-section>
      <q-item-section>Logout</q-item-section>
    </q-item>
  </q-drawer>
</template>

<script>
import useMenuSettings from "@/composables/useMenuSettings";
import useUserState from "@/composables/useUserState";
import useGeneralStates from "@/composables/useGeneralStates";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { isDrawerOpen, items } = useMenuSettings();
    const { user, logout } = useUserState();
    const { setNotification } = useGeneralStates();
    const $router = useRouter();
    const onLogout = () => {
      $router.push({ name: "login" });
      logout();
      setNotification("Logged out Successfully");
    };
    return {
      isDrawerOpen,
      items,
      user,
      onLogout,
      $router
    };
  }
};
</script>

<style lang="scss" scoped>
.divider {
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid $primary;
    margin-top: 10px;
  }
}
</style>
