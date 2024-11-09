import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
      path: "/scan",
      name: "scan",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ScanView.vue"),
    },
  ],
});

export default router;
