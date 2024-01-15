<template>
  <div class="main_con">
    <today-header></today-header>
    <today-anime></today-anime>
    <today-lunch></today-lunch>
    <div class="footer">
      <today-footer></today-footer>
    </div>
  </div>
</template>

<script>
import TodayLunch from "@/views/TodayLunch.vue";
import TodayHeader from "@/components/TodayHeader.vue";
import TodayFooter from "@/components/TodayFooter.vue";
import TodayAnime from "@/components/TodayAnime.vue"

export default {
  name: "App",
  components: {
    TodayLunch,
    TodayHeader,
    TodayFooter,
    TodayAnime
  },
};
</script>

<style lang="scss">
@import "@/css/reset.css";
@import "@/css/root.scss";

#app {
  overflow: visible;
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
</style>
