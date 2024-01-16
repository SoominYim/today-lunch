const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/today-lunch/",
  devServer: {
    client: {
      overlay: false,
    },
  },

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
  outputDir: "./docs",

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
});
