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
    },
    "settings": {
        "import/core-modules": [ "config" ]
    }
};