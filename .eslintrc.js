module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    wx: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:import/typescript',
  ],
  plugins: ['prettier', 'react-hooks', '@typescript-eslint'],
  rules: {
    'no-underscore-dangle': 'off',
    'array-callback-return': 'off',
    'consistent-return': 'off',
    'react/no-access-state-in-setstate': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'no-param-reassign': 'off',
    'react/prop-types': 'off', // ts 不需要prop-type
    'import/extensions': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    '@typescript-eslint/camelcase': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-restricted-globals': ['error', 'event'], // 禁用的全局变量
    'jsx-a11y/no-noninteractive-element-interactions': 'off', // 非交互性的标签，允许绑定事件
    '@typescript-eslint/no-use-before-define': [
      // 允许function的提升使用
      'error',
      { functions: false, classes: true },
    ],
    'react/jsx-wrap-multilines': 'off', // 多行jsx 需要用()包裹
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'react/destructuring-assignment': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-bitwise': 0,
    'no-prototype-builtins': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    'no-var': 0,
    '@typescript-eslint/no-var-requires': 0,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
