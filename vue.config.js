const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: "/",
    outputDir: "./docs",
    // css: {
    //     loaderOptions: {
    //         sass: {
    //             includePaths: [path.resolve(__dirname, "./node_modules/compass-mixins/lib")],
    //         },
    //     },
    // },
});
