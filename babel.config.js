module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['@babel/plugin-transform-flow-strip-types'],
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.jsx', '.js', '.json', '.svg'],
        },
      ],
    ],
  };
};
