// module.exports = {
//   env: {
//     browser: true,
//     es2021: true
//   },
//   extends: ['wordpress', 'standard'],
//   parserOptions: {
//     ecmaVersion: 12,
//     sourceType: 'module'
//   },
//   ignorePatterns: ['dist/**/*.js'],
//   rules: {
//     'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }]
//   },
//   plugins: ['prettier']
// }

/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "project": "./tsconfig.json",
        "tsconfigRootDir": "./"
    },
    plugins: [
        "@typescript-eslint",
        "import"
    ],
    ignorePatterns: ["_extras", "_release", "dist", "node_modules"],

    extends: [
        "eslint:recommended",
        "plugin:jest/recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb",
        "airbnb/hooks",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],

    env: {
        es2020: true,
        browser: true,
        node: true,
    },

    rules: {
        camelcase: "off",

        "no-use-before-define": "off",

        "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],

        "@typescript-eslint/no-use-before-define": ["error"],

        "import/no-extraneous-dependencies": "off",

        "import/prefer-default-export": "off",

        "import/extensions": [
            "error",
            "ignorePackages",
            { ts: "never", tsx: "never" },
        ],

        "react/function-component-definition": [
            2,
            { namedComponents: "arrow-function" },
        ],
    },

    overrides: [
        {
            files: ["**/*.d.ts", "**/types.ts"],
            rules: { "no-unused-vars": "off" },
        },
        {
            files: ["**/*.tsx"],
            rules: { "react/prop-types": "off" },
        },
    ],

    settings: {
        "import/resolver": {
            webpack: {
                config: {
                    externals: {
                        lodash: "lodash",
                        react: "React",
                        "react-dom": "ReactDOM",
                        "@wordpress/block-editor": "wp.blockEditor",
                        "@wordpress/blocks": "wp.blocks",
                        "@wordpress/components": "wp.components",
                        "@wordpress/data": "wp.data",
                        "@wordpress/edit-post": "wp.editPost",
                        "@wordpress/element": "wp.element",
                        "@wordpress/hooks": "wp.hooks",
                        "@wordpress/i18n": "wp.i18n",
                        "@wordpress/plugins": "wp.plugins",
                        "@wordpress/rich-text": "wp.richText",
                    },
                    resolve: {
                        alias: {
                            "@types": path.resolve(__dirname, "types"),
                            "@": path.resolve(__dirname, "src"),
                        },
                        extensions: [".ts", ".tsx"],
                    },
                },
            },
            "typescript": {},
            alias: {
                map: [
                    ['@types', './types']
                ]
            }
        },

        react: {
            version: "17.0.1", // Version used in WP 5.9
        },
    },
};
