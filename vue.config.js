module.exports = {
    devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },
        secure:true
        }
      }
  },
  configureWebpack: {
    externals: {
      //排除的模块名
      vue: 'Vue',
      "vue-router": 'VueRouter',
      moment: 'moment',
      axios:'axios'
   }
  }
}