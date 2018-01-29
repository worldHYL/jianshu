module.exports = {
  /*
  ** Headers of the page
  */
  //插件
    plugins:[
        {src:'~/plugins/swiper-plugin.js',ssr:false}
    ],
  head: {
    title: '简书',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'jianshu' }
    ],
    link: [
      { rel: 'icon', type:'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css','~/assets/css/normalize.css','~/assets/css/font-awesome/css/font-awesome.css','swiper/dist/css/swiper.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios']
    /*
    ** Run ESLINT on save
    */
    // extend (config, ctx) {
    //   if (ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
