module.exports = {
  env: {
    browser: true,
    node: true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    // add more generic rulesets here, such as:
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
    "prettier",
  ],
  rules: {
    // override/add rules settings here, such as:
    "vue/no-unused-vars": "error",
    "vue/script-setup-uses-vars": "error",
    "vue/require-default-prop": "off",
    "vue/attribute-hyphenation": "off",
    "vue/multi-word-component-names": "off",
  },
};
