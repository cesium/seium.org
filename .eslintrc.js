module.exports = {
  extends: [
    'nextjs',
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    indent: 0,
    camelcase: ['error', { properties: 'always' }],
    'no-tabs': 0,
    'eol-last': ['error', 'always'],
    'no-underscore-dangle': 0,
    'no-console': 0,
    'func-names': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-wrap-multilines': 0,
    'react/react-in-jsx-scope': 0,
    'react/no-unescaped-entities': 0,
    'react/require-default-props': 0,
  },
};
