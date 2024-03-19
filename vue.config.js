const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    sourceMap: true
    // loaderOptions: {
    //   sass: {
    //     prependData: '@import "~@/assets/scss/_function.scss";@import "~@/assets/scss/_mixin.scss";'
    //   },
    // }
  }
});
