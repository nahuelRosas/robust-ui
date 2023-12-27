/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["eslint-config-robust"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};

