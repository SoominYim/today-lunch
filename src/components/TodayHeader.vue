<template>
    <v-app>
        <div class="container">
            <v-toolbar density="compact" border :elevation="8" theme="dark" with-background>
                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
                <v-toolbar-title></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>mdi-reply</v-icon>
                </v-btn>
            </v-toolbar>
        </div>
        <v-navigation-drawer v-model="drawer">
        </v-navigation-drawer>
    </v-app>
</template>
<script>
export default {
    data() {
        return {
            drawer: false,
        }
    }
}
</script>
<style lang="scss" scoped>
.container {
    background-color: none;
    height: 100px;
    width: 100vw;
    position: relative;
    ;
}
</style>