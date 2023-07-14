<template>
  <div>
    <today-lunch></today-lunch>
  </div>
</template>

<script>
import TodayLunch from "@/components/TodayLunch.vue";

export default {
  name: "App",
  components: {
    TodayLunch,
  },
};
</script>

<style>
@import "css/reset.css";

#app {
  text-align: center;
}
</style>
