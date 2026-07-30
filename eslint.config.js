const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const tsParser = require('@typescript-eslint/parser');
const simpleImportSort = require('eslint-plugin-simple-import-sort');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
  {
    rules: {
      'react/display-name': 'off',
    },
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [['^react', '^react-dom'], ['^@?\\w'], ['^@/'], ['^[.]']],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
]);
