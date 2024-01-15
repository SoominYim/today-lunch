<template>
  <div class="main_con">
    <today-header></today-header>
    <div class="content">
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in" :enter-to-class="route.meta.enterToClass"
          :enter-active-class="route.meta.enterActiveClass" :leave-to-class="route.meta.leaveToClass"
          :leave-active-class="route.meta.leaveActiveClass">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
    <div class="footer">
      <today-footer></today-footer>
    </div>
  </div>
</template>

<script>
import TodayHeader from "@/components/TodayHeader.vue";
import TodayFooter from "@/components/TodayFooter.vue";

export default {
  name: "App",
  components: {
    TodayHeader,
    TodayFooter,
  },
};
</script>

<style lang="scss">
@import "@/css/reset.css";
@import "@/css/root.scss";

#app {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  color: var(--color-text-primary);
  background-color: var(--color-background-primary);
  text-align: center;
  justify-content: center;
}

.footer {
  position: fixed;
  width: 100%;
  height: 150px;
  box-sizing: border-box;
  background: #333;
  padding: 30px;
  bottom: 0;
  left: 0;
}

.animate__animated.animate__zoomIn,
.animate__animated.animate__zoomOut {
  --animate-duration: 1.5s;
}

.animate__animated.animate__fadeIn,
.animate__animated.animate__fadeOut {
  --animate-duration: 2s;
}
</style>
