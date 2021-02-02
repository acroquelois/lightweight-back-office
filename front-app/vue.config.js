module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    // GraphQL Loader
    config.module
      .rule('graphql')
      .test(/\.graphql$/)
      .use('graphql-tag/loader')
      .loader('graphql-tag/loader')
      .end()
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('html-loader').loader('html-loader')
  },
}
