import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { STORAGE_KEYS } from "@/common/constants";
import { useUserState } from "@/composables";
const router = createRouter({
  history: createWebHistory(),
  routes
});

const { removeToken } = useUserState();

router.beforeEach((to, from, next) => {
  const token = localStorage[STORAGE_KEYS.TOKEN];
  if (to.meta.requiredAuth && !token) {
    if (from.name === "login") {
      next();
    } else {
      removeToken();
      next({ name: "login" });
    }
  } else if ((to.name === "login" || to.name === "register") && token) {
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;
