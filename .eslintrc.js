/** @type {import("eslint").Linter.Config} */

module.exports = {
  extends: ["robust",],
  parser: "@typescript-eslint/parser",
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
