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
        path: "/login",
        name: "login",
        component: () => import("pages/Login.vue")
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
    component: () => import("pages/Error404.vue")
  },
  {
    path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
    redirect: "/404"
  }
];

export default routes;
