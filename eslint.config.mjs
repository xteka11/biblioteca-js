import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    ignores: ["node_modules/**", "coverage/**"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      "no-unused-vars": "error",
      "camelcase": "error",
      "eqeqeq": "error",
      "prefer-const": "error",
      "no-magic-numbers": ["warn", { "ignore": [0, 1] }],
    },
  },
];