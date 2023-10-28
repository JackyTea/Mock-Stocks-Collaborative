module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    env: {
      browser: true,
      es2023: true,
    },
  },
  rules: {
    'no-console': 'error',
    semi: 'error',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    'no-nested-ternary': 'error',
    'no-param-reassign': 'error',
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',
  },
};
