// JavaScript 기본 설정
import prettierConfig from 'eslint-config-prettier';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';

import importPlugin from 'eslint-plugin-import';
// 웹 접근성 관련 규칙
import jsxA11y from 'eslint-plugin-jsx-a11y';
// Prettier 관련 설정
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
// React 관련 규칙 및 플러그인
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tailwindcss from 'eslint-plugin-tailwindcss';
// 글로벌 변수 환경 설정
import globals from 'globals';
// TypeScript 관련 플러그인 및 설정
import tseslint from 'typescript-eslint';

import js from '@eslint/js';

// ESLint 구성 내보내기
export default tseslint.config(
  // 기본 설정 옵션
  {
    ignores: [
      'dist',
      'public/mockServiceWorker.js',
      '**/*.test.ts',
      '**/*.test.tsx',
      '**/*.config.{ts|tsx}',
      '**/*.config.js',
      '**/*.config.ts',
      '**/*.config.mjs',
      '**/*.config.cjs',
    ],
  },
  {
    // 확장 규칙 설정
    extends: [
      js.configs.recommended, // JavaScript 권장 규칙
      ...tseslint.configs.recommended, // TypeScript 권장 규칙
      prettierConfig, // Prettier 관련 규칙 적용
      importPlugin.flatConfigs.recommended, // import 권장 규칙
      importPlugin.flatConfigs.typescript, // TypeScript import 권장 규칙
    ],

    // 적용 파일 패턴
    files: ['**/*.{ts,tsx}'], // TypeScript 파일만 대상으로 설정

    // 언어 옵션
    languageOptions: {
      ecmaVersion: 2020, // 최신 ECMAScript 문법 사용
      globals: globals.browser, // 브라우저 환경 글로벌 변수 설정
    },

    // 플러그인 등록
    plugins: {
      react: react, // React 관련 규칙
      'react-hooks': reactHooks, // React Hooks 관련 규칙
      'react-refresh': reactRefresh, // React Refresh 관련 규칙
      'jsx-a11y': jsxA11y, // 웹 접근성 관련 규칙
      tailwindcss: tailwindcss,
      prettier: prettier, // Prettier 규칙
    },

    // 규칙 설정
    rules: {
      ...react.configs.recommended.rules, // React 권장 규칙
      ...reactHooks.configs.recommended.rules, // React Hooks 권장 규칙
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }, // React Refresh 관련 규칙
      ],
      'jsx-a11y/alt-text': 'warn', // 접근성: alt 속성 검사
      'prettier/prettier': ['warn', { usePrettierrc: false }], // Prettier 관련 규칙 적용
      'import/order': [
        'off',
        {
          'newlines-between': 'always', // import 사이에 한 줄 띄우기
          alphabetize: { order: 'asc', caseInsensitive: true },
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/classnames-order': 'off',
      'no-unused-vars': 'off',
      'import/no-dynamic-require': 'warn',
      'import/no-nodejs-modules': 'warn',
    },

    // 설정 추가 (예: import-resolver)
    settings: {
      'import/resolver': {
        node: { 
          extensions: ['.js', '.jsx', '.ts', '.tsx'], 
          moduleDirectory: ['node_modules', 'src/'], 
        },
        typescript: {
          alwaysTryTypes: true, // 타입스크립트 파일도 찾도록 설정
          project: './tsconfig.json', // 프로젝트의 tsconfig.json을 사용
        },
      },
      react: {
        version: '19.0.0',
      },
    },
  },
);
