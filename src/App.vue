<template>
  <div>
    <today-header></today-header>
    <today-lunch></today-lunch>
    <div class="footer">
      <today-footer></today-footer>
    </div>
  </div>
</template>

<script>
import TodayLunch from "@/components/TodayLunch.vue";
import TodayHeader from "@/components/TodayHeader.vue";
import TodayFooter from "./components/TodayFooter.vue";

export default {
  name: "App",
  components: {
    TodayLunch,
    TodayHeader,
    TodayFooter
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
  color: var(--color-text-primary);
  background-color: var(--color-background-primary);
  text-align: center;

}

.footer {
  box-sizing: border-box;
  background: #333;
  padding: 50px;
}
</style>
