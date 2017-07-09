module.exports = {
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],
  plugins: ['react', 'jsx-a11y', 'import', 'flowtype', 'prettier'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'prettier/prettier': ['error', { trailingComma: 'es5', singleQuote: true, printWidth: 100 }],
    'react/require-default-props': 'off',
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-methods',
          'type-annotations',
          'lifecycle',
          'everything-else',
          'render',
        ],
      },
    ],
  },
  settings: {
    'import/core-modules': ['config'],
  },
  env: {
    browser: true,
  },
};
