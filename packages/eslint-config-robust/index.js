module.exports = {
  extends: ["next/core-web-vitals", "turbo", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  env: {
    node: true,
    browser: true,
    es6: true,
  },

  globals: {
    NODE_ENV: "readonly",
  },
};
