module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false
  },
  // babelOptions: {
  //   presets: ['@babel/preset-react'],
  // },
  env: {
    commonjs: true,
    jest: true,
    es6: true,
    node: true,
    browser: true
  },
  extends: ['prettier'],
  rules: {
    'no-undef': 'error',
    'no-unused-vars': 'warn',
    'no-console': 'off'
  }
};
