module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:node/recommended'],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module',
  },
  env: {
    node: true,
    es2023: true,
  },
  rules: {
    'no-console': 'error',
    semi: 'error',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/no-loop-func': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/no-var-requires': 'error',
    'no-nested-ternary': 'error',
    'no-param-reassign': 'error',
    'no-loop-func': 'off',
    'eqeqeq': 'error',
    'no-return-await': 'error',
    'require-await': 'error',
    'no-unused-vars': 'error',
    'callback-return': 'error',
    'handle-callback-err': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'no-script-url': 'error',
    'no-throw-literal': 'error',
    'node/no-deprecated-api': 'error'

  },
};
