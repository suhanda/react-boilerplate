require("@babel/register");
const path = require("path");

module.exports = {
    env: {
        browser: true,
        es6: true,
        "jest/globals": true
    },
    extends: ["airbnb","plugin:jest/recommended"],
    globals: {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: [
        "react",
        "jest"
    ],
    rules: {
        indent: ["error", 4],

        // react
        "react/jsx-indent":["error", 4],
        "react/jsx-indent-props":["error", 4],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    },

    settings: {
        "import/resolver" : {
            node: {
                paths: [path.resolve(__dirname, 'src')],
            },
            webpack:{
                config: path.resolve(__dirname, 'webpack.config.js')
            },
        }   
    }
};