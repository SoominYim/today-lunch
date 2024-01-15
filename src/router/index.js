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
      meta: {
        enterActiveClass: "animate__animated animate__fadeIn",
        leaveToClass: "animate__animated animate__fadeOut",
      },
    },
    {
      path: "/today-lunch/coffee",
      component: TodayCoffee,
      name: TodayCoffee,
      meta: {
        enterActiveClass: "animate__animated animate__fadeIn",
        leaveActiveClass: "animate__animated animate__fadeOut",
      },
    },
  ],
});
export default router;
