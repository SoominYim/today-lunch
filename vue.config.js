const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: "/today-lunch/",
    outputDir: "./docs",
    // resolve: {
    //     alias: {
    //         "@": fileURLToPath(new URL("./src", import.meta.url)),
    //     },
    // },
    // base: "/today-lunch/",
    // css: {
    //     loaderOptions: {
    //         sass: {
    //             includePaths: [path.resolve(__dirname, "./node_modules/compass-mixins/lib")],
    //         },
    //     },
    // },
});
