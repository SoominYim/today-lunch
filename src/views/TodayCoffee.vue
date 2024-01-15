<template lang="">
  <div>
    <v-card max-width="100%" class="mx-auto" color="grey-lighten-3">
      <v-layout>
        <v-app-bar color="teal-darken-4" image="">
          <template v-slot:image>
            <v-img gradient="to top right, rgba(51, 51, 51), rgba(100, 100, 100)"></v-img>
          </template>
          <v-app-bar-title>커 피 사 줄 사 람</v-app-bar-title>
        </v-app-bar>
        <v-main> </v-main>
      </v-layout>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "TodayCoffee",
  components: {},
};
</script>
<style lang="scss" scoped>
@font-face {
  font-family: 'KCCMurukmuruk';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/KCCMurukmuruk.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

* {
  font-family: 'KCCMurukmuruk';
}
</style>
