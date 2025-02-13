import pluginJs from '@eslint/js';
import { configs as tsConfigs } from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';

// На момент написання офіційного flat-конфігу в eslint-config-prettier ще немає.
// Тож ми імпортуємо все під ім'ям prettierConfig і використаємо його rules.
import * as prettierConfig from 'eslint-config-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // 1. Базове налаштування: які файли лінтимо, який парсер, глобалі та інше
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'], // Можна додати також .json, .mts тощо
    languageOptions: {
      parser: tsParser, // Парсер для TS (може лінтити й JS)
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        // Якщо потрібно type-checking, додайте:
        // project: './tsconfig.json',
      },
      globals: {
        ...globals.browser,
        // ...globals.node, // розкоментуйте, якщо потрібні глобалі Node.js
      },
    },
  },

  // 2. ESLint “рекомендований” (еквівалентне extends: ['eslint:recommended'])
  pluginJs.configs.recommended,

  // 3. Рекомендований конфіг для TypeScript (еквівалентне extends: ['plugin:@typescript-eslint/recommended'])
  tsConfigs.recommended,

  // 4. Ваші кастомні правила (для JS, Jest, TypeScript тощо)
  {
    rules: {
      // Приклад правил для Jest (але зауважте, що це працюватиме повністю,
      // лише якщо встановлений і підключений плагін eslint-plugin-jest).
      'jest/no-deprecated-functions': 'off',
      'jest/lowercase-name': 'off',
      'jest/prefer-lowercase-title': 'off',
      'jest/valid-expect': [
        'warn',
        {
          maxArgs: 2,
        },
      ],

      // TypeScript rules
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-invalid-void-type': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/prefer-literal-enum-member': 'error',
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': [
        'warn',
        {
          allowArgumentsExplicitlyTypedAsAny: true,
        },
      ],

      // Інші правила
      'multiline-ternary': 'off',
      complexity: 'off',
    },
  },

  // 5. Правила eslint-config-prettier
  // У старому .eslintrc було: extends: ['prettier'].
  // У flat config ми вручну додаємо та вимикаємо стилістичні конфлікти.
  {
    rules: {
      ...(prettierConfig.rules || {}),
    },
  },

  // 6. Які шляхи ігноруємо
  {
    ignores: [
      'node_modules',
      'tsconfig.json',
    ],
  },

  // 7. Додатково, якщо хочете ще раз уточнити обсяг файлів
  // (Але зазвичай достатньо вказати "files" на початку)
  {
    files: ['**/*.js', '**/*.ts', '**/*.json', '**/*.mts', '**/*.mjs', '**/*.tsx'],
  },
];