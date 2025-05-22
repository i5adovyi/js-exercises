import js from '@eslint/js';
import jestPlugin from 'eslint-plugin-jest';
import noOnlyTests from 'eslint-plugin-no-only-tests';
import vitestPlugin from 'eslint-plugin-vitest';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  {
    // JavaScript files
    files: ['**/*.{js,jsx}'],
    plugins: {
      jest: jestPlugin,
      vitest: vitestPlugin,
      'no-only-tests': noOnlyTests
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        console: 'readonly',
        module: 'readonly',
        require: 'readonly'
      }
    },
    rules: {
      // Test rules
      'no-only-tests/no-only-tests': 'error',
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/valid-expect': [
        'error',
        {
          maxArgs: 2,
        },
      ],
      
      // General code quality
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'no-console': 'warn',
      'no-throw-literal': 'error',
      'no-multiple-empty-lines': ['error', {max: 1}],
      'padding-line-between-statements': [
        'error',
        {blankLine: 'always', prev: 'import', next: '*'},
        {blankLine: 'any', prev: 'import', next: 'import'},
        {blankLine: 'always', prev: '*', next: 'return'},
        {blankLine: 'always', prev: 'block-like', next: '*'},
      ]
    }
  },
  // TypeScript files
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      jest: jestPlugin,
      vitest: vitestPlugin,
      'no-only-tests': noOnlyTests
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        console: 'readonly',
        module: 'readonly',
        require: 'readonly'
      },
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
        project: './tsconfig.json'
      }
    },
    rules: {
      // Test rules
      'no-only-tests/no-only-tests': 'error',
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/valid-expect': [
        'error',
        {
          maxArgs: 2,
        },
      ],
      
      // TypeScript rules
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      
      // General code quality
      'no-unused-vars': 'off', // Using TypeScript version instead
      'no-undef': 'warn',
      'no-console': 'warn',
      'no-throw-literal': 'error',
      'no-multiple-empty-lines': ['error', {max: 1}],
      'padding-line-between-statements': [
        'error',
        {blankLine: 'always', prev: 'import', next: '*'},
        {blankLine: 'any', prev: 'import', next: 'import'},
        {blankLine: 'always', prev: '*', next: 'return'},
        {blankLine: 'always', prev: 'block-like', next: '*'},
      ]
    }
  },
  {
    files: ['**/*.test.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    }
  },
  {
    ignores: [
      'node_modules/**', 
      'dist/**',
      'coverage/**'
    ]
  }
];