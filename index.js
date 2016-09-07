module.exports = {
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 6,
		'sourceType': 'module'
	},
	'rules': {
		'no-trailing-spaces': 'error',
		'indent': ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		'no-console': 'warn',
		'quotes': [
			'warn',
			'single', {
				'avoidEscape': true,
				'allowTemplateLiterals': true
			}
		],
		'semi': ['warn', 'never']
	}
}
