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
        meta: {
          requiredAuth: true
        },
        component: () => import("pages/Home.vue")
      },
      {
        path: "/settings",
        name: "settings",
        meta: {
          requiredAuth: true
        },
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
    path: "/register",
    name: "register",
    component: () => import("pages/Register.vue")
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
