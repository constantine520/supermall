module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'asset': '@/asset',
        'common': '@/common',
        'network': '@/network',
        'components': '@/components',
        'views': 'views'
      }
    }
  }
}