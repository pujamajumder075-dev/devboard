import js from "@eslint/js";
import globals from "globals";

export default [
    // Applies the official recommended JavaScript rules
    js.configs.recommended,
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        rules: {
            "no-unused-vars": "error", // Throws an error for declared but unused variables
            "no-console": "warn",      // Warns when a console.log is left in production code
            "eqeqeq": "error"          // Requires the use of === and !==
        }
    }
];
