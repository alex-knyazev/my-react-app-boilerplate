const rewireCssModules = require('react-app-rewire-css-modules');
const rewireAliases = require('react-app-rewire-alias');
const { compose } = require('react-app-rewired');

module.exports = function override(config, env) {
  const rewires = compose(
    rewireCssModules,
    rewireAliases({
      alias: {
        '@': '~/src',
      },
    }),
  );
  return rewires(config, env);
};
