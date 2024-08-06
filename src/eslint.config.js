// eslint.config.js
export default [
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: {
      react: ['react'],
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the react version
      },
    },
    dependencies: {
      'eslint-plugin-react': '^7.32.0',
    },
    devDependencies: {
      eslint: '^8.0.0',
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: { multiline: true, consistent: true },
          ObjectPattern: { multiline: true, consistent: true },
          ImportDeclaration: { multiline: true, consistent: true },
          ExportDeclaration: { multiline: true, consistent: true },
        },
      ],
      // Add other rules as needed
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
  },
];
