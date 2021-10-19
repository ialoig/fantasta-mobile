module.exports = {
	/** environment specification */
	env: {
		"es2021": true, //adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12
		"node": true //Node.js global variables and Node.js scoping
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-native/all",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:i18n-json/recommended"
	],
	settings: {
		"react": {
			version: "17"
		}
	},
	parserOptions: {
		ecmaFeatures: {
			"jsx": true
		},
		ecmaVersion: 12,
		sourceType: "module",
		requireConfigFile: false //allow @babel/eslint-parser to run on files that do not have a Babel configuration associated with them
	},
	plugins: [
		"react",
		"react-native"
	],
	rules: {
		indent: [
			"error",
			"tab"
		],
		quotes: [
			"warn",
			"double"
		],
		semi: [
			"error",
			"never"
		],
		//https://eslint.org/docs/rules/object-curly-spacing
		//require or disallow spaces between curly braces 
		"object-curly-spacing": ["error", 
			"always", 
			{ "arraysInObjects": false } //disallows spacing inside of braces of objects beginning and/or ending with an array element (applies when the first option is set to always)
		],
		"sort-imports": ["error", {
			ignoreCase: true, //When true the rule ignores the case-sensitivity of the imports local name.
			ignoreDeclarationSort: true, //Ignores the sorting of import declaration statements.
			ignoreMemberSort: false, //Ignores the member sorting within a multiple member import declaration.
			memberSyntaxSortOrder: [
				"none", //import module without exported bindings.
				"all", //import all members provided by exported bindings.
				"multiple", //import multiple members.
				"single"], //import single member.
			allowSeparatedGroups: false //When true the rule checks the sorting of import declaration statements only for those that appear on consecutive lines.
		}],
		//https://github.com/benmosher/eslint-plugin-import
		//severity level: 0 = off, 1 = warn, 2 = error
		"import/no-unresolved": 2, //Ensure imports point to a file/module that can be resolved.
		"import/named": 0, //Ensure named imports correspond to a named export in the remote file
		"import/namespace": 0, //Ensure imported namespaces contain dereferenced properties as they are dereferenced.
		"import/default": 2, //Ensure a default export is present, given a default import
		"import/order": //Enforce a convention in module import order
		[
			"error",
			{
				alphabetize: {
					order: "asc",
					caseInsensitive: false,
				},
				groups: ["builtin", "external", "parent", "sibling", "index"],
			}
		],
		"react-native/no-unused-styles": 2,
		"react-native/split-platform-components": 2,
		"react-native/no-inline-styles": 2,
		"react-native/no-color-literals": 2,
		"react-native/no-raw-text": 2,
		"react-native/no-single-element-style-arrays": 2,
		/** translations rules */
		"i18n-json/valid-message-syntax": [2, {
			syntax: "icu",
		}],
		"i18n-json/valid-json": 2,// linting of each JSON translation file
		"i18n-json/sorted-keys": [2, { //automatic case-sensitive ascending sort of all keys in the translation file
			order: "asc",
			indentSpaces: 2,
		}],
		"i18n-json/identical-keys": 0, //compare each translation file's key structure with a reference translation file to ensure consistency
	}
}
