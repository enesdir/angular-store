/** @typedef {import('@ianvs/prettier-plugin-sort-imports').PluginConfig} SortImportsConfig */
/** @typedef {import('prettier').Config} PrettierConfig */

/**
 * @file Prettier Configuration
 * @see https://prettier.io/docs/en/configuration.html
 * @see https://prettier.io/docs/en/options.html
 * @see https://github.com/rx-ts/prettier/tree/master/packages/sh
 */

/** @type {PrettierConfig | SortImportsConfig | TailwindConfig} */
module.exports = {
	useTabs: true,
	bracketSameLine: true,
	bracketSpacing: true,
	trailingComma: 'all',
	tabWidth: 2,
	semi: true,
	singleQuote: true,
	quoteProps: 'as-needed',
	trailingComma: 'es5',
	printWidth: 120,
	arrowParens: 'always',
	endOfLine: 'lf',
	plugins: [
		// for sorting imports
		'@ianvs/prettier-plugin-sort-imports',
		// for sort fields in package.json
		'prettier-plugin-pkg',
		// for prettifying shellscript, Dockerfile, properties, gitignore, dotenv
		'prettier-plugin-sh',
		'prettier-plugin-jsdoc',
		'prettier-plugin-tailwindcss',
	],
	importOrder: ['^(@angular/(.*)$)|^(angular$)', '<THIRD_PARTY_MODULES>', '', '^types$', '^[./]'],
	importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
};
