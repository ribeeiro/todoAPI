module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: ['react', 'prettier', '@typescript-eslint', 'react-hooks'],
  root: true,
  ignorePatterns: ['vite-env.d.ts'],
  rules: {
    'prettier/prettier': 'error',
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx', 'ts'] }
    ],
    semi: 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/member-delimiter-style': 'off'
  }
};
