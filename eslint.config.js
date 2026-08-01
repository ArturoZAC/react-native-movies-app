const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const tsParser = require('@typescript-eslint/parser');
const simpleImportSort = require('eslint-plugin-simple-import-sort');
const pluginQuery = require('@tanstack/eslint-plugin-query');

module.exports = defineConfig([
  expoConfig,
  ...pluginQuery.configs['flat/recommended'],
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
          groups: [
            // 1° React puro (react, react-dom)
            ['^react', '^react-dom'],
            // 2° React Native (react-native-*)
            ['^react-native'],
            // 3° Expo Router
            ['^expo-router'],
            // 4° Otras librerías de terceros (axios, zustand, @tanstack, @expo/vector-icons...)
            ['^@?\\w'],
            // 5° Imports propios con alias (@/modules/..., @/shared/...)
            ['^@/'],
            // 6° Imports relativos (./, ../)
            ['^[.]'],
            // 7° CSS al final
            ['\\.css$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
]);
