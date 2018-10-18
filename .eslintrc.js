// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-shadow": ["warn", { "builtinGlobals": false, "hoist": "functions", "allow": [] }],
    "no-param-reassign": ["warn", { "props": true, "ignorePropertyModificationsFor": ["bar"] }],
    "max-len": ["off", { "comments": 100 }],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    //'generator-star-spacing': 0,
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow debugger during development
    //'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    //"off"
    // or 0 - turn the rule off 不验证 "warn"==="off"
    // or 1 - turn the rule on as a warning(doesn’ t affect exit code) 警告 "warning"
    // or 2 - turn the rule on as an error(exit code is 1 when triggered) 错误  "error"
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 },
    ],
    "linebreak-style": [
      0,
      "error",
      "windows"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-multi-assign": "off",
    "no-unused-vars": [ //没被使用的变量
      1
    ],
    "no-param-reassign": [1, { "props": false }], // 不允许重新赋值函数形参，但可以修改其属性值。
    "no-restricted-syntax": 0, // 不推荐用for-in for-of
    "eol-last": [ //在末尾(';')，新的一行被要求
      0
    ],
    "space-before-function-paren": ["error", {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always"
    }],
    //名称不能在 ES6 环境中自动分配，则要求函数表达式具有名称
    "func-names": ["error", "as-needed"],
    'no-console': 'off',
    "no-nested-ternary": "off", //嵌套的三目运算
    "no-underscore-dangle": "off", //下划线
    "no-extend-native": ["error", { "exceptions": ["Promise"] }],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-bitwise": [0, { "allow": ["~"] }]
  }
}