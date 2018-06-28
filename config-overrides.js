const rewireMobX = require('react-app-rewire-mobx');
const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', {
    libraryName: 'antd-mobile',
    style: 'css'
  }], config);
  return rewireMobX(config, env);
}
