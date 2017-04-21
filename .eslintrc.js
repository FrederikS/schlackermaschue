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
    'prettier/prettier': ['error', { trailingComma: 'es5', singleQuote: true }],
    'react/require-default-props': 'off',
    'react/sort-comp': [
      'error',
      {
        order: [
          'type-annotations',
          'static-methods',
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
