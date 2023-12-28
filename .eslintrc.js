/** @type {import("eslint").Linter.Config} */

module.exports = {
  extends: ["robust"],
  parser: "@typescript-eslint/parser",
  ignorePatterns: [".eslintrc.js"],
  parserOptions: {
    project: true,
  },
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
  root: true,
};
