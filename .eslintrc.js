module.exports = {
  root: true,
  extends: ['standard'],
  globals: {
    DEVELOPMENT: 'readonly',
  },
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
};
