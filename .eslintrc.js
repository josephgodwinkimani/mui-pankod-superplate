module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"settings": {
		"react": {
			"version": "detect"
		}
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"overrides": [
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"simple-import-sort"
	],
	"rules": {
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error"
	}
}
