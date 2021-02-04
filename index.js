modules.export={
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "prettier",
        "prettier/react"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": ["react", "prettier"],
    "rules": {
        "prettier/prettier": [2],
        "react/jsx-indent": 2,
        "react/jsx-indent-props": 0,
        "react/prop-types": 0,
        "react/no-did-update-set-state": 1,
        "react/no-unescaped-entities": 1,
        "react/destructuring-assignment": [1, "always"],
        "react/jsx-props-no-spreading": [
            2,
            {
                "custom": "ignore"
            }
        ],
        "no-unused-expressions": [
            2,
            {
                "allowShortCircuit": true
            }
        ],
        "prefer-destructuring": [1],
        "jsx-a11y/no-static-element-interactions": 1,
        "jsx-a11y/click-events-have-key-events": 1,
        "jsx-a11y/label-has-associated-control": 1,
        "no-nested-ternary": 1,
        "no-underscore-dangle": [
            2,
            {
                "allow": ["__REDUX_DEVTOOLS_EXTENSION__"]
            }
        ],
        "import/prefer-default-export": 1,
        "no-console": [2],
        "no-var": [2]
    }
}
