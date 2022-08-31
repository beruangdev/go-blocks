const path = require('path')

module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: ['import'],
  ignorePatterns: ['_extras', '_release', 'dist', 'node_modules'],

  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@wordpress/eslint-plugin/recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off',
    'no-unused-vars': 'error',
    camelcase: ['warn', { allow: ['element_id'] }],
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
  },
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
          resolve: {
            alias: {
              '@types': path.resolve(__dirname, 'types'),
              '@': path.resolve(__dirname, 'src'),
            },
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
          },
        },
      },
    },
    react: {
      version: '18.2.0',
    },
  },
}
