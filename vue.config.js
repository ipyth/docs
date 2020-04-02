const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('docs', path.resolve(__dirname, 'docs/'))
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true,
      })
  },
}
