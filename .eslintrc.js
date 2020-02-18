 module.exports = {
  env: {
    browser: 1,
    node: 1
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  plugins: ['@typescript-eslint', 'sort-imports-es6'],
  root: true,
  rules: {
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 0
    }],
    'no-console': 'error',
    'no-empty': 'error',
    'sort-keys': 'error',
    'sort-imports-es6/sort-imports-es6': ['error', {
      ignoreCase: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
    }],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
