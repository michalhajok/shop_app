module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['airbnb', 'prettier'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'react/jsx-filename-extension': [0],
        'import/extensions': 'off',
        'no-underscore-dangle': ['error', { allow: ['_delete', '_id', '_basket'] }],
        'react/prop-types': 'off',
        'default-param-last': 0,
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],
        'jsx-a11y/label-has-for': [
            'error',
            {
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],
    },
};
