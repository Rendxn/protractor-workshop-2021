module.exports = {
  env: {
    browser: true,
    es2021: true,
    jasmine: true,
    protractor: true,
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import'],
  settings: {
    'import/extensions': ['.ts'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['protractor/**/*.ts', 'test/**/*.ts', 'src/**/*.ts'],
      },
    ],
    'import/extensions': ['error', 'ignorePackages', {
      ts: 'never',
    }],
  },
};
