const routes = [
  {
    path: "/",
    name: "MainLayout",
    component: () => import("@/layouts/MainLayout/MainLayout.vue"),
    redirect: { name: "home" },
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("pages/Home.vue")
      },
      {
        path: "/settings",
        name: "settings",
        component: () => import("pages/Settings.vue")
      }
    ]
  },

  {
    path: "/login",
    name: "login",
    component: () => import("pages/Login.vue")
  },

  {
    path: "/404",
    name: "notFound",
    component: () => import("pages/Error404.vue")
  },
  {
    path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
    redirect: { name: "notFound" }
  }
];

export default routes;
