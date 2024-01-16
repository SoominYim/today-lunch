import { createRouter, createWebHistory } from "vue-router";
import TodayMain from "@/views/TodayMain.vue";
import TodayCoffee from "@/views/TodayCoffee";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/today-lunch",
      component: TodayMain,
      name: TodayMain,
    },
    {
      path: "/today-lunch/coffee",
      component: TodayCoffee,
      name: TodayCoffee,
    },
  ],
});
export default router;
