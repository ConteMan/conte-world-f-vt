module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'alloy',
    'alloy/vue',
    'alloy/typescript',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    browser: true,
    es6: true,
    node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  rules: {
    // 自定义你的规则
    'prettier/prettier': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/class-name-casing': 'off',
    'vue/valid-v-slot': 'off',
    'no-debugger': 'off',
    'vue/experimental-script-setup-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
