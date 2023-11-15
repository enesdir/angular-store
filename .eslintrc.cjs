/**
 * @file ESLint Configuration - Root
 * @see https://eslint.org/docs/user-guide/configuring
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	ignorePatterns: ['node_modules/**/*'],
	plugins: ['decorator-position', '@typescript-eslint', 'unused-imports'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	overrides: [
		{
			files: ['*.ts'],
			parserOptions: {
				project: ['tsconfig.json'],
				createDefaultProgram: true,
			},
			extends: [
				'eslint:recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:@angular-eslint/recommended',
				'plugin:@angular-eslint/template/process-inline-templates',
				'prettier',
			],
			rules: {
				'@angular-eslint/directive-selector': [
					'error',
					{
						type: 'attribute',
						prefix: 'app',
						style: 'camelCase',
					},
				],
				'@angular-eslint/component-selector': [
					'error',
					{
						type: 'element',
						prefix: 'app',
						style: 'kebab-case',
					},
				],
				//#region  //*=========== Unused Import ===========
				'unused-imports/no-unused-imports': 'warn',
				'unused-imports/no-unused-vars': [
					'warn',
					{
						vars: 'all',
						varsIgnorePattern: '^_',
						args: 'after-used',
						argsIgnorePattern: '^_',
					},
				],
				//#endregion  //*======== Unused Import ===========
			},
		},
		{
			files: ['*.html'],
			extends: [
				'plugin:@angular-eslint/template/recommended',
				'plugin:@angular-eslint/template/accessibility',
				'prettier',
			],
			rules: { '@angular-eslint/template/prefer-self-closing-tags': 'error' },
		},
	],
};
