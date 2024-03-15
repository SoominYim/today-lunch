<template>
  <div>
    <today-anime></today-anime>
    <today-lunch></today-lunch>
  </div>
</template>
<script>
import TodayLunch from "@/components/TodayLunch.vue";
import TodayAnime from "@/components/TodayAnime.vue";

export default {
  name: "TodayMain",
  components: {
    TodayLunch,
    TodayAnime,
  },
};
</script>
<style lang=""></style>
