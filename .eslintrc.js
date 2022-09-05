const path = require('path')
module.exports = {
  globals: {
    window: true,
    module: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    camelcase: 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',

    // "no-use-before-define": "off",
    // "import/no-extraneous-dependencies": "off",
    // "import/prefer-default-export": "off",
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
    amd: true,
    node: true,
  },
  extends: [
    'wordpress',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          externals: {
            lodash: 'lodash',
            react: 'React',
            'react-dom': 'ReactDOM',
            '@wordpress/block-editor': 'wp.blockEditor',
            '@wordpress/blocks': 'wp.blocks',
            '@wordpress/components': 'wp.components',
            '@wordpress/data': 'wp.data',
            '@wordpress/edit-post': 'wp.editPost',
            '@wordpress/element': 'wp.element',
            '@wordpress/hooks': 'wp.hooks',
            '@wordpress/i18n': 'wp.i18n',
            '@wordpress/plugins': 'wp.plugins',
            '@wordpress/rich-text': 'wp.richText',
          },
          // resolve: {
          //     alias: {
          //         "@types": path.resolve(__dirname, "types"),
          //         "@": path.resolve(__dirname, "src"),
          //     },
          //     extensions: [".ts", ".tsx"],
          // },
        },
      },
      // alias: {
      //     map: [
      //         ['@types', './types']
      //     ]
      // }
    },
    react: {
      version: '18.2.0',
    },
  },
}
