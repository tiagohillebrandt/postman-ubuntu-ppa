module.exports = {
  "extends": "airbnb-base",
  "plugins": [
    "mocha"
  ],
  "rules": {
    "global-require": "off",
    "brace-style": ["error", "stroustrup", {
      "allowSingleLine": true
    }],
    "no-unused-expressions": "off", // to allow `expr1 && expr2`
    "consistent-return": "off", // causing issue in early bail-outs
    "one-var": "off",
    // "one-var": ["error", { var: "never", let: "consecutive", const: "consecutive" }],
    "object-curly-newline": ["error", { "multiline": true }],
    "indent": ["error", 2, {
      "VariableDeclarator": {
        "var": 2, "let": 2, "const": 3
      }
    }],

    // MOCHA
    "mocha/no-exclusive-tests": "error",
    "mocha/no-skipped-tests": "warn"
  }
};
