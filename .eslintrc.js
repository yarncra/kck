module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/airbnb"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "eol-last": 0,
    "max-len": ["error", { code: 120 }],
    "no-shadow": "off",
    "no-param-reassign": 0,
    quotes: [2, "single", { avoidEscape: true }],
  },
};
