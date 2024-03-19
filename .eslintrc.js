module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-param-reassign': 'off',
    'linebreak-style': 'off',
    'no-alert': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: ['error', 'never'],
    //'comma-dangle': ['error', 'never'],
    'comma-dangle': 'error',
    'comma-spacing': 'error',
    'eol-last': ['error'],
    indent: ['error', 2],
    quotes: ['error', 'single'], // 문자열따옴표 설정(single / double)
    'vue/html-indent': ['error', 2],
    'max-len': ['error', { code: 400 }],
    'fun-names': 'off'
  }
}
