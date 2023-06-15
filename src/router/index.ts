import { createRouter, createWebHistory } from "vue-router";
import TheHeader from "@/components/TheHeader.vue";
// import Home from "@/pages/Home.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      component: () => import("@/pages/login/Login.vue"),
    },
    {
      path: "/home",
      components: {
        TheHeader,
        default: import("@/pages/Home.vue"),
      },
    },
    {
      path: "/movies/:heropy",
      name: "movie",
      components: {
        TheHeader,
        default: import("@/pages/movieDetail/Detail.vue"),
      },
    },
    {
      path: "/about",
      components: {
        TheHeader,
        default: import("@/pages/movieDetail/About.vue"),
      },
      children: [
        {
          path: "name",
          component: () => import("@/pages/movieDetail/AboutChildren.vue"),
        },
      ],
    },
    {
      path: "/:notFound(.*)*",
      component: () => import("@/pages/NotFound.vue"),
    },
  ],
});

export default router;
