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
module.exports = {
    pwa: {
        name: "today-lunch",
        workboxOptions: {
            exclude: [/\.map$/, /manifest\.json$/, "index.html"], // 캐싱(하드에 저장하지 말라달라고)목록에서 제외 해달라는것임
        },
    },
};
