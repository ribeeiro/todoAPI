module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: ['airbnb-base', 'prettier'],
  overrides: [],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 8
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'consistent-return': 'off',
    'func-names': 'off',
    'no-unused-expressions': 'off',
    radix: 'off'
  }
};
