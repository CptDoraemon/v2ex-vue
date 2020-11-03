module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/v2ex-vue/'
    : '/'
};
