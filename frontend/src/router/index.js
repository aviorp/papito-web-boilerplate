import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes
});

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiredAuth && !localStorage.token) {
//     next({ name: "login" });
//   } else if (
//     to.name === "login" ||
//     (to.name === "register" && localStorage.token)
//   ) {
//     next({ name: "home" });
//   } else {
//     next();
//   }
// });

export default router;
