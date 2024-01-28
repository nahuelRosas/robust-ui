/** @type {import("eslint").Linter.Config} */

module.exports = {
  extends: ["@robust-ui/eslint-config/library.js"],
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["*.js"],
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
