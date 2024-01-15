import { createRouter, createWebHistory } from "vue-router";
import TodayLunch from "@/views/TodayLunch.vue";
import TodayCoffee from "@/views/TodayCoffee";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: TodayLunch,
      name: TodayLunch,
    },
    {
      path: "/coffee",
      component: TodayCoffee,
      name: TodayCoffee,
    },
  ],
});
export default router;
