module.exports = {
    "extends": [
        "airbnb",
        "plugin:flowtype/recommended",
        "plugin:react/recommended",
        "prettier",
        "prettier/flowtype",
        "prettier/react"
    ],
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
        "flowtype",
        "prettier"
    ],
    "rules": {
        "prettier/prettier": ["error", {"trailingComma": "es5", "singleQuote": true}],
        "react/require-default-props": "off"
    },
    "settings": {
        "import/core-modules": [ "config" ]
    }
};