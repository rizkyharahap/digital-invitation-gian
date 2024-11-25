import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/AmirahGian",
    },
    {
      path: "/AmirahGian",
      name: "AmirahGian",
      component: HomeView,
    },
    {
      path: "/AmirahGian/scan",
      name: "scan",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ScanView.vue"),
    },
    {
      path: "/AmirahGian/scan/:id",
      name: "Magic Link",
      component: () => import("../views/MagicLinkView.vue"),
    },
  ],
});

export default router;
