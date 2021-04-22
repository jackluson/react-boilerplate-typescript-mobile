const {
  override,
  fixBabelImports,
  addLessLoader,
  addBabelPlugin,
  addPostcssPlugins,
} = require('customize-cra');

const px2vwBabelPlugin = require('babel-plugin-styled-components-px2vw');

const rewiredSourceMap = () => config => {
  config.devtool =
    config.mode === 'development' ? 'cheap-module-source-map' : false;
  return config;
};

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addLessLoader({
    modifyVars: {
      '@primary-color': '#13c2c2',
    },
    javascriptEnabled: true,
  }),
  addPostcssPlugins([
    require('postcss-px-to-viewport')({
      unitToConvert: 'px',
      viewportWidth: 750,
      unitPrecision: 3,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: /(\/|\\)(node_modules)(\/|\\)/,
    }),
    // only process antd-mobile
    require('postcss-px-to-viewport')({
      unitToConvert: 'px',
      viewportWidth: 375,
      unitPrecision: 3,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      include: /(\/|\\)(node_modules)(\/|\\)antd-mobile(\/|\\)/,
    }),
  ]),
  addBabelPlugin([
    px2vwBabelPlugin,
    {
      transformRuntime: true,
    },
  ]),
  // new BundleAnalyzerPlugin(),
  rewiredSourceMap(),
);
