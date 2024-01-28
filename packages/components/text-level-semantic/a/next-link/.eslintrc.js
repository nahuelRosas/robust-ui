/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: ['@robust-ui/eslint-config/next.js'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.lint.json',
	},
	rules: {
		'@next/next/no-html-link-for-pages': 'off',
	},
};
