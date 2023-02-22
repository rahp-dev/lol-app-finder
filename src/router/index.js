import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/HomeView.vue"),
      name: "home",
    },
    {
      path: "/champions",
      component: () => import("../views/ChampionsView.vue"),
      name: "champions",
    },
    {
      path: "/summoner",
      component: () => import("../views/SummonerView.vue"),
      name: "summoner",
    },
  ],
});

export default router;
