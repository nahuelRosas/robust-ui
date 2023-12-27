/** @type {import("eslint").Linter.Config} */

module.exports = {
  ignorePatterns: ["apps/**", "packages/**"],
  extends: ["eslint-config-robust",],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
