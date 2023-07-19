/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 新增
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': 'off',
    'no-new': 'off',
    'vue/no-unused-components': 'off',
    "vue/no-multiple-template-root": 'off',

  }
}
