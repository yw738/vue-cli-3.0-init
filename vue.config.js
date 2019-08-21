module.exports = {
  outputDir: process.env.outputDir,
  assetsDir: 'static',
  publicPath: '/',
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8000,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'https://api.apiopen.top',
        changeOrigin: true
      }
    }
  }
}
