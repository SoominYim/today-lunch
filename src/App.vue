<template>
  <div>
    <today-header></today-header>
    <today-lunch></today-lunch>
  </div>
</template>

<script>
import TodayLunch from "@/components/TodayLunch.vue";
import TodayHeader from "@/components/TodayHeader.vue";

export default {
  name: "App",
  components: {
    TodayLunch,
    TodayHeader,
  },
};
</script>

<style lang="scss">
@import "@/css/reset.css";
@import "@/css/root.scss";

#app {
  width: 100vw;
  height: 100vh;
  color: var(--color-text-primary);
  background-color: var(--color-background-primary);
  text-align: center;

}
</style>
